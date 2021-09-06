//1710. Maximum Units on a Truck
//You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
//numberOfBoxesi is the number of boxes of type i.
//numberOfUnitsPerBoxi is the number of units in each box of the type i.
//You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
//Return the maximum total number of units that can be put on the truck.
//Ex- Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4, Output: 8
//You can take all the boxes of the first and second types, and one box of the third type. The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

//Sort box types based on units
//Want to take the boxes with the most units first, all the way down in number of units per box until we fill the truck

function maximumUnits(boxTypes, truckSize){
  //sort based on greatest to least number of units per box
  boxTypes.sort((a,b) => {
    return b[1] - a[1];
  });
  
  let boxes = 0;
  let total = 0;

  for(let i = 0; i < boxTypes.length; i++){
    let numBoxes = boxTypes[i][0];
    let unitsPerBox = boxTypes[i][1];
    let space = 0;
    // console.log(numBoxes, unitsPerBox, space);

    if(boxes + numBoxes > truckSize){
      space = truckSize - boxes;
      boxes += space;
      total += (space * unitsPerBox);
      // console.log('this is boxes and total', boxes, total);
    } else {
      boxes += numBoxes;
      total += (numBoxes * unitsPerBox);
      // console.log('boxes inside else', boxes, total);
    }
  }
  return total;
}

console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));
