import { assert } from 'console';
import { readFileSync } from 'fs';

const solve = filename => {
    const input = readFileSync(filename, 'utf-8');

    const [ left, right ] = input
        .trim() // remove last blank line
        .split('\n') // split input into lines
        .map(line => line.split(/\s+/)) // split each line into a pair
        .map(pair => pair.map(num => parseInt(num, 10))) // parse as base 10 number
        .reduce(([ left, right ], [ a, b ]) => [ [ ...left, a ], [ ...right, b ] ], [ [], [] ]) // separate into left and right arrays
        .map(arr => arr.sort()) // sort both arrays

    const output = left
        .map((value, index) => [ value, right[index] ]) // pair numbers up
        .map(([ a, b ]) => Math.abs(a - b)) // calculate the distances
        .reduce((acc, val) => acc + val) // add up to total distance

    return output
}

assert(solve('test.txt') == 11)
console.log(solve('input.txt'))
