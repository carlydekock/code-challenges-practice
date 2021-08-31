//56. Merge Intervals
//Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
//Example - Input: intervals = [[1,3],[2,6],[8,10],[15,18]], Output: [[1,6],[8,10],[15,18]]
//Example - Input: intervals = [[1,4],[4,5]], Output: [[1,5]]

function merge(intervals){
  if(intervals.length <= 1){
    return intervals;
  }

  intervals.sort((a,b) => a[0]-b[0]);
  let merged = [];
  let index = 0;
  merged.push(intervals[0]);
  let currentBegin = merged[0][0];
  let currentEnd = merged[0][1];

  for(let i = 1; i < intervals.length; i++){
    let nextBegin = intervals[i][0];
    let nextEnd = intervals[i][1];
    console.log('current', currentBegin, currentEnd);
    console.log('next', nextBegin, nextEnd);
    if(currentEnd >= nextBegin && currentEnd < nextEnd){
      merged[index][1] = nextEnd;
      currentEnd = nextEnd;
      console.log('inside this', merged);
    } else if(currentEnd < nextBegin){
      merged.push(intervals[i]);
      currentBegin = intervals[i][0];
      currentEnd = intervals[i][1];
      index++;
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
