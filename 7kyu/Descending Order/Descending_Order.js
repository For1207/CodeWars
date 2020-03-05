function descendingOrder(n){
  let array = Array.from(n.toString()).map(Number);
  let sorted = array.sort(function(a, b){return b-a});
  console.log(sorted);
}

descendingOrder(654321);
