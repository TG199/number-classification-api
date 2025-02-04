const checkPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2){
    if (num % i === 0) return false;
  }
  return true;
 
}

const checkArmstrong = (num) => {
    let sum = 0, temp = num, n = num.toString().length;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** n;
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

const checkPerfect = (num) => {
    if (num <= 0) return false;
    let sum = 0;
    for (let i = 1; i < num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}
const oddEven = (num) => (num % 2 === 0)

const digitSum = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
module.exports = {
    checkPrime,
    checkArmstrong,
    checkPerfect,
    oddEven,
    digitSum
}