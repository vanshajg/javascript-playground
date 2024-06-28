import {expect, test} from 'bun:test'
import {flattenObject} from './index'

test("test flatten object", () => {
    const obj = {
        a: {
            b: {
                c: 1
            }
        },
        d: 1,
        e: {
            f: 2
        },
        g: {
            h: [1, 2, 3]
        }
    }
    const expected = {
        'a.b.c': 1,
        'd': 1,
        'e.f': 2,
        'g.h': [1, 2, 3]
    }
    const flattenObj = flattenObject(obj)
    expect(flattenObj).toEqual(expected)

})