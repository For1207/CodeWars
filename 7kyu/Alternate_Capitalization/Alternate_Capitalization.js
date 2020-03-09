function capitalize(s){
  let arr = ['',''];
  s = s.split('');
  for (i=0; i<s.length; i++) {
    if(i%2===0){
      s[i]=s[i].toUpperCase();
    }
    arr[0] = arr[0] + s[i];

    if(i%2!==0){
      s[i]=s[i].toUpperCase();
    } else {
      s[i]=s[i].toLowerCase();
    }
    arr[1] = arr[1] + s[i];
  }
  return arr;
}

// better solution to anallize:
function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
}
