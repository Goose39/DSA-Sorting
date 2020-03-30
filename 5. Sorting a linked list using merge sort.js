// Incomplete

let linkedList = require('./LinkedList');

mSort = (list, length) => {
  if (array.length <= 1) {
    return array;
}

const middle = Math.floor(array.length / 2);
let left = array.slice(0, middle);
let right = array.slice(middle, array.length);

left = mSort(left);
right = mSort(right);
return merge(left, right, array);
}

merge = (left, right, array) => {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          array[outputIndex++] = left[leftIndex++];
      }
      else {
          array[outputIndex++] = right[rightIndex++];
      }
  }

  for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
  }
  return array;
};

mSort(linkedList);