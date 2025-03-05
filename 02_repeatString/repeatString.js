// FUNCTION repeatString(string, num)
//     // Create an empty string to store the result
//     SET result TO ""

//     // If num is less than 0, return "ERROR"
//     IF num < 0 THEN
//         RETURN "ERROR"

//     // Loop from 0 to num (exclusive)
//     FOR i FROM 0 TO num - 1 DO
//         // Append the given string to result
//         result = result + string

//     // Return the final concatenated string
//     RETURN result
// END FUNCTION

const repeatString = function(word, num) {
    let string='';
    if (num < 0) return 'ERROR'
    for (let i=0; i < num; i++) {
        string += word;
    }
    return string;
};


// Do not edit below this line
module.exports = repeatString;
