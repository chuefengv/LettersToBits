function wordToBits(letter) {
  let bits = [0, 0, 0, 0, 0, 0, 0, 0];
  let counter = 0;

  let asciiVal = letter.charCodeAt(0);

  for (let i = bits.length; i >= 0; i--) {
    if (asciiVal - Math.pow(2, i - 1) >= 0) {
      asciiVal = asciiVal - Math.pow(2, i - 1);
      bits[counter] = 1;
    }
    counter++;
  }
  return bits;
}

function encode(word) {
  let counter = 0;
  let encodedArray = [];
  for (let i = 3; i >= 0; i--) {
    if (word.length < i) {
      let letterArray = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    letterArray = wordToBits(word.charAt(i));
    for (let j = 0; j < 8; j++) {
      encodedArray[j * 4 + counter] = letterArray[j];
    }
    counter++;
  }
  return bitToDeci(encodedArray);
}

function bitToDeci(array) {
  let sum = 0;
  let placeholder = 31;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1) {
      sum += Math.pow(2, placeholder);
    }
    placeholder--;
  }
  return sum;
}

let word = "a@b.";
console.log(encode(word));
