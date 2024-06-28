const ARGS_LEN = 5;
const getSum = (...args) => {
  return args.length === ARGS_LEN
    ? args.reduce((prev, curr) => prev + curr, 0)
    : getSum.bind(null, ...args);
};


console.log(getSum(1)(2)(3)(4)(5)); // 15
console.log(getSum(1, 2)(3)(4)(5)); // 15
console.log(getSum(1, 2, 3)(4)(5)); // 15
console.log(getSum(1, 2, 3, 4)(5)); // 15


const currySum = () => {
    let prev = 0;
    return (number) => {
        prev += number;
        return prev;
    }
}

const sum = currySum()
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum(5));

