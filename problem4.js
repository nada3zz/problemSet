/* Problem 4:
Write a function in Node.js that takes an array of strings and returns the longest common prefix.

-Test the function
   const strings = ["flower", "flow", "flight"];
   console.log(longestCommonPrefix(strings)); // Output: "fl"
*/

function longestCommonPrefix(strings) {
  let result = "";

  if (strings.length === 0 || strings[0] === "") {
    return result;
  }

  const sortedList = strings.sort();
  const firstStr = sortedList[0];
  const lastStr = sortedList[sortedList.length - 1];

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      result += firstStr[i];
    } else {
      break;
    }
  }

  return result;
}

const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings));
