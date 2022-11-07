import computeBMI from './bmiCalculator.js';


let testbmi = computeBMI(170, 77);

if (testbmi == 26.643598615916954) {
    console.log("Test 1 Passed!");
}
else {
    console.log("Test 1 Failed!");
}


testbmi = computeBMI(150, 0);

if (testbmi == 0) {
    console.log("Test 2 Passed!");
}
else {
    console.log("Test 2 Failed!");
}

try {
    testbmi = computeBMI(0, 50);
}
catch(testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 3 Passed!");
    }
    else {
        console.log("Test 3 Failed!");
    }
}

try {
    testbmi = computeBMI(-100, 50);
}
catch(testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 4 Passed!");
    }
    else {
        console.log("Test 4 Failed!");
    }
}

try {
    testbmi = computeBMI(100, -50);
}
catch(testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 5 Passed!");
    }
    else {
        console.log("Test 5 Failed!");
    }
}

try {
    testbmi = computeBMI(null, 50);
}
catch (testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 6 Passed!"); 
    }
    else {
        console.log("Test 6 Failed!"); 
    }
}

try {
    testbmi = computeBMI(150, null);
}
catch(testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 7 Passed!");
    }
    else {
        console.log("Test 7 Failed!");
    }
}

try {
    testbmi = computeBMI(undefined, 50);
}
catch(testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 8 Passed!");
    }
    else {
        console.log("Test 8 Failed!");
    }
}

try {
    testbmi = computeBMI(100, undefined);
}
catch(testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 9 Passed!");
    }
    else {
        console.log("Test 9 Failed!");
    }
}

try {
    testbmi = computeBMI(100);
}
catch(testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 10 Passed!");
    }
    else {
        console.log("Test 10 Failed!");
    }
}

try {
    testbmi = computeBMI(NaN, 50);
}
catch(testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 11 Passed!");
    }
    else {
        console.log("Test 11 Failed!");
    }
}

try {
    testbmi = computeBMI(100, NaN);
}
catch(testbmi) {
    if (testbmi == "Error: Invalid Input") {
        console.log("Test 12 Passed!");
    }
    else {
        console.log("Test 12 Failed!");
    }
}