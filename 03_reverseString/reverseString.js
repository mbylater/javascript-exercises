// 
const reverseString = function(string) {
    // Create an empty string to store the result
    let reverse = '';
    // Create variable to store string length
    let length = string.length;
    // Loop for from 0 to length (exclusive)
    for (let i = length - 1; i >= 0; i--) {
        // Extract last letter and add it to the empty string
        reverse += string[i];
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
