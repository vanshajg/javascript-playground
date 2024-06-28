const my_api = (src, callback) => {
    fetch(src)
        .then(response => response.json())
        .then(json => callback(null, json))
        .catch(err => callback(err, null))
        .finally(() => console.log("finally"))
}

const promisify = (f: Function) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            const callback = (err, result) => {
                if (err) {
                    return reject(err)
                }
                resolve(result)
            }
            f.bind(this)(...args, callback)
        })
    }
}

const my_api_promise = promisify(my_api)
my_api_promise('https://jsonplaceholder.typicode.com/todos/1')
    .then(json => console.log(json))
    .catch(err => console.log(err))

const f = async (hello) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await resp.json()
    return json
}

f('hello')
    .then(json => console.log("json", json))
    .catch(err => console.log("error", err))