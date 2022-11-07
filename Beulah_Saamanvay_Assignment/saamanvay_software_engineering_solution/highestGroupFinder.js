import getAverage from './averageCalculator.js';
import groupToString from './ageCategory.js'


export default function getHighestAverageGroupAndBMI(groupAccumulator) {
	let highestGroup = 0;
	let highestAverage = -1;

	for (const group in groupAccumulator) {
		let average = getAverage(groupAccumulator[group].total, groupAccumulator[group].count);
		if (average > highestAverage) {
			highestAverage = average;
			highestGroup = Number(group);
		}
	}
	return [groupToString(highestGroup), Math.round(highestAverage * 100) / 100];
}