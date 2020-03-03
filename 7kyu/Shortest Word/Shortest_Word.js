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
