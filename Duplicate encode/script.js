duplicateEncode = function (word) {
  word = word.toLowerCase();
  const stringArray = [];
  let outputString = "";
  //1) Parse the string

  for (let i = 0; i < word.length; i++) {
    stringArray.push(word[i]);
  }
  // console.log(stringArray);
  //2) Create a object which contains how many times is number present in word string
  const counts = stringArray.reduce(
    (stringArray, value) => ({
      ...stringArray,
      [value]: (stringArray[value] || 0) + 1,
    }),
    {}
  );
  //console.log(counts);
  //3) Loop thru the the array useing STRINGARRAY to identify letter and COUNTS to select proper symol for it - create the output string

  for (let i = 0; i < stringArray.length; i++) {
    if (counts[stringArray[i]] === 1) {
      outputString += "(";
    } else if (counts[stringArray[i]] > 1) {
      outputString += ")";
    }
  }
  return outputString;
};

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
