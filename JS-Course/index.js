// This my first JS Code 
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

// define .length in JS
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


