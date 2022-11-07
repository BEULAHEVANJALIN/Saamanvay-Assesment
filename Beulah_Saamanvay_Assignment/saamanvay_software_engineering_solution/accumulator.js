export default function accumulate(group, bmi, groupAccumulator) {
    if (!Number.isFinite(group) || !Number.isFinite(bmi) || group < 0 || bmi < 0){
		throw new Error("Invalid Input");
	}
	if (group in groupAccumulator) {
		groupAccumulator[group]["total"] += bmi;
		groupAccumulator[group]["count"] += 1;
	} else {
		groupAccumulator[group] = {"total": bmi, "count": 1};
	}
}