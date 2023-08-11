// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (var i=0; i < trails.length; i++) {
        total += trails[i].length
    }

    return Math.round(total)
}

// Get the shortest of all trails
const shortestTrail = (trailArray) => {
    if (trailArray.length === 0) {
        return 0
    }

    let shortest = trailArray[0].length;

    for (const trail of trailArray) {
        if (trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

// Get the longest of all trails

const longestTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

// Get the sum of all river kilometers

const totalRiverLength = (river) => {
    let total = 0
    for (var i=0; i < river.length; i++) {
        total += river[i].length
    }

    return Math.round(total)
}

// Get the shortest river tour

const shortestRiver = (riverShort) => {
    if (riverShort.length === 0) {
        return 0
    }

    let shortest = riverShort[0].length;

    for (const river of riverShort) {
        if (river.length < shortest) {
            shortest = river.length
        }
    }

    return shortest
}

// Get the longest river tour

const longestRiver = (riverLong) => {
    if (riverLong.length === 0) {
        return 0
    }

    let longest = riverLong[0].length;

    for (const river of riverLong) {
        if (river.length > longest) {
            longest = river.length
        }
    }

    return longest
}

// Get the least expensive trails (trails with only one $ in the object)

const cheapestTrails = (trailCheap) => {
    let cheapTrails = "";

    for (const cheap of trailCheap) {
        if (cheap.price === "$") {
            cheapTrails += cheap.trailName + `\n    `
        }
    }

    return cheapTrails
}

// Get the most expensive trials (trails with 4 or more $ in the object)

const expensiveTrails = (trailExpensive) => {
    let expensiveTrails = "";

    for (const expensive of trailExpensive) {
        if (expensive.price === "$$$$" || expensive.price === "$$$$$") {
            expensiveTrails += expensive.trailName + `\n    `
        }
    }

    return expensiveTrails
}

// Get the details of all trails

const trailDescription = (trailDesc) => {
    
    //1st I created an array to hold all of the Trail Descriptions
    const descriptions = [];
    
    //2nd I created a variable for each part of the description to be logged
    let name = "";
    let start = "";
    let length = "";
    let highlight = "";

    //3rd I created a for loop to iterate the variables above, applying them to a string of text, then pushing that string to the array
    for (var i=0; i < trailDesc.length; i++) {
        name = trailDesc[i].trailName;
        start = `[${trailDesc[i].latitude}, ${trailDesc[i].longitude}]`;
        length = trailDesc[i].length;
        highlight = trailDesc[i].plantHighlight;

        let description = `${name} Route starts at ${start} and is ${length} kilometers long.\nThe highlighted plant for the trip is ${highlight}.\n`;
    
        descriptions.push(description);
    }

    //Lastly, I created another for loop to console.log each element of the array
    for (let i = 0; i < descriptions.length; i++) {
        console.log(descriptions[i])
    }

}

// Get the details of all rivers

const riverDescription = (riverDesc) => {
    
    //1st I created an array to hold all of the River Descriptions
    const descriptions = [];
    
    //2nd I created a variable for each part of the description to be logged
    let name = "";
    let start = "";
    let length = "";
    let highlight = "";

    //3rd I created a for loop to iterate the variables above, applying them to a string of text, then pushing that string to the array
    for (var i=0; i < riverDesc.length; i++) {
        name = riverDesc[i].river;
        start = `[${riverDesc[i].latitude}, ${riverDesc[i].longitude}]`;
        length = riverDesc[i].length;
        highlight = riverDesc[i].uniqueFish;

        let description = `${name} starts at ${start} and is ${length} kilometers long.\nThe unique fish for the trip is ${highlight}.\n`;
    
        descriptions.push(description);
    }

    //Lastly, I created another for loop to console.log each element of the array
    for (let i = 0; i < descriptions.length; i++) {
        console.log(descriptions[i])
    }

}

module.exports = {
    totalTrailMiles, shortestTrail, longestTrail, 
    totalRiverLength, shortestRiver, longestRiver,
    cheapestTrails, expensiveTrails, trailDescription,
    riverDescription, 
}