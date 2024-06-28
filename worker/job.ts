export default class Job {
    type;
    format;
    file;
    status; // queued, running, completed

    constructor(obj) {
        this.type = obj.type;
        this.format = obj.format;
        this.file = obj.file;
        this.status = "queued";
    }

}