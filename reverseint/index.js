// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInteger(input){
    const reverseToString = input.toString().split("").reverse().join("") 
    const convertToInteger = parseInt(reverseToString)
    return convertToInteger
}

function reverseInt(n) {
    
    const reverseIntegerResult = reverseInteger(Math.abs(n))
    let integerWithSign
    if(Math.sign(n)>=0) {
        integerWithSign = reverseIntegerResult
        return integerWithSign
    }
    else{
        integerWithSign = -(reverseIntegerResult)
        return integerWithSign
    }
    
}

module.exports = reverseInt;
