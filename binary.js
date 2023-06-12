let tobesorted= [32,12,45,67,89];

function tobemerge(tobesorted) {
  
  if (tobesorted.length<=1) {
      return tobesorted
  }
  
  const middle = Math.floor(tobesorted.length/2);
  console.log(middle);
  let left = tobesorted.slice (0,middle);
  let right = tobesorted.slice (middle);
  left= tobemerge(left)
  right= tobemerge(right)
   console.log({left});
   console.log({right});
   
   return mergi(tobemerge(left),tobemerge(right))
  }


function mergi(left,right) {
  let empty= []  
  let leftindex= 0;
  let rightindex=0;
  while (leftindex<left.length && rightindex<right.length ) {
    if (left[leftindex]<right[rightindex]) {
        empty.push(left[leftindex])
        leftindex++;
    } else {
        empty.push(right[rightindex])
        rightindex++;
    }
  }     

return empty.concat(left.slice(left[leftindex])).concat(right.slice(right[rightindex]))


console.log(tobemerge(tobesorted));

}
 


     
        
     


