const worker = new Worker("worker.js");



const changeBackground = () => {
    const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink"]
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

worker.postMessage("Hello World");
worker.onmessage = (e) => {
    console.log(e.data);
}
