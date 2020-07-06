// File Created on 07/02/2020 by Troy Stein
//Creates reference to display
//let display = document.getElementsByName('display');
//How hierarchy works is it reads in each action individually
// Testing is consistent with Kevin's set up of expressions
/*
 There will be a temporary array which will hold numbers in the expression an array of strings
 i.e. 5 + 67 * 78 is ["5", "+","67","*","78"]
 */
//Backspace function
//arr:  The temporary array expression
//ind: last index of array
function backspace(arr){
   var temp = arr[arr.length-1]
    if(typeof temp === 'string')
    {
        if(temp.length > 1){
            arr[arr.length-1] = temp.substr(0,temp.length-1);
        }
        else{
            arr[arr.length-1] = "0";
        }
    }
    else{
        arr[0] = "0"
    }

}
// Clears the immediate number that was punched in by user
// arr: The expression array
function clearExpression(arr){
    var temp = arr[arr.length-1];
    if(typeof temp ==='string') {
        arr[arr.length-1] = "0";
    }
    else {
        arr[0] = ['0'];
    }
}
// Clears everything that was punched
// arr: The expression array
function clear(arr){
    var temp = arr[arr.length-1];
    if(typeof temp ==='string') {
        arr.splice(0,arr.length);
    }
    arr[0] = ['0'];
}
/*//clear test cases
//Test 1
arr = [];
clear(arr);
console.log('Expected: 0 , Actual: '+arr);
//Test 2
arr = ["0"];
clear(arr);
console.log('Expected: 0 , Actual: '+arr);
//Test 3
arr = ["1"];
clear(arr);
console.log('Expected: 0 , Actual: '+arr);
//Test 4
arr = ["12","+","23"];
clear(arr);
console.log('Expected: 0 , Actual: '+arr);
//Test 5
arr = ["3.1415926"];
clear(arr);
console.log('Expected: 0 , Actual: '+arr);
//Test 6
arr = ["3.1415926","+","4."];
clear(arr);
console.log('Expected: 0 , Actual: '+arr);
//Test 7
arr = ["3.1415926","+","4.","/","0"];
clear(arr);
console.log('Expected: 0 , Actual: '+arr);*/
/*//clearExpression tests
// Test 1
arr = [];
index = 0;
clearExpression(arr, index);
console.log('Expected: 0, Actual: '+arr);
//Test 2
arr = ["0"];
index = 0;
clearExpression(arr, index);
console.log('Expected: 0, Actual: '+arr);
// Test 3
arr = ["1"];
index = 0;
clearExpression(arr, index);
console.log('Expected: 0, Actual: '+arr);
// Test 4
arr = ["45"];
index = 0;
clearExpression(arr, index);
console.log('Expected: 0, Actual: '+arr);
// Test 5
arr = ["1","+","56"];
index = 2;
clearExpression(arr, index);
console.log('Expected: 1,+,0, Actual: '+arr);
// Test 6
arr = ["34.123765","+","76.99999","*","34.56789652"];
index = 4;
clearExpression(arr, index);
console.log('Expected: 34.123765,+,76.99999,*,0, Actual: '+arr);*/
/*//backspace test cases
//Test 1
arr = [];
backspace(arr);
console.log('Expected: 0 Actual: '+arr );
//Test 2
arr = [];
backspace(arr);
console.log('Expected: 0 Actual: '+arr );
//Test 3
arr = ["1"];
backspace(arr);
console.log('Expected: 0 Actual: '+arr );
//Test 4
arr = ["13"];
backspace(arr);
console.log('Expected: 1 Actual: '+arr );
//Test 5
arr = ["135"];
index = 0;
backspace(arr);
console.log('Expected: 13 Actual: '+arr );
//Test 6
arr = ["135","+","45"];
backspace(arr);
console.log('Expected: 135,+,4 Actual: '+arr );
//Test 7
arr = ["3.14"];
backspace(arr);
console.log('Expected: 3.1 Actual: '+arr );
//Test 8
arr = ["42."];
backspace(arr);
console.log('Expected: 42 Actual: '+arr );
//Test 9
arr = ["42.1"];
backspace(arr);
console.log('Expected: 42. Actual: '+arr );
//Test 10
arr = ["42.1","+","3.14159","*","20","/","67.1356008796"];
backspace(arr);
console.log('Expected: 42.1,+,3.14159,*,20,/,67.135600879 Actual: '+arr );
//Test 11
arr = ["42.1","+","3.14159","*","20","/","67.1356008796","-","5"];
backspace(arr);
console.log('Expected: 42.1,+,3.14159,*,20,/,67.135600879,-,0 Actual: '+arr );*/