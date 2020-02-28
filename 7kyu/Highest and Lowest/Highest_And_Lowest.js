function highAndLow(numbers){
let numArr = numbers.split(' ').map(Number);
console.log(numArr);
}

highAndLow("1 2 3 4 5 -1 -2 -3 -4 -5");

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

highAndLow("1 2 3 4 5 -1 -2 -3 -4 -5");
