import { test, expect } from 'bun:test';
import { cloneObject } from './index'

test('cloning object', () => {
    const original = {
        name: "Vanshaj",
        address: {
            street: "andd",
            city: "Delhi"
        }
    }

    const clone = cloneObject(original)
    clone.address.street = 'burh'
    console.log(original)
    expect(clone.address == original.address).fai
})