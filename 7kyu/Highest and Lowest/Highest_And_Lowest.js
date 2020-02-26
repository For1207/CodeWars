function highAndLow(numbers){
	let numArr = [];
	let noSpacesArr = [];
	numArr = numbers.split("");
	for (i=0; i<numArr.length; i++) {
		if (numArr[i] != " ") {
			noSpacesArr.push(numArr[i]);
			console.log(noSpacesArr);
		}

	}
}

highAndLow("1 2 3 4 5 -1 -2 -3 -4 -5");
