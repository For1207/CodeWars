function accum(s) {
	let splitedS = s.toLowerCase(s.split(""));
  let newArr = [];
  for (i=0; i<splitedS.length; i++) {
    newArr[i] = splitedS[i].toUpperCase(splitedS[i]) + splitedS[i].repeat(i)  + '-';
  }
  newArr = newArr.join("");
  newArr = newArr.slice(0, newArr.length - 1);
  console.log(newArr);
}

accum("RqaEzty");
