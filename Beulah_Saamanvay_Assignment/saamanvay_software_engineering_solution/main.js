import computeBMI from './bmiCalculator.js';
import findAgeGroup from './ageGroupFinder.js';
import getHighestAverageGroupAndBMI from './highestGroupFinder.js';
import accumulate from './accumulator.js';

export default function highestAverageBMI(objects) {
    if (!objects.length){
		throw new Error("Invalid Input");
	}
	let groupAccumulator = {};
	for (const obj of objects) {
        if (!Object.keys(obj).length){
            throw new Error("Invalid Input");
        }
		let group = findAgeGroup (obj.age);
		let bmi = computeBMI (obj.height, obj.weight);
		accumulate (group, bmi, groupAccumulator);
	}

	let [maxgroup, maxaverage] = getHighestAverageGroupAndBMI(groupAccumulator); 
	return {"ageGroup": maxgroup, "averageBmi": maxaverage};
}