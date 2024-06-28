class Job {
    type;
    file;
    format; 
    constructor(job) { 
        this.type = job.type; 
        this.file = job.file; 
        this.format = job.format;
    }
}

class JobWorker {
  worker;
  job;
  workStatus; // idle, working, completed
  constructor() {
    this.worker = new Worker("worker.js");
    this.workStatus = "idle";
    this.job = null;
  }

  setJob(job, callback) {
    this.job = job;
    this.workStatus = "working";
    this.worker.postMessage(job);
    this.worker.onmessage = (e) => {
      this.workStatus = "completed";
      callback(e.data);
    };
    this.workStatus = "idle";
    this.job = null
  }

  
}

class JobScheduler {
  jobs;
  worker;
  constructor() {
    this.jobs = {
      "queuedJobs": [],
      "runningJobs": [],
      "completedJobs": [],
    };
    this.worker = []
  }

  addJob(job) {
    this.jobs.queuedJobs.push(job);
  }

  addWorker(worker) {
    this.worker.push(worker);
  }

  assignJobs() {
    this.jobs.queuedJobs.forEach((job) => {
      this.worker.forEach((worker) => {
        if (worker.workStatus === "idle") {
          this.jobs.runningJobs.push(job);
          worker.setJob(job, (result) => {
            this.jobs.completedJobs.push(result);
          });
        }
      });
    });
  }

  getCompletedJobs() {
    return this.jobs.completedJobs;
  }

  getRunningJobs() {
    return this.jobs.runningJobs;
  }

  getQueuedJobs() {
    return this.jobs.queuedJobs;
  }


}



const tick = performance.now();

const job1 = new Job({ type: "data_processing", file: "data.txt" });
const job2 = new Job({ type: "report_generation", format: "pdf" });

const worker1 = new JobWorker();
const worker2 = new JobWorker();


const jobScheduler = new JobScheduler();

jobScheduler.addJob(job1);
jobScheduler.addJob(job2);

jobScheduler.addWorker(worker1);
jobScheduler.addWorker(worker2);

jobScheduler.assignJobs();

worker1.workStatus = "idle";

console.log(jobScheduler.getCompletedJobs());

