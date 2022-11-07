export default function computeBMI(height, weight) {
    if (!Number.isFinite(height) || !Number.isFinite(weight) || height <= 0 || weight < 0 ){
		throw new Error("Invalid Input");
	}
	return weight * (100 ** 2)/(height ** 2);
}