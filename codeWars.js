function accum(s) {
	let splitedS = s.toLowerCase(s.split(""));
  let newArr = [];
  for (i=0; i<splitedS.length; i++) {
    newArr[i] = splitedS[i].toUpperCase(splitedS[i]) + splitedS[i].repeat(i)  + '-';

    newArr.push(newArr[i]);

  }
  console.log(newArr);
}

accum("RqaEzty");
