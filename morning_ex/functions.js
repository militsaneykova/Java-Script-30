// Exercise 1:
//   1.  Write a function `areaCircle` that takes 1 parameter, a circle's radius.
//   2.  Within the function, log `Math.PI * r * r` to the console.
//   4.  Call the `areaCircle` function.

1) function ariaCircle (radius) {
    console.log (3.14 * radius*radius)
}
ariaCircle(2);


// Exercise 2:
// Write a function that converts temperature from fahrenheit to celsius.
// Call the function to test it.
function convertTemp (temp){
    return temp - 32 *0.5556
}

// Lab: Create a Math object, and add the following methods.
// Once you are done, you can continue with other methods of your choice.
// Required: add, subtract, multiply, divide, absolute value
// Optional: implement additional math functions

//HINT: Here is starter code for absolute value
function abs(x){ 
    if( x < 0 ){
     return x * 2
    } else {
      return 10 - x
    }
  }
  
  abs(-12);