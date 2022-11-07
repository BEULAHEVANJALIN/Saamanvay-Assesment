export default function findAgeGroup (age) {
    if (!Number.isFinite(age) || age < 0) {
		throw new Error("Invalid Input");
	}
	return Math.floor(age / 5);
}