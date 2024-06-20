function parseToRoman(number) {
  const integerToRoman = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  };
  const romanNumber = [];
  const integers = Object.keys(integerToRoman).map(element => parseInt(element, 10)).reverse();
  const roman = Object.values(integerToRoman).reverse();

  integers.forEach((decimal, index) => {
    while (number >= decimal) {
      romanNumber.push(roman[index]);
      number -= decimal;
    }
  });
  console.log(romanNumber.join(""));
}
parseToRoman(42);

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const rotAlphabet = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

function toRot13(stringToTransform) {
  const arrayOfRot = [];
  stringToTransform
  .split('')
  .forEach((char) => {
    const findChar = (element) => element == char;
    const charAlphabetIndex = Math.abs(alphabet.findIndex(findChar));
      if (char != ' ') {
       arrayOfRot.push(rotAlphabet[charAlphabetIndex])
      } else {
        arrayOfRot.push(' ');
      }
  })
  console.log(arrayOfRot.join(''));
}

toRot13('URYYB JBEYQ'); // HELLO WORLD
toRot13('BCRAPYNFFEBBZF'); // OPENCLASSROOMS
toRot13('PRPV RFG ZBA PBQR FRPERG'); // CECI EST MON CODE SECRET
