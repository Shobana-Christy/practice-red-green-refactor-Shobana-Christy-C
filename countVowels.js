let vowels = ["a", "e", "i", "o", "u"];

// function countVowels(str) {
//     let strAsArray = str.split("");
//     let counter = 0;
//     for (letter of strAsArray) {
//         if (vowels.includes(letter)) {
//             counter++;
//         }
//     }
//     return counter;
// }
function countVowels(str) {
    if(typeof str == "undefined") return undefined;
    if(typeof str == "number" ) return 0;
    if(typeof str == "boolean") return 0;
    let strAsArray = str.toLowerCase().split("");
    let count = 0;
    strAsArray.forEach(alp => {
        // console.log(alp);
        if (vowels.includes(alp))
            count++;
    });
    return count;
}


//  console.log(countVowels(190));
console.log(countVowels("Elephant"));
// console.log(countVowels(""));
// console.log(countVowels("The sky is the limit"));
// console.log(countVowels(true));
// console.log(countVowels(false));
// console.log(countVowels());

module.exports = {
    countVowels
};