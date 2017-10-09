// 1) Use a switch statement to inform us if some number n is prime.
var primeNum = 'n';

switch(primeNum) {
  case '1':
    console.log('1 is actually not prime!');
    break;
  case '2':
    console.log('2 is the smallest prime!');
    break;
  case '3':
    console.log('n is prime!');
    break;
  default:
    console.log('idk what that is');
}


// 2) change the second name in `names` to Mary
var names = ['Larry', 'Barry', 'Harry', 'Parry'];
names.splice(1,0,'Mary');
console.log(names.join());

// 3) change the rating of the movie to 8.5
//  a) print out a statement about the movie USING THE OBJECT
var movie = {
    title: 'Back to the Future',
    rating: 9.5,
    director: 'Robert Zemeckis'
  };

movie.rating = 8.5;
console.log(`The ${movie.title}'s raithing is ${movie.rating} and it is director is ${movie.director}`);

// 4) Loop over the people and log out everyone's name
let name =['Stacey', 'Macey', 'Lacey', 'Tracey'];
for (let i=0; i<=name.length; i++){
    console.log(name[i]);
}
////////////////////////////////////////////////////
var people = [
    {
      name: 'Stacey',
      age: 12,
      hobbies: ['Knitting', 'Reading', 'Laughing', 'Playing']
    },
    {
      name: 'Macey',
      age: 105,
      hobbies: ['Swimming', 'Kite flying', 'Running']
    },
    {
      name: 'Lacey',
      age: 32,
      hobbies: ['Puppies', 'Yoga']
    },
    {
      name: 'Tracey',
      age: 3,
      hobbies: []
    }
  ];
  
  for (let i= 0; i< people.length; i++){
      console.log(people[i].name)
  }
  ////////////////
// 5) loop over the people and print out the hobbies of each person

for (let i= 0; i< people.length; i++){
    console.log(people[i].hobbies)
}
for (let i= 0; i< people.length; i++){
    console.log(`This ${people[i].name} and they have ${people[i].hobbies}`)
}
//////////////
// a) loop over the people and print out the name, age and number of hobbies of each person

for (let i =0; i< people.length; i++){
    console.log(people[i].name +" is "+people[i].age+ " years old and "+" has "+ people[i].hobbies.length+ " hobbies")

}
///////////////////////////////////////////////////////////////
// 6) loop over each person and print out a note about their age.
//    if they are under 10 log a message about the person being young
//    if they are over 100 log a message about the person being old
//    otherwise, log any other message about the person's age

for (let i=0; i< people.length; i++){
    if(people[i].age < 10){
      console.log('This person is young')
    }else if(people[i].age > 100){
      console.log('This person is old')
      }else{
        console.log('cool');
      }
   }
   ////////////////////////////////////////////////////////////
 //7)  loop over each person until we find someone who is exactly 32 years old
// if they are not 32, log a message saying this is not who we are looking for
// if they are 32, log a message saying we found them and then look no further! (do not go into another iteration)

for (let i=0; i< people.length; i++){
    if(people[i].age === 32){
        console.log('We found them!!!!');
    }else
    console.log('Not who are we looking for')
}
///////////////////////////////////////////////////////////////
// 8) loop through the array to find the largest element
let arr = [55, 2, 4, 1, 77, 32, 13];
newArr=arr.sort();
last = newArr.slice(-1)[0] ;
console.log(last);
/////////////////////////////////////////////////