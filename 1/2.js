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

    const output = left
        .map(a => [ a, right.filter(b => a == b).length ]) // map each left list value to it's count in the right list
        .reduce((accumulator, [ value, frequency ]) => accumulator + value * frequency, 0) // something idk

    return output
}

assert(solve('test.txt') == 31)
console.log(solve('input.txt'))
