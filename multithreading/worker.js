
self.onmessage = (job) => {
    let sum=0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    console.log("worker is running and")
    self.postMessage(sum);
}