const sumAll = function(intFirst , intSecond) {
    let result = 0;
    if (!Number.isInteger(intFirst) || !Number.isInteger(intSecond) || intFirst < 0 || intSecond < 0) {
        return "ERROR"; 
    } else if (intFirst < intSecond) {
        for (let i = intFirst; i <= intSecond; i++) {
            result = result + i;
        }
    } else {
        for (let i = intSecond; i <= intFirst; i++) {
            result = result + i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
