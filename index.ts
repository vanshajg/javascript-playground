const tick = performance.now();
for (let i = 0; i < 1000000000; i++) {
  // do something
}
const tock = performance.now();
console.log(`Elapsed time: ${tock - tick} milliseconds.`); // Elapsed time: 100 milliseconds.
