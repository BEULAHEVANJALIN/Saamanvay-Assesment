export default function groupToString (group) {
    if (!Number.isFinite(group) || group < 0){
		throw new Error("Invalid Input");
	}
	let lower = group * 5;
	return `${lower}-${lower + 4.9}`
}