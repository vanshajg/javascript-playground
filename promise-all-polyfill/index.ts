const fakeApi = (time): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}


export const promisePolyfill = (promise_list: Promise<number>[]) => {
    return new Promise((resolve, reject) => {
        let promise_count = promise_list.length
        const ret: number[] = []
        promise_list.forEach((promise, idx) => {
            promise.then(promise_data => {
                console.log(`promise ${idx} fulfilled, value: ${promise_data}`)
                promise_count--
                ret[idx] = promise_data
                if (promise_count === 0) {
                    resolve(ret)
                }
            }).catch(reason => {
                reject(reason)
            })
        })
    })
}

const promises = [fakeApi(1000), fakeApi(2000), fakeApi(3000), fakeApi(500)]

promisePolyfill(promises)
    .then(val => console.log(val))
    .catch(reason => {
        console.log(reason)
    })


