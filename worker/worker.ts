// prevents TS errors
declare var self: Worker;
import Job from "./job";

interface MessageEvent extends Event {
  data: Job;
}
self.onmessage = (event: MessageEvent) => {
  const job = event.data;
};