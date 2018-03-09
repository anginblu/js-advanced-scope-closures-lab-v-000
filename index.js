function produceDrivingRange(DrivingRange){
  return function(startRange, endRange){
    let start = parseInt(startRange);
    let end = parseInt(endRange);
    let distance = end - start;
    let difference = DrivingRange - distance;
    if (difference > 0) {return `within range by ${difference}`}
    else {return `${Math.abs(difference)} blocks out of range`}
  }
}

function produceTipCalculator(percentage){
  return function(bill){
    return bill * percentage
  }
}
