// Given an array of objects, each object representing a person with a name 
// and age property, write a function that returns a new array containing the names
//  of all people who are 18 years old or older.

const details=[
    {names:"jean", age:23},
    {names:"Willy", age:27},
    {names:"Mark", age: 12}
]

function giveme(details) {
    let adult=[]
    details.forEach(detail => {
        if (detail.age >18) {
            adult.push(detail.age)
        }
    });
    console.log(adult);
}
giveme(details)

// Write a function that takes an array of objects, where each object represents 
// a product with a name, price, and category property. The function should return 
// an object that groups the products by their categories, with the category names 
// as keys and the arrays of products as values.
let products= [
{names:"Soap", price:100, category:"washing"},
{names:"Oil", price:500, category:"Cooking"},
{names:"Omo", price:20, category:"washing"},
{names:"Salt", price:15, category:"Cooking"},
]
function groupProductsByCategory(products) {
    const groupedProducts = {};
  
    for (const product of products) {
      const category = product.category;
      if (groupedProducts[category]) {
        groupedProducts[category].push(product);
      } else {
        groupedProducts[category] = [product];
      }
    }
  
    return groupedProducts;
  }
  
  console.log(groupProductsByCategory(products));