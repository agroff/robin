import csvParser from 'csv-parser';
import * as fs from 'fs';
import { StringMap } from './StringMap';


export class Csv {

    /**
     * 
     * @param filePath path to CSV file
     */
    public async parse(filePath: string): Promise<StringMap[]> {
        return new Promise((resolve, reject) => {
            const results: StringMap[] = [];

            fs.createReadStream(filePath)
                .pipe(csvParser())
                .on('data', (data) => {
                    results.push(data);
                })
                .on('error', () => {
                    reject();
                })
                .on('end', () => {
                    resolve(results);
                });
        });
    }
}