// Question 1
// Create an array of image sources. Use image1.png, image2.png, and image3.png as the array values.
1) const image = ['image1.png', 'image3.png', 'imahge3.png'];

// Question 2
// Using the array from Question 1, store the first element of the array in variable q2.
2) q2 = 'image1.png';

// Question 3
// Get the length of the first array (number of elements in the array) and store it in variable q3
3) q3 = image.length;

// Question 4
// Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
4) const q4 = imakge.pop();

// Question 1
// Create an array of numbers using 1,2,3, and 4 as values. Use forEach to increase each value by 1 and store the value back in the array.
// The end result should be an array of numbers with values 2,3,4,5


const numbers = [1,2,3,4];
let newArray;
numbers.forEach(function(number) {
    newArray = number+1
   console.log(newArray);
});

// Question 2
// Using the array from Question 1, find the average of the numbers in the array (average=sum of all numbers/number of numbers). Store the average in q2.

//////////////////////////////
Array.prototype.sum = function() {
    return this.reduce(function(a,b){return a+b;});
};
var arr = [1,2,3,4,5]
console.log(arr.sum() / arr.length)
////////////////////////////
let numbers= [1,2,3,4,5];
let total = 0;
numbers.forEach(function(number){
  total += number;
});
avg = total/numbers.length
  console.log(avg);

  