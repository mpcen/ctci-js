// Number Swapper: Write a function to swap a number in place (that is, without temporary vari-ables).


/*
    n = 1 6 4 9 
          i     
            j
    
    a = 123
    b = 456

    a = 9
    b = 4

    a = a+b = 9+4 = 13
    b = a-b = 13-4 = 9
    a = a-b = 13-9 = 4

*/

function numberSwapper(a, b) {
    console.log('got - a:', a, ' b:', b);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log('reversed to - a:', a, ' b:', b);
}

numberSwapper(94, 105);