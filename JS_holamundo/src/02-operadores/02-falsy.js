/* 
the operator || returns the first truthy value or the last falsy value
while the operator && returns the first falsy value or the last truthy value
Examples:
console.log(false || 0 || "" || null || "Hello" || 42);
the falsy values are:
false, 0, "", null, undefined, NaN
So the output will be "Hello" because it's the first truthy value
*/