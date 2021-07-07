// Code your solution in this file!

const returnFirstTwoDrivers = function(driverArray){
  return driverArray.slice(0,2);
}

const returnLastTwoDrivers = function(driverArr){
    return driverArr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
        return    num * fare
    }
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)
}