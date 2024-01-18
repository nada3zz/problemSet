/* Problem 3:
Write a function in Node.js that takes a set of non-negative integers and a target sum and returns true if there exists a subset with the given sum, and false otherwise.

-Test the function
  const set = [3, 34, 4, 12, 5, 2];
  const sum = 9;
  console.log(isSubsetSum(set, sum)); // Output: true 
*/


function isSubsetSum(set, sum) {
    const seen = {};
  
    for (let i = 0; i < set.length; i++) {
      const diff = sum - set[i];
  
      if (diff in seen) {
        return true; 
      } else {
        seen[set[i]] = true;
      }
    }
  
    return false; 
  }
  

  const set = [3, 34, 4, 12, 5, 2];
  const sum = 9;
  console.log(isSubsetSum(set, sum)); 
  