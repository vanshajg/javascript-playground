import { test, expect } from 'bun:test';

import { flattenArray } from './index.ts';

test('flatten', () => {
    const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    const flattenedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(flattenArray(arr)).toEqual(flattenedArr);
})
