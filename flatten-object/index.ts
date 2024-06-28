const obj = {
    a: {
        b: {
            c: 1,
            d: 2,
            e: {
                f: 3,
                g: 4,
            },
        },
    },
    z: {
        x: {
            y: [1,2,3,4,5],
        },
    }
};

const isObject = (val) : boolean => {
    return val != null && !Array.isArray(val) && typeof val == "object"
}

export const flattenObject = (obj) => {
    const ret = {}
    const delimiter = "."
    for (const key in obj) {
        if (isObject(obj[key])) {
            let temp = flattenObject(obj[key])
            for (const k in temp) {
                ret[key + delimiter + k] = temp[k]
            }
        }else {
            ret[key] = obj[key]
        }
    }
    return ret
}

console.log(flattenObject(obj))


