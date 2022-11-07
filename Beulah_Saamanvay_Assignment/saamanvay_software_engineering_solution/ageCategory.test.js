import groupToString from './ageCategory.js'

let testgroup = groupToString(5);
if (testgroup == '25-29.9') {
    console.log("Test 1 Passed!");
}
else {
    console.log("Test 1 Failed!");
}

testgroup = groupToString(0);
if (testgroup == '0-4.9') {
    console.log("Test 2 Passed!");
}
else {
    console.log("Test 2 Failed!");
}

try {
    testgroup = groupToString();
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
    testgroup = groupToString(null);
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
    testgroup = groupToString(undefined);
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
    testgroup = groupToString(NaN);
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
    testgroup = groupToString(Infinity);
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
    testgroup = groupToString(-Infinity);
}
catch(testgroup) {
    if (testgroup == "Error: Invalid Input") {
        console.log("Test 8 Passed!");
    }
    else {
        console.log("Test 8 Failed!");
    }
}