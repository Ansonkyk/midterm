// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(num1,num2){
    let s=Math.min(num1,num2);
    let b=Math.max(num1,num2);
    let i=s;
    let res=0;
    while (i<=b){
        if (i%2==1){
            res+=i;
        }

        i+=1;
    }
    return res;

}

/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sumOfOdds(3,7));
console.log(sumOfOdds(7,2));
console.log(sumOfOdds(7,7));

console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(arr1,arr2){
    
    arr3=[]
    for (var i = 0; i < arr1.length; i++) {
        
            arr3.push(Math.abs(arr1[i]-arr2[i]));

        
           
        }
        
        


    
    return arr3;


}

/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(arraySubtract([7,9],[2,6]));
console.log(arraySubtract([2,6],[7,9]));
console.log(arraySubtract([0,1],[0,1]));
console.log(arraySubtract([0,2],[0,1]));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(Arr,S1,S2){
    Arr=Arr.concat(S2);
    Arr=[S1].concat(Arr);
    return Arr;

}

/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(surroundArray(['test1','test2'],'test0','test3'))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(as){
    if (as.length==0){return '';}
    else{
    
    let maxL=0;
    let maxS=as[0]


    for (const x of as) { 
        if (x.length>=maxL){
            maxL=x.length;
            maxS=x;

        }; 

    }
    return maxS;
    }
}

/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(longestString(['test','testing','testinggggggggg']));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(str){
    let search = ['S','s'];
    let replaceWith = ['R','r'];
    for (var i = 0; i < search.length; i++) {
        str = str.split(search[i]).join(replaceWith[i]);
    }
    return str

}

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sToR('SSSSSSSSSSsssssss'))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
    if (num%4==0 && num%7==0){
        return true;

    }else{return false;}

}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(divisibleBy4And7(28))
console.log(divisibleBy4And7(4))
console.log(divisibleBy4And7(7))
console.log(divisibleBy4And7(1))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(s){
    return (s.includes('?') && s.includes('!')) ? true: false;
    
    
}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(exclamationAndQuestion('?!'))
console.log(exclamationAndQuestion('!'))
console.log(exclamationAndQuestion('?'))
console.log(exclamationAndQuestion('Hello'))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(string){
string1=string.toLowerCase();
string2=string.toLowerCase();
return [string1.split('a').length-1,string2.split('b').length-1]
}

/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(countAB('AAABBaabb'))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(arr,s){
    for (var i = 0; i < arr.length; i++) {
    if(arr[i].slice(-1).toLowerCase()==='s'){
        arr[i]=arr[i]+s;
    }

}
return arr;
}

/* console.logs to test */
console.log("addStringIfLastS");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(addStringIfLastS(['ans','anson','Hello','Kings'],'kong'))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(arr){
if (arr.length<=1){return 'underduned';}else{
    smallest=Math.min(...arr);
    for( var i = 0; i < arr.length; i++){ 
    
        if ( arr[i] === smallest) { 
    
            arr.splice(i, 1); 
        }
    
    }
    return [smallest,Math.min(...arr)];
}
}

/* console.logs to test */
console.log("twoSmallest");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(twoSmallest([1,3,6,3,7,3,7,-1,-4]))
console.log("\n////////////////////////////////////////////////////////////////////////////\n");

