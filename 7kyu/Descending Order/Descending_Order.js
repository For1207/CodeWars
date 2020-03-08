function descendingOrder(n){
  let array = Array.from(n.toString()).map(Number);
  let sorted = array.sort(function(a, b){return b-a});
  let sortedNumber=0;
  for (i=0; i<sorted.length; i++) {
    sortedNumber=sortedNumber + sorted[i]*Math.pow(10,(sorted.length - i))/10;
  }
  return sortedNumber;
}

// better solution:
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

// or
function descendingOrder(n){
  return +String(n).split('').sort((a, b) => b - a).join('')
}
