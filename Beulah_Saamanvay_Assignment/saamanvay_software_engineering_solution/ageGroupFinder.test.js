import findAgeGroup from './ageGroupFinder.js';


let testgroup = findAgeGroup(20);

if (testgroup == 4) {
    console.log("Test 1 Passed!");
}
else {
    console.log("Test 1 Failed!");
}

testgroup = findAgeGroup(0);

if (testgroup == 0) {
    console.log("Test 2 Passed!");
}
else {
    console.log("Test 2 Failed!");
}

try {
    testgroup = findAgeGroup();
}
catch(testgroup) {
    if (testgroup == "Error: Invalid Input") {
        console.log("Test 3 Passed!");
    }
    else {
        console.log("Test 3 Failed!");
    }
}

try {
    testgroup = findAgeGroup(null);
}
catch(testgroup) {
    if (testgroup == "Error: Invalid Input") {
        console.log("Test 4 Passed!");
    }
    else {
        console.log("Test 4 Failed!");
    }
}

try {
    testgroup = findAgeGroup(undefined);
}
catch(testgroup) {
    if (testgroup == "Error: Invalid Input") {
        console.log("Test 5 Passed!");
    }
    else {
        console.log("Test 5 Failed!");
    }
}

try {
    testgroup = findAgeGroup(NaN);
}
catch(testgroup) {
    if (testgroup == "Error: Invalid Input") {
        console.log("Test 6 Passed!");
    }
    else {
        console.log("Test 6 Failed!");
    }
}

try {
    testgroup = findAgeGroup(Infinity);
}
catch(testgroup) {
    if (testgroup == "Error: Invalid Input") {
        console.log("Test 7 Passed!");
    }
    else {
        console.log("Test 7 Failed!");
    }
}

try {
    testgroup = findAgeGroup(-Infinity);
}
catch(testgroup) {
    if (testgroup == "Error: Invalid Input") {
        console.log("Test 8 Passed!");
    }
    else {
        console.log("Test 8 Failed!");
    }
}