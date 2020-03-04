function findShort(s){
  let splittedString = s.split(" ");
  let shortestWord = splittedString[0].length;
  for (i=0; i<splittedString.length; i++) {
    if (splittedString[i].length < shortestWord) {
      shortestWord = splittedString[i].length;
    }
  }
  return shortestWord;
}

// better code

// function findShort(s){
//   return Math.min.apply(null, s.split(' ').map(w => w.length));
// }
