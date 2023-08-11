const {
    totalTrailMiles, shortestTrail, longestTrail, 
    totalRiverLength, shortestRiver, longestRiver,
    cheapestTrails, expensiveTrails, trailDescription,
    riverDescription, 
} = require("./functions.js")

const trailInfo = (info) => {
    //need to fix this because I changed the number earlier to have a total of all the lengths
    const trailTotal = totalTrailMiles(info)
    console.log(`\nWe service ${trailTotal} kilometers of wilderness trails across the US`)

    const shortTrail = shortestTrail(info)
    console.log(`The shortest trail is ${shortTrail} kilometers`)

    const longTrail = longestTrail(info)
    console.log(`The longest trail is ${longTrail} kilometers\n`)

    const cheapTrail = cheapestTrails(info)
    console.log(`The least expensive trails are \n    ${cheapTrail}`)

    const expensiveTrail = expensiveTrails(info)
    console.log(`The most expensive trails are \n    ${expensiveTrail}`)

    console.log(`TRAIL DETAILS:`)
    console.log(`---------------------------------\n`)

    const trailDetails = trailDescription(info)
}

module.exports = {trailInfo}