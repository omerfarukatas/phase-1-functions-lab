function distanceFromHqInBlocks(pickupLocation){
    if (pickupLocation >= 42){
        return pickupLocation - 42;
    } else {
        return 42 - pickupLocation;
    }
}

// console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(pickupLocation){
    return 264 * distanceFromHqInBlocks(pickupLocation)
}

// console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
  }

// console.log(distanceTravelledInFeet(34, 38))

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0;
    } else if ( 400 < distanceTravelledInFeet(start, destination), distanceTravelledInFeet(start, destination) < 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if ( 2000 < distanceTravelledInFeet(start, destination), distanceTravelledInFeet(start, destination) < 2500){
        return 25
    } else if ( 2500 < distanceTravelledInFeet(start, destination)){
        return `cannot travel that far`
    }
}

console.log(calculatesFarePrice(34, 32));