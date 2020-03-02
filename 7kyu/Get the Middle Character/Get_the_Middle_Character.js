function getMiddle(s){
  let result = 0;
  if ((s.length % 2) == 0 ) {
    result = s.charAt((s.length / 2) -1) + s.charAt(s.length / 2);
  } else {
    result = s.charAt(Math.floor(s.length/2));
  }
  return result;
}
