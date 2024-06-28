export const cloneObject = (obj: Object): Object => {
    const clone: any = {}
    for (const key in obj) {
        if (typeof obj[key] == 'object') {
            clone[key] = cloneObject(obj[key])
            continue
        }
        clone[key] = obj[key]
    }
    return clone
}
