// const {trails, rivers} = require("./data.js")

const {database} = require("./database.js")

const {
    totalTrailMiles, shortestTrail, longestTrail, 
    totalRiverLength, shortestRiver, longestRiver,
    cheapestTrails, expensiveTrails, trailDescription,
    riverDescription, 
} = require("./functions.js")

const {trailInfo} = require("./trails.js")

const {riverInfo} = require("./rivers.js")

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')

const trail = trailInfo(database.trails)

console.log(`***************************************************`)
console.log(`*****              R I V E R S                *****`)
console.log(`***************************************************`)

const river = riverInfo(database.rivers)