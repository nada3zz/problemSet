/* Problem 2:
Write a function in Node.js that takes a sorted array of integers and modifies it in-place to remove duplicates, returning the modified array.

-Test the function
  const arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5] 
*/


function removeDuplicates (sortedArr) {
    if(!sortedArr || sortedArr.length == 1) return sortedArr;

    let currPtr = 0;
    for (let i= 0; i < sortedArr.length; i++) {
        if (sortedArr[i] != sortedArr[currPtr]) {
            currPtr++;
            sortedArr[currPtr] = sortedArr[i];
        }
    };
    
    sortedArr.length = currPtr + 1;
    
    return sortedArr;

}

const arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); 