import { expect } from 'chai';
import { Average } from '../src/Average';


describe('Average', () => {
    const average = new Average();

    it('Averages a small array', () => {
        expect(average.calculate([2, 6])).to.equal(4);
    });

    it('Averages an empty array', () => {
        expect(average.calculate([])).to.equal(0);
    });
});