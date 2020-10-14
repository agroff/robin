import { StringMap } from './StringMap';

export class Candidate {
    public readonly name: string;
    public readonly damage: number;
    public readonly dodge: number;
    public readonly critical: number;
    public readonly initiative: number;
    private health: number;
    private attacks: number;
    private initialAttacks: number;

    constructor(data: StringMap) {
        this.name = this.getValidString(data.Name);
        this.damage = this.getValidInteger(data.Damage);
        this.dodge = this.getValidInteger(data.Dodge);
        this.critical = this.getValidInteger(data.Critical);
        this.initiative = this.getValidInteger(data.Initiative);
        this.health = this.getValidInteger(data.Health);
        this.attacks = this.getValidInteger(data.Attacks);
        this.initialAttacks = this.attacks;
    }

    public resetAttacks(): void {
        this.attacks  = this.initialAttacks;
    }

    public getRemainingHealth(): number {
        return this.health;
    }

    public attack(victim: Candidate): number {
        this.attacks -= 1;
        // could roll for crit here
        const damage = this.damage;
        const printDamage = damage.toString().padEnd(2);
        const oldHealth = victim.getRemainingHealth().toString().padEnd(3);
        const newHealth = victim.takeDamage(damage).toString().padEnd(3);
        const attackerName = this.name.padEnd(16);
        const victimName = victim.name.padEnd(16);
        console.log(` ${attackerName} 🧑‍👋 ${victimName} for ${printDamage} 💔  ${oldHealth} -> ${newHealth} 💙`);
        return damage;
    }

    public takeDamage(damage: number): number {
        this.health -= damage;
        return this.health;
    }

    public isAlive(): boolean {
        return this.health > 0;
    }

    public canAttack(): boolean {
        return this.attacks > 0;
    }

    public copy(): Candidate {
        return new Candidate({
            Name: this.name,
            Health: this.health,
            Damage: this.damage,
            Attacks: this.attacks,
            Dodge: this.dodge,
            Critical: this.critical,
            Initiative: this.initiative,
        });
    }

    private getValidString(value: any): string {
        if (typeof value === 'string') {
            return value;
        }
        throw new Error(`Invalid value: '${value}' is not a string`);
    }

    private getValidInteger(value: any): number {
        const num = parseInt(value, 10);
        if (num.toString() === value.toString()) {
            return num;
        }
        throw new Error(`Invalid value: '${value}' is not an integer`);
    }
}