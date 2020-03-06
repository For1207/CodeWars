function descendingOrder(n){
  let array = Array.from(n.toString()).map(Number);
  let sorted = array.sort(function(a, b){return b-a});
  let sortedInteger= 0;
  // for (i=0; i<sorted.length; i++) {
  //   sortedInteger=sortedInteger + sorted[i]*(sorted.length-i)*10
  // }
  console.log(sortedInteger);
}

descendingOrder(1092837465);
