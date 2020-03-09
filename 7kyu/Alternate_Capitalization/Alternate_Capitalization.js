function capitalize(s){
  // let arr = [];
  s = s.split('');
  for (i=0; i<s.length; i++) {
    if (i % 2 == 0) {
      s[i] = s[i].toUpperCase();
    }
    s = s.join();
  }
  console.log(s);
}

capitalize('asdfghjk');
