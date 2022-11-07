import getAverage from './averageCalculator.js';


let testavg = getAverage(100, 5);

if (testavg == 20) {
    console.log("Test 1 Passed!");
}
else {
    console.log("Test 1 Failed!");
}


testavg = getAverage(0, 2);

if (testavg == 0) {
    console.log("Test 2 Passed!");
}
else {
    console.log("Test 2 Failed!");
}


try {
    testavg = getAverage(1, 0);
}
catch(testavg) {
    if (testavg == "Error: Invalid Input") {
        console.log("Test 3 Passed!");
    }
    else {
        console.log("Test 3 Failed!");
    }
}

try {
    testavg = getAverage(null, 2);
}
catch (testavg) {
    if (testavg == "Error: Invalid Input") {
        console.log("Test 4 Passed!"); 
    }
    else {
        console.log("Test 4 Failed!"); 
    }
}

try {
    testavg = getAverage(1, null);
}
catch(testavg) {
    if (testavg == "Error: Invalid Input") {
        console.log("Test 5 Passed!");
    }
    else {
        console.log("Test 5 Failed!");
    }
}

try {
    testavg = getAverage(undefined, 2);
}
catch(testavg) {
    if (testavg == "Error: Invalid Input") {
        console.log("Test 6 Passed!");
    }
    else {
        console.log("Test 6 Failed!");
    }
}

try {
    testavg = getAverage(1, undefined);
}
catch(testavg) {
    if (testavg == "Error: Invalid Input") {
        console.log("Test 7 Passed!");
    }
    else {
        console.log("Test 7 Failed!");
    }
}

try {
    testavg = getAverage(1);
}
catch(testavg) {
    if (testavg == "Error: Invalid Input") {
        console.log("Test 8 Passed!");
    }
    else {
        console.log("Test 8 Failed!");
    }
}

try {
    testavg = getAverage(NaN, 2);
}
catch(testavg) {
    if (testavg == "Error: Invalid Input") {
        console.log("Test 9 Passed!");
    }
    else {
        console.log("Test 9 Failed!");
    }
}

try {
    testavg = getAverage(1, NaN);
}
catch(testavg) {
    if (testavg == "Error: Invalid Input") {
        console.log("Test 10 Passed!");
    }
    else {
        console.log("Test 10 Failed!");
    }
}