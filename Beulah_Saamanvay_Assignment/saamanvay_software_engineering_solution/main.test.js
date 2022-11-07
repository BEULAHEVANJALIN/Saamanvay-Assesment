import highestAverageBMI from './main.js';

let input = [
    {height: 175, weight: 50, age: 21},
	{height: 170, weight: 77, age: 22},
	{height: 175, weight: 70, age: 24},
	{height: 175, weight: 75, age: 26},
	{height: 175, weight: 50, age: 29},
	{height: 170, weight: 77, age: 34}
];
if (JSON.stringify(highestAverageBMI(input)) == JSON.stringify({ageGroup: '30-34.9', averageBmi: 26.64})) {
    console.log("Test 1 Passed!");
}
else {
    console.log("Test 1 Failed!");
}


input = [
    {height: 175, weight: 50, age: 24.9},
    {height: 170, weight: 80, age: 25},
    {height: 170, weight: 90, age: 29.9},
    {height: 175, weight: 90, age: 32},
    {height: 175, weight: 50, age: 39},
    {height: 170, weight: 77, age: 44}
];
if (JSON.stringify(highestAverageBMI(input)) == JSON.stringify({ageGroup: "25-29.9", averageBmi: 29.41})) {
    console.log("Test 2 Passed!");
}
else {
    console.log("Test 2 Failed!");
}


try {
    input = [];
    maxAverage = highestAverageBMI(input);
}
catch(maxAverage) {
    if (maxAverage == "Error: Invalid Input") {
        console.log("Test 3 Passed!");
    }
    else {
        console.log("Test 3 Failed!");
    }
}

try {
    input = [{}];
    maxAverage = highestAverageBMI(input);
}
catch(maxAverage) {
    if (maxAverage == "Error: Invalid Input") {
        console.log("Test 4 Passed!");
    }
    else {
        console.log("Test 4 Failed!");
    }
}

try {
    input = [ {height: 175, weight: 50, age: 24.9}, {}];
    maxAverage = highestAverageBMI(input);
}
catch(maxAverage) {
    if (maxAverage == "Error: Invalid Input") {
        console.log("Test 5 Passed!");
    }
    else {
        console.log("Test 5 Failed!");
    }
}
