//bit:1
//byte: 8 bits
//1: 00000001
//2: 00000010
//3: 00000011
let a = 1; //00000001
let b = 2; //00000010

console.log(1|2); //OR: 00000011 = 3
console.log(1&2); //AND: 00000000 = 0
console.log(1^2); //XOR: 00000011 = 3
console.log(~1);  //NOT:  11111110 = -2