 //1) FizzBuzz
//"Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”
 
function FizzBuzz (num) {
    if (num % 3 === 0 && num % 5 === 0){
        console.log('FizzBuzz')
    }else if(num % 5 ===0 ){
        console.log('buzz')
    }else if (num % 3 === 0){
        console.log('Fizz')
    }
}
FizzBuzz(15);

