// Write a JavaScript program to delete the rollno property from the following object.
//  Also print the object before or after deleting the property
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
console.log(student);
console.log(delete(student.rollno));
console.log(student);

// Create an object in JavaScript,access it's properties,add new properties and delete properties
let nurse={
    name:"Ashley",
    id:2313,
    education:"Degree"
};
console.log(nurse.id);
nurse.hospital="St August";
console.log(nurse.hospital);
console.log(nurse);
delete(nurse.name)
console.log(nurse);

// Write a JavaScript program to get the length of a JavaScript object.
let chef={
restaurant:"Nobu",
college:"BOMAS",
status:1234
}
// length.chef
console.log(Object.values(chef).length);

// Write a JavaScript program to display the reading status
//  (i.e. display book name, author name and reading status) of the following books

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

   console.log(library[0]);

//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes
let Cylinder ={
    height:12.0,
    radius:3.14
}
var volume= Cylinder.height*Cylinder.radius
console.log(volume);


