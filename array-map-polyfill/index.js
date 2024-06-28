const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
Array.prototype.map = function (callback) {
    console.log("custom callback called", this)
    const val = []
    this.forEach(ele => val.push(callback(ele)))
    return val
}
arr.map(val => val * 2)