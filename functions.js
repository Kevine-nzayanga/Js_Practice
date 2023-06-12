// Write a function in JavaScript that takes a number as input and 
// returns true if the number is even and false if it is odd.
function check(num) {
    if (num%2==0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
check(8)

// Write a function in JavaScript that takes an array of numbers as input 
// and returns the sum of all the numbers in the array.
function takein(arrays) {
    let counts=0
    
    for (let index = 0; index < arrays.length; index++) {
        const element = arrays[index];
        counts+=element
    }
   return(counts);
    
}
console.log( takein([2,4,1,6,5,7]));

// Write a function in JavaScript that takes an array of strings as input and 
// returns the longest string in the array.
function long(ArrayofStr) {
     var sum=[]
    for (let i = 0; i < ArrayofStr.length; i++) {
        const e = ArrayofStr[i].length;
        sum.push(e)
        sum.sort((a,b)=> a-b)
        if (ArrayofStr[i].length==6) {
            console.log(ArrayofStr[i]);
        }
    }
}
long(["kiski","do","you","love","messee"])

// Write a function in JavaScript that takes a string as input and returns the same string in reverse order.
function reverse(title) {
   return  title.split("").reverse().join("")
}
// let title= "Mary"
console.log( reverse("mary"));

// Write a function in JavaScript that takes two numbers as input and returns the smaller of the two numbers.
function small(one,two) {
  let arr= [one,two]
    arr.sort()
    return arr[0]
}
console.log(small(7,3));

// Write a function in JavaScript that takes an array of numbers as input and returns a new array 
// containing only the even numbers from the original array.
function even(numArr) {
    emptyarr=[]
    for (let e = 0; e < numArr.length; e++) {
        const n = numArr[e];
        if (n%2==0) {
            emptyarr.push(n)
        }
        
    }
    return emptyarr
}
console.log(even([23,22,12,45,66,88,769]));

// Write a function in JavaScript that takes a string as input and returns true if the string
//  is a palindrome (reads the same forwards and backwards) and false otherwise.
function reads(backwards) {
var pali= backwards.split("").reverse().join("")
if (backwards===pali) {
       return true
} else {
    return false
}

}
console.log(reads("ey"));

// Write a function in JavaScript that takes an array of strings as input and returns a new array with 
// all the strings in uppercase letters.
 function upper(wordArr) {
     var em= []
  for (let q = 0; q < wordArr.length; q++) {
    const w = wordArr[q].toUpperCase();
    em.push(w)
  }
  return em
  
 }
 console.log(upper(["were","tree","qwere"]));

//  Write a function in JavaScript that takes a number as input and returns true if it is a prime number
//  and false otherwise.
function prime(pnum) {
    if (pnum%2!=0) {
        return true
    }
    else{
        return false
    }

}
console.log(prime(4));

// Write a function in JavaScript that takes an array of numbers as input and returns a new array with the
//  numbers sorted in ascending order.
function sorting(tobesort) {
    tobesort.sort((a,b)=>a-b)
   return tobesort
}
console.log(sorting([12,2,4,78,99]));

// Write a function that takes two parameters, a string and a character, and returns the number of times 
// the character appears in the string.

function times(word, character) {
    let time=0
    for (let d = 0; d < word.length; d++) {
        const ment = word[d];
        if (character==ment) {
            time++
        }
        
    }
   
    return time
    
}
console.log(times("fever",'e'));

// 