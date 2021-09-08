//56. Merge Intervals
//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
//Example - Input: intervals = [[1,3],[2,6],[8,10],[15,18]], Output: [[1,6],[8,10],[15,18]]
//Example - Input: intervals = [[1,4],[4,5]], Output: [[1,5]]

function merge(intervals){
  if(intervals.length <= 1){
    return intervals;
  }

  //this is to sort by the first value in each interval, so we know we are starting with the smallest values
  intervals.sort((a,b) => a[0]-b[0]); //not great for runtime - but we need to have this sorted and it doesn't guarantee already sorted
  let merged = [];
  let index = 0; //marker for what index we are evaluating in the merged intervals array
  //push the first interval in, so we have somewhere to start
  merged.push(intervals[0]);
  let currentBegin = merged[0][0]; //current beginning of the interval
  let currentEnd = merged[0][1]; //current ending of the interval

  //starting at the next interval in the array, i = 1
  for(let i = 1; i < intervals.length; i++){
    let nextBegin = intervals[i][0]; //these are the values in the "next" interval, that we are comparing to the current values
    let nextEnd = intervals[i][1];
    if(currentEnd >= nextBegin && currentEnd < nextEnd){
      merged[index][1] = nextEnd; //updating nextEnd since we have an interval that continues farther than before
      currentEnd = nextEnd;
    } else if(currentEnd < nextBegin){ //if there is no overlap, push in the next interval to then be evaluated
      merged.push(intervals[i]);
      currentBegin = intervals[i][0];
      currentEnd = intervals[i][1];
      index++; //increment the index, as we are now evaluating the next index in our merged array
    } else {
      continue;
    }
  }
  return merged;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));
console.log(merge([[1,4],[0,2],[3,5]]));
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10],[9,11],[13,15],[14,19]]));


//Summary: First, we need to sort the values, so that we are working in ascending order of intervals. We need to start with the smallest values, so that we can track whether the next interval has overlap or not. This needs to be a direct comparison of the intervals[i] and intervals at [i+1]. First, we'll add the first interval to our merged array, since we need to start somewhere. We'll use the begin and end values of that as our current values, and then take the next interval as the nextBegin and nextEnd. We're looking for if there is overlap, if our currentEnd >= nextBegin -> there is overlap, and if our currentEnd < nextEnd -> we need to update our ending value, because we now have a longer interval. If there is no overlap, then we'll add the next interval into our merged array, and repeat the process. 
//Pattern: Ensuring the values are sorted, we can iterate through the array, comparing begin/end values of one to the next. This will be nested arrays, so we need to be careful and very explicitly name variables. After sorted, we can iterate through each of the next values to compare to the prior. 