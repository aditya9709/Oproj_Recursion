// Fibonnaci iteration
const fibs = (number) => {
  let fibArray = [0, 1];

  for (let i = 2; i < number; i++) {
    const fibNumber = fibArray[i - 1] + fibArray[i - 2];
    fibArray.push(fibNumber);
  }

  console.log("Iteration", fibArray);
};

fibs(8);

//Fibonacci Recursion
const fibsRec = (length) => {
  // Cases to exclude
  if (length < 1 || isNaN(length)) return "Invalid entry";

  // Base case
  if (length === 1) return [0];
  if (length === 2) return [0, 1];

  // Recursion
  const fibArray = fibsRec(length - 1);
  const fibNumber = fibArray[length - 2] + fibArray[length - 3];
  return [...fibArray, fibNumber];
};

console.log("Recursion", fibsRec(8));

//Merge Sort Algorithm
const mergeSort = (array) => {
  // Base Case
  if (array.length <= 1) return array;

  // Recursion
  const split = Math.floor(array.length / 2);
  const left = array.slice(0, split);
  const right = array.slice(split);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  // Merge both array parameters
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
};

console.log(
  "Recursion - Merge Sort Algo",
  mergeSort([8, 5, 1, 9, 7, 15, 4, 2, 0])
);
