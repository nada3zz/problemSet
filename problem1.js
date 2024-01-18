/*Problem 1:
Write a function in Node.js that takes a string containing brackets and returns true if the brackets are closed in the correct order, and false otherwise.

-Test the function
  const str = "{[()]}";
  console.log(isValidBrackets(str)); // Output: true
*/


const isValidBrackets = (str) => {
    const open = '({[';
    const close = ')}]';
    const stack = [];

    if (!str || str.length === 1) return false;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (open.includes(char)) {
            stack.push(char);
        } else if (close.includes(char)) {
            let index = close.indexOf(char);
            if (stack.length > 0 && open[index] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};

const str = "{[()]}";
console.log(isValidBrackets(str));
