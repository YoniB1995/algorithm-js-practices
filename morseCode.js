// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"

function(morseCode){
  return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => MORSE_CODE[code] || ' ')
    .join('');
}


// function(morseCode){
//   function decodeMorseLetter(letter) {
//     return MORSE_CODE[letter];
//   }
//   function decodeMorseWord(word) {
//     return word.split(' ').map(decodeMorseLetter).join('');
//   }
//   return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
// }
