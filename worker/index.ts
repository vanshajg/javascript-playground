import Job from "./job.ts"

const workerURL = new URL("worker.ts", import.meta.url).href;

class JobWorker {
  _job: Job;
  _worker: Worker;
  _status: "idle" | "working";
  _callback: () => void; // callback to call when job is complete
  constructor() {
    this._worker = new Worker(workerURL);
    this._status = "idle";
  }
  setJob(job: Job) {
    this._job = job;
    this._status = "working";
  }
  get status() {
    return this._status;
  }
  completeJob() {
    this._status = "idle";
    this._callback();
  }
  set callback(callback: () => void) {
    this._callback = callback;
  }

}

class JobScheduler {
  _jobs;
  _workers: JobWorker[];
  constructor() {
    this._jobs = {
      queued: [],
      running: [],
      completed: []
    };
    this._workers = [];
  }
  addWorker(worker: JobWorker) {
    this._workers.push(worker);
  }
  addJob(job: Job) {
    this._jobs.queued.push(job);
  }
  assignJobs() {
    const availableWorkers = this._workers.filter(worker => worker.status === "idle");
    const availableJobs: Job[] = this._jobs.queued;
    const jobsToAssign = Math.min(availableWorkers.length, availableJobs.length);
    for (let i = 0; i < jobsToAssign; i++) {
      const worker = availableWorkers[i];
      const job = availableJobs.pop();
      if (job) {
        worker.setJob(job);
        worker.callback = () => {
          console.log("Job complete!!", + job)
          this._jobs.completed.push(job);
          this._jobs.running = this._jobs.running.filter(runningJob => runningJob !== job);
        }
        this._jobs.running.push(job);
      }
    }

  }
  getQueuedJobs() {
    return this._jobs.queued;
  }
  getRunningJobs() {
    return this._jobs.running;
  }
  getCompletedJobs() {
    return this._jobs.completed;
  }

}

const job1 = new Job({ type: "data_processing", file: "data.txt" });
const job2 = new Job({ type: "report_generation", format: "pdf" });

const worker1 = new JobWorker();
const worker2 = new JobWorker();

const scheduler = new JobScheduler();
scheduler.addWorker(worker1);
scheduler.addWorker(worker2);

scheduler.addJob(job1);
scheduler.addJob(job2);

scheduler.assignJobs();

worker1.completeJob();

const queuedJobs = scheduler.getQueuedJobs();
const runningJobs = scheduler.getRunningJobs();
const completedJobs = scheduler.getCompletedJobs();

console.log("Queued jobs:", queuedJobs);
console.log("Running jobs:", runningJobs);
console.log("Completed jobs:", completedJobs);

