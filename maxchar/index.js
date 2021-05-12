// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {}
    for (let char of str){
        if(!chars[char]){
            chars[char] = 1
        }
        else{
            chars[char]++
        }
    }
    let maxKey = '';
    let maxValue = 0
    for (const key in chars){
        
        if(maxValue < chars[key]){
            maxValue = chars[key]
            maxKey = key
        }
    }
    return maxKey
}

module.exports = maxChar;