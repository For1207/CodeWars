function highAndLow(numbers){
	let numArr = [];
	let numArr1 = numbers.match(/[0-9]/g);
	for (i=0; i<numArr1.length; i++) {
	numArr1 = parseInt(numArr1, 10);
	console.log(numArr1);
}
	let noSpacesArr = [];
	// numArr = numbers.split("");
	// for (i=0; i<numArr.length; i++) {
	// 	if (numArr[i] != " ") {
	// 		noSpacesArr.push(numArr[i]);
	// 		// console.log(noSpacesArr);
	//
	// 	}
	//
	// }
}

highAndLow("1 2 3 4 5 -1 -2 -3 -4 -5");

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
