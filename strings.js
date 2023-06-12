// charAt uses index to find the location of a string
let words= "    Missing you sucks     ."
console.log(words.charAt([3]));

// charCodeAt()   dont understand
console.log(words.charCodeAt([5]));

// concat 
let sent = "find me in the valley"
let neww= sent.concat(""+words)
// console.log(neww.concat(words+sent));

// endsWith returns if does end with or not
console.log(words.endsWith('.'));

// includes() put the word as a parameter and check if its there
console.log(words.includes('mine'));

// indexOf() first occurence of the element and lastIndexOf() last index of the occurence of the element
console.log(sent.lastIndexOf('n'));

// length  how long the string is
console.log(words.length);

// mathc()  we can use // then global g and gi for case insensitive
console.log(words.match(/uck/gi));

// repeat() repeats the let the number of times specified
console.log(words.repeat(3));

// replace() u start with tobe replaced and what to be replaced with 
console.log(words.replace("you", "us"));

// search() searches the specified thing in thw string
console.log(words.search('uck'));

// slice() specified places are sliced
console.log(words.slice(1,3));

// split() into different parts
console.log(words.split(""));

// startsWith()
console.log(words.startsWith('a'));

// subsc it is like split but also includes the element at index 3
console.log(words.substr(1,3));

// substring() if the first index is biggee then it will swap them which is the diff with splice
console.log(words.substring(3,1));

// tostring stays same
console.log(words.toString());

// touppercase lowercase and to locales
console.log(words.toLowerCase());

// trim it removes the whitespaces  not working for me
console.log(words.trimEnd());

// valueof()
console.log(words.valueOf());
