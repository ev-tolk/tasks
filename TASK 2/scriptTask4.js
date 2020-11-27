function isPrimitive (number){
    let isPrimitive = true;
    for (let j = 2; j < number; j++) {
        if (((number % j) == 0)) return false;
        else return isPrimitive;
    } 
}
console.log(isPrimitive(1));
console.log(isPrimitive(8));
console.log(isPrimitive(15));
console.log(isPrimitive(5));
console.log(isPrimitive(3));
console.log(isPrimitive(4));