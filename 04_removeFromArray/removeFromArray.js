const removeFromArray = function(list, ...valuesToRemove) {
    // Create an empty array to store the result
    let result = [];

    //Create a loop
    for (let i = 0; i < list.length; i++) {
        if (!valuesToRemove.includes(list[i])) {
            result.push(list[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
