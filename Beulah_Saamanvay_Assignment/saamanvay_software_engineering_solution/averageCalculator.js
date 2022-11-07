export default function getAverage(totalsum, frequency) {
	if (!frequency || totalsum == null || isNaN(totalsum)){
		throw new Error("Invalid Input");
	}
	return totalsum / frequency;
}