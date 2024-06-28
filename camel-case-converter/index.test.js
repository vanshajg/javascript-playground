import { test, expect } from 'bun:test';
import {
    normalise,
    getNewKey
} from './index.js';

test('getNewKey', () => {
    expect(getNewKey('hello_world')).toBe('helloWorld');
});
