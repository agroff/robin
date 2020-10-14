import { Candidate } from './Candidate';
import { Random } from './Random';

export class Match {

    private roundCount = 0;
    // candidates ordered by initiative
    private candidates: Candidate[] = [];
    private padding = 20;

    constructor(private random?: Random) {
        if (!this.random) {
            this.random = new Random();
        }
    }

    public execute(candidateA: Candidate, candidateB: Candidate): Candidate {
        this.logHeader(candidateA, candidateB);

        this.roundCount = 0;

        // determine initiative
        const order = this.determineOrder(candidateA, candidateB);

        // copy these candidates to not alter initial values
        this.candidates[0] = order[0].copy();
        this.candidates[1] = order[1].copy();

        while (this.everyoneIsAlive()) {
            this.fightRound();
            this.candidates[0].resetAttacks();
            this.candidates[1].resetAttacks();
        }

        console.log('');

        if(this.candidates[0].isAlive()){
            return this.candidates[0];
        }
        return this.candidates[1];
    }

    private fightRound() {
        this.roundCount++;
        let step = 0;
        let canContinue = this.roundCanContinue();
        console.log('Round: ' + this.roundCount);
        while (canContinue) {
            const index = step % 2;
            const nextIndex = (step + 1) % 2;

            this.takeTurn(this.candidates[index], this.candidates[nextIndex]);

            canContinue = this.roundCanContinue();
            step++;
        }
    }

    private takeTurn(attacker: Candidate, victim: Candidate) {
        if (!attacker.canAttack()) {
            return;
        }
        attacker.attack(victim);
    }

    private everyoneIsAlive(): boolean {
        return (
            this.candidates[0].isAlive()
            && this.candidates[1].isAlive()
        );
    }

    private roundCanContinue(): boolean {
        if (!this.everyoneIsAlive()) {
            return false;
        }
        return (
            this.candidates[0].canAttack()
            || this.candidates[1].canAttack()
        );
    }

    private determineOrder(candidateA: Candidate, candidateB: Candidate) {
        const a = this.random.roll(candidateA.initiative);
        const b = this.random.roll(candidateB.initiative);
        if (a > b) {
            this.logInitiative(candidateA, a, b);
            return [candidateA, candidateB];
        }
        this.logInitiative(candidateB, b, a);
        return [candidateB, candidateA];
    }

    private logHeader(a: Candidate, b: Candidate) {
        console.log('----------------------------------------------');
        console.log(a.name.padEnd(this.padding) + ' -vs- ' + b.name.padStart(this.padding));
        console.log('----------------------------------------------');
    }

    private logInitiative(winner: Candidate, winning: number, losing: number) {
        console.log(`Initiative: ${winner.name} with a ${winning.toFixed(2)} vs ${losing.toFixed(2)}`);
    }
}