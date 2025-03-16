const palindromes = function (inputString) {
    // Convert inputString to lowercase
    let lowerCaseInput = inputString.toLowerCase();
    
    // Remove all non-alphanumeric characters (like punctuation and spaces)
    let cleanedStr = lowerCaseInput.replace(/[^a-z0-9]/g, '');
    
    // Convert it to array and reverse it
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    // Compare reversed string to the original cleaned string
    return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
