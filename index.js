// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation > 42) {
        return pickUpLocation - 42;
    } else { return 42 - pickUpLocation;
    }
}

function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else {return (destination - start) * 264;
}
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return 0.02 * (distanceTravelledInFeet(start, destination) - 400);
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    }
}