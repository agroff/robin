import { Candidate } from './Candidate';
import { Match } from './Match';

interface Results {
    [key: string]: {
        win: number;
        loss: number;
    }
}

export class BattleEngine {

    private results: Results = {};

    constructor(private match?: Match) {
        if (!match) {
            this.match = new Match();
        }
    }

    private candidates: Candidate[] = [];
    // register map of candidate names to ensure we dont have duplicates
    private candidateNames: { [key: string]: boolean } = {};

    public registerCandidates(candidates: Candidate[]): void {
        for (const candidate of candidates) {
            const name = candidate.name;

            if (this.candidateNames[name] !== undefined) {
                throw new Error("Attempted to register duplicate candidate: " + name);
            }

            // record this name as used
            this.candidateNames[name] = true;

            this.candidates.push(candidate);
        }
    }

    public commenceBattle(): void {
        // todo
        for (let a = 0; a < this.candidates.length; a++) {
            for (let b = a + 1; b < this.candidates.length; b++) {
                const winner = this.match.execute(this.candidates[a], this.candidates[b]);
                let loser = this.candidates[b];
                if (winner.name === this.candidates[b].name) {
                    loser = this.candidates[a];
                }
                console.log(`Results:`);
                console.log(`  🏆 🏆 ${winner.name.padEnd(16)} 🏆 🏆 `);
                console.log(`  💀 💀 ${loser.name.padEnd(16)} 💀 💀 `);
                console.log('');
                this.addResult(winner, 'win');
                this.addResult(loser, 'loss');
            }
        }

        this.printResults();
    }

    private printResults() {
        const results: Array<{ name: string; win: number; loss: number }> = [];
        for (const name in this.results) {
            const result = this.results[name];
            results.push({
                name,
                win: result.win,
                loss: result.loss,
            });
        }

        results.sort((a, b) => {
            return b.win - a.win;
        });

        console.log('Final Results');
        console.log('----------------------------------');
        for(const result of results){
            console.log(`${result.name.padEnd(16)} Wins: ${result.win} Loss: ${result.loss}`);
        }
        console.log('');
        console.log('Hire Decision: ');
        console.log(`  🏆 🏆  ${results[0].name}  🏆 🏆`);
    }

    private addResult(candidate: Candidate, result: 'win' | 'loss') {
        if (!this.results[candidate.name]) {
            this.results[candidate.name] = {
                win: 0,
                loss: 0,
            };
        }

        this.results[candidate.name][result] += 1;
    }
}