const test = "The quick brown fox jumps over the lazy dogs";


String.prototype.split = function (delimiter): any[] {
    if (delimiter == "") {
        return Array.from(this)
    }
    let words:string[] = []
    let str: String = this
    let prev = ""
    for (let i = 0; i < str.length; i++) {
        if (str.substring(i,i+delimiter.length) == delimiter) {
            words.push(prev)
            prev = ""
            i += delimiter.length-1
            continue
        }
        prev += str[i]
    }
    words.push(prev)
    return words
}

console.log(test.split("dog"))
