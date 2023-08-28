//question 4
function outer(length){
    function inner(breadth){
      console.log(length*breadth);
    }
    return inner;
  }
  result=outer(23);
  result=result(30);
  


//question 5
function outer(){
    let counter=0;
    function inner(){
      counter++;
      console.log(counter);
    }
    
    return inner;
  }
  let innercount=outer();
  innercount();
  innercount();
  innercount();
  