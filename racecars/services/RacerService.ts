import { Racer } from "../src/racer";

function findRacersWithEmptyFuel(racer:Racer[]) {
    return racer.filter(racer => racer.isFuelEmpty());
}
function test(racer:Racer[]) {
    let result = []
   for (let car of racer) {
    if(car.isFuelEmpty()) {
        result.push(car)
    }
   } 
   return result
}

function findAverageSpeed(racer:Racer[]) {
   let result = 0
   if (racer.length === 0)
   return 0
   for (let car of racer) {
    result += car.speed
   }
   return result / racer.length

}

function getFasterRacer(racerA:Racer, racerB:Racer):any {
if (racerA.speed > racerB.speed) {
    return racerA
}
else if (racerA.speed < racerB.speed) {
    return racerB
}
else{
    return null
}
}