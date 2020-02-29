function getCount(str) {
  let vowelsCount = 0;
  const vowelList = 'aeiouAEIOU';
  for (i = 0; i < str.length; i++) {
    if (vowelList.indexOf(str[i]) !== -1){
      vowelsCount +=1;
    }
  }
  return vowelsCount;
}
