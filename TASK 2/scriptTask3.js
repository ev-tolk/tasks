function getUniqueElement(array){
    return Array.from(new Set(array));
}

console.log(getUniqueElement([1,1,2,3,3,5,6,7,8,8]));
console.log(getUniqueElement(['a','a','b','v','c','r','c','r','d','s','d']));