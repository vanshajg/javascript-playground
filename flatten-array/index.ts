const arr = [1, [2, 3], [[4, 5], 6, 7], 8, [9, [10, 11, [12, 13, [14]]]]];
export const flattenArray = (arr: number[] | (number & any[])) => {
    const result: number[] = [];
    arr.forEach((item: number) => {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        }
        else {
            result.push(item);
        }
    });
    return result;
}


const flatten = (arr: any[]): number[] => {
    return arr.reduce((prev, curr) => {
        if (Array.isArray(curr)) {
            prev = prev.concat(flatten(curr))
        }else {
            prev.push(curr)
        }
        return prev
    }, [])
}

console.log(flatten(arr))