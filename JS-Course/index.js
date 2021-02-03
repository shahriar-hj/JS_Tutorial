// This my first JS Code 
// based on a tutorial from freecodecamp
console.log('Hello World');
let name = 'Shahriar';
console.log(name);
let firstName = 'Shahriar';
let LastName = 'mamady';
const interestRate =  0.3;
console.log(interestRate)

let person={
    esm: 'Shahriar',
    famil:'Abbasi',
    age: 28
}

person.esm = 'Nader'

console.log(person.esm)

let selectedColors = ['red', 'blue'];
selectedColors[2]='green';
selectedColors[3]=34;
console.log(selectedColors);

function great() {
    console.log('hello world');
}

great();


function goodmorning(name) {
    console.log('Good Morning '+name);
    
}

goodmorning('Shahriar');
goodmorning('Mammad');


// calculate a value
function square(number) {
    return number * number
}
console.log(square(4));

// combine Strings
let ourStr = "I come first . ";
ourStr += "I come Second . ";
console.log(ourStr);

// use method .length in JS
let Myname = "James";
let namelength = Myname.length;
let Happyname = "My name is " + Myname + " the happiest Man in the world. ";
console.log(Happyname);
console.log(namelength);

// use function in madlips
function wordBanks(myNoun, myAdjective, myVerb, myAdverb) {
    let result = "";
    result += "The " + myAdjective+ " " + myNoun+ " " + myVerb + " at the Store " + myAdverb;
    return result;   
}
console.log(wordBanks("dog", "funny", "play", "fastly"));
console.log(wordBanks("gandalf", "crazy", "dance", "quickly"));

// nested array
let ourArray = [["the universe", 32, 45], ["Hello Donyaie ugly", 87, "happy new year"]];
console.log(ourArray);

// USe Push() and  pop() method to add data to our array pop() to 
// delet the last data shift() first data element remove
let myArray = [[32, 445, 87], [33, 765, 267], [34, 123, 231]];
myArray.push([35, 546, 24]);
console.log(myArray);
let removelast = myArray.pop();
console.log(removelast);
let removefirst = myArray.shift();
console.log(removefirst);





