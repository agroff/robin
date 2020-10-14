export class Random {
    /**
     * Determine a random value given a modifier stat
     * @param modifier an integer representing a stat
     */
    public roll(modifier: number): number {
        return Math.random() * modifier;
    }

    /**
     * Given a chance, roll a random number and determine whether it occurs.
     * Currently not used, can  be used for crit, dodge, etc
     * @param chance percent chance as an  integer (ie: 10 means a 10% chance of occurance)
     */
    public occurs(chance: number): boolean {
        return (Math.random() * 100) >= chance;
    }
}