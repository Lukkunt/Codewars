"use strict";

function presses(phrase) {
  let sum;
  //1)Convert the input string to lower case
  phrase = phrase.toLowerCase();
  //2)Convert the input lower case string to array of charracters
  const arrPhrase = phrase.split("");
  console.log(arrPhrase[1]);
  //3)Create a object where every letter has a number of presses on mobile keyboard
  const keyboard = {
    1: [1, "a", "d", "g", "j", "m", "p", "t", "w", "*", " ", "#"],
    2: ["b", "e", "h", "k", "n", "q", "u", "x", 0],
    3: ["c", "f", "i", "l", "o", "r", "v", "y"],
    4: [2, 3, 4, 5, 6, "s", 8, "z"],
    5: [7, 9],
  };
  //4)Look for the character in keyboard object and add the number to sum
  for (let i = 1; i <= arrPhrase.length; i++) {
    //Character is in this key
    if (keyboard[i].includes(arrPhrase[i - 1])) {
      console.log("yes");
    }
    //Character is not in this key
    else console.log("no");
  }
}

presses("abc");

/////////////////////////////////

/* function getKeyByValue(object, value) {
    
  return Object.keys(object).find((key) => object[key] === value);
}

const map = { first: [4,9,7], second: [4, 2] };
console.log(getKeyByValue(map, 2)); */
