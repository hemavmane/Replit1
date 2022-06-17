// print area of rectangle
function rectangle_area(length,breadth){
    // write your code here
  
   let area = length*breadth;
    return area;
    
    // return your answer
  }
  console.log(rectangle_area(10,2))


//  print Quotient & Reminder
  function quo_rem(a,b){
    // Write your code here
    if (a!==0 && b!==0){
      let z = a%b;
    let y = Math.floor (a/b);
  return (y+","+z);
    }else{
      return (-1+","+-1);
    }
  
    //make sure you return the output string
  
  }
  
  console.log( quo_rem(10,2));
  
  print
 
  