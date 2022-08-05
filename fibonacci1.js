/*

Things That Make Me Go Hmmm

I'm taking a javascript course online and we had to solve a Fibonacci challenge. In the Fibonacci sequence, each number is the sum of the two preceding ones. 

// Design a function which returns a Fibonacci sequence

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on

So what makes me go Hmmm is: Why are there so many ways to solve this? Which one is the most elegant?

Here are some examples

function fibonacciGenerator (n) {

    var fibonacci =[];
    var n1 = 0;
    var n2= 1;
    var n3 = n1+n2;
   if ( n === 1){
      fibonacci.push(n1);
   }else if (n === 2) {
     fibonacci.push(n1, n2);
   }else{
     fibonacci.push(n1, n2);
   }
  for (var i =2; i<n ; i++) {
    n3= n1+n2 ; 
   fibonacci.push(n3);
   n1 = n2
   n2 = n3
 
  }
  
   return fibonacci 

}

/////______Another solution:
//Fibonacci Code using FOR LOOP



function fibonacciGenerator(n){

     var fibonacci = [];

     if (n == 1){

         fibonacci.push(0);

         return fibonacci;

     } else if (n == 2){

        fibonacci.push(0,1);

        return fibonacci;

     } else {

       fibonacci.push(0,1);

       for(var i = 0; i < n; i++){

          var num = fibonacci[i] + fibonacci[i+1];

          fibonacci.push(num);

          if (n == fibonacci.length){

            return fibonacci;

          }

      }

   }

}



var output = fibonacciGenerator(9);

console.log(output);

+++++++++++++++And another:++++++++++++++

var fibonacci = [0];
    if (n > 1) {
        fibonacci.push(1)
        if (n > 2) {
        var currentNumber = 1;
        
    for(var i = 0; i < (n-2); i ++) {
      fibonacci.push(currentNumber);
      currentNumber = currentNumber + fibonacci[fibonacci.length - 2];
    }
    
    }
    } 
    return fibonacci;
    
*/