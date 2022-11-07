import accumulate from './accumulator.js';

let mutateobj = {};
accumulate(0, 20, mutateobj)
if (JSON.stringify(mutateobj) == JSON.stringify({})) {
    console.log("Test 1 Failed!");
}
else if (JSON.stringify(mutateobj) == JSON.stringify({ '0': { total: 20, count: 1 } })) {
    console.log("Test 1 Passed!");
}


try {
    mutateobj = {};
    mutator = accumulate(0,null, mutateobj)
}
catch(mutator) {
    if (mutator == "Error: Invalid Input") {
        console.log("Test 2 Passed!");
    }
    else {
        console.log("Test 2 Failed!");
    }
}

try {
    mutateobj = {};
    mutator = accumulate(null,10, mutateobj)
}
catch(mutator) {
    if (mutator == "Error: Invalid Input") {
        console.log("Test 3 Passed!");
    }
    else {
        console.log("Test 3 Failed!");
    }
}

try {
    mutateobj = {};
    mutator = accumulate(0,undefined, mutateobj)
}
catch(mutator) {
    if (mutator == "Error: Invalid Input") {
        console.log("Test 4 Passed!");
    }
    else {
        console.log("Test 4 Failed!");
    }
}

try {
    mutateobj = {};
    mutator = accumulate(undefined,10, mutateobj)
}
catch(mutator) {
    if (mutator == "Error: Invalid Input") {
        console.log("Test 5 Passed!");
    }
    else {
        console.log("Test 5 Failed!");
    }
}

try {
    mutateobj = {};
    mutator = accumulate(0,NaN, mutateobj)
}
catch(mutator) {
    if (mutator == "Error: Invalid Input") {
        console.log("Test 6 Passed!");
    }
    else {
        console.log("Test 6 Failed!");
    }
}

try {
    mutateobj = {};
    mutator = accumulate(NaN,10, mutateobj)
}
catch(mutator) {
    if (mutator == "Error: Invalid Input") {
        console.log("Test 7 Passed!");
    }
    else {
        console.log("Test 7 Failed!");
    }
}