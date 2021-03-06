// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/
const log = function(param){
  console.log(param);
}

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, log);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}
last(items, log)

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(2,7,log);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(5,5,log);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  for(let i = 0; i<list.length; i++){
    if(list[i] == item){
      return cb(true);
    } else{
      return cb(false);
    }
  }
  // Pass true to the callback if it is, otherwise pass false.
}
contains("Matt", ["Matt", "Nick", "Andrew"], log);

/* STRETCH PROBLEM */

// Need to work through this more, was researching online and found this function, need to understand it deeper.
// function removeDuplicates(arr){
//   let unique_array = arr.filter(function(elem, index, self) {
//       return index == self.indexOf(elem);
//   });
//   return unique_array
// }

// console.log(removeDuplicates(["Matt", "tevin", "pat", "Matt"]));

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

