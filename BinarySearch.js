var binarySearch = function(list, num) {
  var low = 0, high = list.length - 1, mid = Math.floor((high + low) / 2);

  console.log("List size: " + list.length)
  console.log("Max iterations possible: " + Math.log2(list.length))

  while(list[mid] != num && low <= high) {
    if(num > list[mid]) {
      console.log("too high!")
      low = mid + 1;
      mid = Math.floor((high + low) / 2);
    } else {
      console.log("too low!")
      high = mid - 1;
      mid = Math.floor((high + low) / 2);
    }
  }
  return low <= mid ? list[mid] : -1
}

var arr = [1, 3, 4, 5, 8, 10, 11, 14, 15, 20, 23, 25, 27, 35, 36, 37, 40, 43, 55, 58, 59, 61, 63, 64, 65, 66, 67, 69, 70, 73, 74, 134]
binarySearch(arr, 134);
