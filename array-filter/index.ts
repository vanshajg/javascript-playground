const arr = [1,2,3,4,5,6,7,8,9,10];
Array.prototype.filter = function (callback) {
    console.log("calling custom filter")
    const result: any = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

const result = arr.filter((item) => item % 2 === 0);
console.log(result);