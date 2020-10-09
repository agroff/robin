import { Average } from './Average';

const average = new Average();

const input = [2, 4, 7];
const result = average.calculate(input);

// eslint-disable-next-line
console.log(`The average of ${input} is ${result.toFixed(2)}!`);