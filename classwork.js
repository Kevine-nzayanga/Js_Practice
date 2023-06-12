// arraywork


// // Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

// console.log(arr1[arr1.length-1]);

// // Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];
// console.log(myPets.toString());

// // Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
// console.log(arr3.sort());

// // Write a program to remove duplicates from the following array.
// // Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
//   let arrA =[ ...new Set(arr) ]
//   console.log(arrA);       
  
// //  Write a JS script to search for the following word in the array.
// // If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4]; 

// if (arr5.includes("way")) {
//     console.log("way");
    
// } else { console.log("the search word not found");
    
// }

// // Write a JS script to sort the following string
// let word = "sevink"
// function sorting(word) {
//     return word.split('').sort().reverse().join("")
    
// }
// console.log(sorting(word));

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ];
// let one = array[0]
// console.log(one);
// let calcone = one[0]*one[1] 
// console.log(calcone);
// let two = [array[1],array[2]]
// console.log(two);
// let calctwo = two[0]*two[1]
// console.log(calctwo);
// let three = array[array.length-1]
// console.log(three);
// let calcthree = three[0]*three[1]
// console.log(calcthree);

let newArray= [calcone,calctwo,calcthree]
console.log(newArray);

console.log(newArray.sort((a,b) => a-b));


// STRINGS
// Extract the last four characters from the string below;
let baby = "beautiful"
console.log(baby.substr(-4));

// Insert the following string at the fourth index of the below variable:
let find="eat"
const food = "I was feeling hungry today"
let sentenc= food.slice(0,4)+"eat"+food.slice(4)
console.log(sentenc);

// Count how many times the following string appears in the string variable:
let findme= "the"
let findme2="brown"
const story= "The quick brown fox jumps over the lazy dog"
console.log(story.match(/the/gi));
console.log(story.match(/brown/gi));

// Using JavaScript, find the following words from the following strings:
let found1= "now"
const string1 = "We are now going to school";
console.log(string1.match(found1));
let found2="sitting"
const string2 = "The child was sitting on the table before it fell"

// Convert the following strings into the specified format:
let turnUp=  "wonderful"
console.log(turnUp.toUpperCase());
let turnLow= LowerCase= "amazing BEneath"
console.log(turnLow.toLowerCase());

let turnTitle = "A beautiful wedding"
let l= "A beautiful wedding"

turnTitle= turnTitle.split(" ").map(([firstChar, ...rest]) =>firstChar.toUpperCase()+ rest.join("").toLowerCase()).join(" ")
console.log(turnTitle);

l=l.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(l);