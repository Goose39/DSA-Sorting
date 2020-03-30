let qSort = require('./3. Implementing quicksort');

const data = [
  89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50,
  13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 
  27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 
  67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 
  6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 
  69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 
  49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
]

bSort = (arr, min, max) => {
  console.log("arr.length: ",arr.length)

  if (arr.length <= 1) {
    return arr;
  }

  let bucketsArr = [];
  let numberOfBuckets = arr.length/3;
  console.log("num buckets", numberOfBuckets)

  for (let i = 0; i < numberOfBuckets; i++) {
    bucketsArr.push([]);
  }

  let bucketRange = (max + 1) / numberOfBuckets;
  console.log(bucketRange)

  for (let i = 0; i < arr.length; i++) {
    let bucketIndex = Math.floor(arr[i] / bucketRange);
    console.log(bucketIndex, bucketsArr[bucketIndex])
    bucketsArr[bucketIndex].push(arr[i]);
  }

  let finalResult = []

  console.log("BucketArr: ", bucketsArr)

  for (let i = 0; i < bucketsArr.length -1; i++) {
    finalResult.push(qSort(bucketsArr[i]));
  }
  
  return finalResult.flat();

}

console.log("return value: ",bSort(data, 1, 100));