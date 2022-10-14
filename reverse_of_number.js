function reverseOfNumber(number){
    number= number + '';
    return number.split('').reverse().join('');
}
console.log(reverseOfNumber(147902));