export class Average {
    public calculate(numbers: number[]): number {
        let total = 0;

        // Prevent divide by zero errors
        if (numbers.length === 0) {
            return total;
        }

        for (const number of numbers) {
            total += number;
        }

        return total / numbers.length;
    }
}