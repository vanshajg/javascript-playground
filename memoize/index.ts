
const memoize = (fn: Function) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('cache hit');
            return cache[key];
        }
        return (cache[key] = fn(...args));
    };
}

const factorial = memoize((num) => {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
})

console.log(factorial(12))
console.log(factorial(11))
