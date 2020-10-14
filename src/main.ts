import { Candidate } from './model/Candidate';
import { BattleEngine } from './model/BattleEngine';
import { Csv } from './model/Csv';

const csv = new Csv();
const engine = new BattleEngine();

const run = async () => {
    
    const candidateData = await csv.parse(__dirname + '/data/applicants.csv');

    const candidates: Candidate[] = [];
    for(const data of candidateData){
        candidates.push(new Candidate(data));
    }

    engine.registerCandidates(candidates);

    engine.commenceBattle();
};

run();