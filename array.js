// push adds the elements specified and it also changes the array given
var array =["fear","women",23];
console.log(array.push("karibu","niende")); 
console.log(array);

// remove the first element and the last
console.log(array.shift());

//  remove the last element
console.log(array.pop());

// deleted the element of the specified index
delete array [2];
console.log(array);

// concat adding array to another or even more
let arraq =[130,45,288,23,56,88,45,34,1];
let arri=[12,34]
let arr4 = array.concat(arraq,arri);
console.log(arr4);

// //  arra2.sort(function(b,a){return a-b});
// // console.log(arra2);
// // console.log(arra2.reverse());
let quel=[23,45,12,89];
let we=quel.sort((a,b)=>a-b);
console.log(we.map(function (element)
{ return element*2}));
console.log(we);

// // arr3 = [3,4556,357,62,2,4];
// // arr3.sort(function(){return 0.5 - Math.random() });
// // console.log(arr3);


// // maxof something   dont understand the 2
 arr5= [2,45,65,1,89,765];
// console.log( Math.max(...arr5, arr5[2]));
console.log(Math.min(...arr5));

// // splice,reverse and slice method
// // splice inserts at the specified place and the specified elements to remove
 let arra2 =[130,23,45,288,23,56,88,23,45,34,1];    
// arra2.splice(2,2, "Mary","did")
// console.log("splice",arra2);
arra2.splice(3,1,"kiki")
console.log(arra2);
// // you slice by giving the starting and ending index
// let ar2 =arra2.slice(2,5)
// console.log("r2",ar2);
// // u reverse from the end
// arra2.reverse()
// console.log(arra2);
console.log(arra2.slice(2,4));

// // is array check if somethin is an array 
// console.log(Array.isArray(ar2));

// // indexof checks the presence of an element and you specify 
// where the search is starting from if it aint there then -1
// console.log(arra2.indexOf(56,1));

// // lastindexof shows the last index of the specified element 
// console.log(arra2.lastIndexOf(23,0));

// // find() and findindex() that written the same one finds index other brings
// //  the element and they return the first element that satisfied the function 
// let fu = arra2.find((element)=>element>10)
// console.log("find",fu);
// let found = arra2.findIndex((element) => element<20)
// console.log("k",found);
let k =(arra2.find((ele)=>ele<100));
console.log(k);

// // includes  you can also specify the index you want the search to start from
// animalarr = ["cat","fish","cow","bird","lion","rat","insect"];
// console.log(animalarr.includes("cow",1));

// // entries()
// const ar1= animalarr.entries();
// for (let i of animalarr) {
//     console.log(i +"\n");
// }

// // every() checks whether whats being passed is true for all the elements
// let istrue = (currentval) => currentval <500;
// console.log(arra2.every(istrue));

// // some() checks if alteast one meets the requirement   it isnt bringing anything back
// let age =[ 1,7,4,90,23,54,18];
// age.some(old);
// function old(age){
//     return age>60
// }

// // fill()  fill or put an element in the whole array or specify where it starts and ends

// console.log( animalarr.fill("mouse", 2,5));
// console.log(animalarr);

// // copywithin()

// console.log( animalarr.copyWithin(2,1));

// // valueOf() this is a way to copy an array into another one
// // fruits.valueOf()

// // foreach()
// allOfthem = [4,6,9,1,3]
// allOfthem.forEach(myfunction);

// function myfunction(element, index, arr) {
//   arr[index] = element*10 
// }
// console.log("wor",allOfthem);

// // filter   find some that meet a certain criteria given to them 
// function big(allOfthem){
//     return allOfthem >5
// }
// const newA= allOfthem.filter(big);
// console.log(newA);

// // reduce   dont understand how it works reduceRight  *****

// function thisone(total, num) {
//     return total - num
// }

// console.log( allOfthem.reduceRight(thisone))

// // from it creates a  new array from what`s given 
// console.log( Array.from("iterable"));














