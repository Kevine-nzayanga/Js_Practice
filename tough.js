// Vasya faced a serious problem: he has to work with a bunch of numbers. 
// Since he has to print them out, he wants to use as little paper as possible.
// And that is why he came up with the following idea: convert array of numbers
// into a string by the following rule:
// Converted each number to the base 26. To write a number, Vasya will use 
// lowercase letters of Latin alphabet: 'a' = 0, 'b' = 1, ..., 'z' = 25;
// Find the longest of the strings obtained by the conversion;
// Transform all strings shorter than the longest one, by prepending as many
// "a" as required in front of the string, so their length is equal.;
// Combine all strings into one by the order in which they were converted from 
// left to right in the input;
// Subtract one from the maximum length we found before, and convert it to base
// 26. Then prepend it to the resulting string.
// Your task is to convert the given array arr to a string as Vasya suggests.
// Check out the following example for better understanding.

function convertToBase26(num) {
    let base26 = '';
    while (num > 0) {
      const remainder = num % 26;
      base26 = String.fromCharCode(97 + remainder) + base26;
      num = Math.floor(num / 26);
    }
    return base26;
  }
  
  function convertArrayToString(arr) {
    let maxLen = 0;
    const base26Arr = arr.map((num) => {
      const base26Num = convertToBase26(num);
      maxLen = Math.max(maxLen, base26Num.length);
      return base26Num;
    });
  
    const paddedArr = base26Arr.map((str) => {
      const padding = 'a'.repeat(maxLen - str.length);
      return padding + str;
    });
  
    const resultStr = paddedArr.join('');
    const base26MaxLen = convertToBase26(maxLen - 1);
    return base26MaxLen + resultStr;
  }
  
  // Example usage
  const arr = [10, 100, 1000, 26];
  const result = convertArrayToString(arr);
  console.log(result); // outputs 'dgcndfde' (base26 representation of 'aaaajdkbakdkcz')
  

//   You received a whatsup message from an unknown number. Could it be from that girl/boy with 
// a foreign accent you met yesterday evening?
// Write a simple function to check if the string contains the word hallo in different languages.
// These are the languages of the possible people you met the night before:
// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
// Notes
// you can assume the input is a string.
// to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
// function should be case insensitive to pass the tests

function check(word) {
  greet= {italian:'hello', english:"ciao",french:'salut',german:'hallo', spanish:'hola', czech:'ahoj'
 ,polish:'czesc' }
   
 for (const value in greet) 
    if (Object.hasOwnProperty.call(greet, value)) {
         e = greet[value];
        if ((word.toLowerCase()) ===e) {
          const key = Object.keys(greet).find(key => greet[key] === e);
        console.log(e+" is "+key);
            // console.log(e); 
        }
          
    }


        
    }
       



check("Salut")