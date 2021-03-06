// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseSol1(str) {
    // add the chars to the START of empty string
    let reverseString = ''
    for (character of str) {
        reverseString = character + reverseString
    }
    return reverseString
}

function reverseSol2(str) {
    return str.split('').reverse().join('')
}

function reverseSol3(str) {
    // add the chars to the START of empty string using reduce()
    return str.split('').reduce((reverseString, character) => {
        return character + reverseString
    }, '')
}

module.exports = { reverseSol1, reverseSol2, reverseSol3 };
