const {
    totalTrailMiles, shortestTrail, longestTrail, 
    totalRiverLength, shortestRiver, longestRiver,
    cheapestTrails, expensiveTrails, trailDescription,
    riverDescription, 
} = require("./functions.js")

const riverInfo = (info) => {
    const riverTotal = totalRiverLength(info)
    console.log(`\nWe offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

    const shortRiver = shortestRiver(info)
    console.log(`The shortest river tour is ${shortRiver} kilometers`)

    const longRiver = longestRiver(info)
    console.log(`The longest river tour is ${longRiver} kilometers`)

    console.log(`\nRIVER DETAILS:`)
    console.log(`---------------------------------\n`)

    const riverDetails = riverDescription(info)
}

module.exports = {riverInfo}