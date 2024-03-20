// values and variables 
// var $myName="jananihari"
// console.log($myName); 

// //rules first character can be in a letter, underscore,dollar symbol($)..we shouldnt use any numerical characters
// //the rest of the variable can be any letter ,number,underscore in the rest of variable name...but we shouldnt use any space...
// //variable names are case sensitive.
// //no limit to length of the variable name
// //we cant use javascript reserved keyword as a variable name.
// var my_2Name="jananihari"
// console.log(my_2Name);
// var myNameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee="jananihari"
// console.log(myNameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee);

// //var 7_myName="jananihari"
// //console.log(7_myName); //(we cant do in this manner we will get error.)

// var $my2_Name="hi"
// console.log($my2_Name); 

//var var="jananihari"()
//console.log(var); //we cant use javascript reserved keyword as a variable name.

// var _23myName="jananihari"
// console.log(_23myName);

// //Data types in java script

// //Undefined
// var a;
// console.log(a);
// //diff between null and undefined**************************

// //null
// var a=null;
// console.log(a);

// //boolean
// var hi=true;
// console.log(hi);

// //number
// var a=100;
// console.log(a);

// //string
// var hello="brocoli soup"
// console.log(hello);

// //Bigint
// var a=12134657679876453246870967n;
// console.log(a);

// //NaN --> not a number (when the ans is not predictable)eg:chennai/90,ram/30
// console.log("banglore"/50);
// console.log(600/2);

// // isNaN --> it checks whether the result is NaN or not..if it is NaN it gives op as true or if it is number or anyother it gives op as false.
// console.log(isNaN("banglore"/50));
// console.log(isNaN(500/2));

// //expression is nothing but a combination of operators and operands.eg:(5+20)5 & 20 are operators and + is a operands
// //Assignment operator--->'='
// var a=30;
// console.log(a);
// //Arithmetic operator--->(+,-,*,%,/,++,--)
// var a=50;
// var b=25;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(b%a);

// //increment operator ++--> increase the value by one unit
// var a=55;
// //pre increment
// console.log(++a);//increment then operation
// //post increment
// console.log(a++);//first operation then increments
// console.log(a);
// //decrement operator--->decreases the value by one unit
// var a=2;
// console.log(--a);//pre decrement //decrement then operation
// console.log(a--);//post decrement //operates then decrement
// console.log(a);
// //comparison operator---> <,>,<=,>=!=,==,===
// var a=93;
// var b=100;
// console.log(a>b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>=b);
// //== and ===
// //==--> checks for only values
// var a=1;
// var b=true;
// console.log(a==b);
// //=== --->checks for values along with data types
// var a=false;
// var b=5;
// console.log(a===b);
// //logical operator--->and&&,or||,not!
// //and-->multiplication
// //AND&&
// var a=10;
// var b=35;
// var c=22;
// console.log(a<b)&&(a<c);
// console.log(b<a)&&(b<c);
// console.log(c<b)&&(c<a);
// //OR ||
// var a=52;
// var b=26;
// var c=42;
// console.log(a>b)||(a>c);
// console.log(b<c)||(b<a);
// console.log(c<a)||(c<b);
// //NOT operator!
// //var a=9;
// //var b=3;
// //var c=3;
// //console.log(a!=b);
// //console.log(b!=c);
// //control statements
// //if 
// //if else
// //if else if
// //switch case

// //if 
// //syntax
// //initialisation
// //if(condition){
//     //printing stmt
// //}
// var a=120;
// var b=40;
// if(a>b){
//     console.log("a is greater");
// }
// //if else
// //syntax
// //initialisation;
// //if(condition{
//     //print stmt;
//     //
// //}
// //else{
//     //p stmt;
// //}
// var a=20;
// var b=22;
// if(a<b){
//     console.log("a is less");

// }
// else{
//     console.log("b is less")
// }
// //conditional or ternary operator--->three operands
// //syntax,initialisation,(condition)?stmt1:stmt2
// var a=99;
// var b=92;
// (a<b)?console.log("a is less"):console.log("b is less");

// //if else if or nested if
// //syntax
// var a=20;
// var b=60;
// var c=40;
// if(a<b && a<c){
//     console.log("a is less");

// }
// else if(b<a && b<c){
//     console.log("b is less");

// }
// else{
//     console.log("c is less");
// }
// //to fing whether given person is eligible to vote or not
// var age=18;
// if(age>=18){
//     console.log("he is eligible to vote");
// }
//     else{
//         console.log("not eligible");
    
// }
// //switch case
// //syntax:
// //mon 7.00
// //tue 8.00
// //wed 7.30
// //thu 9.00
// //fri 7.30
// //sat 6.30
// //sun 10.00
// var day="thursday"
// switch(day)
// {
//     case "monday":
//         console.log("7.00");
//         break;

//     case "tuesday":
//         console.log("8.00");
//         break;

//     case "wednesday":
//         console.log("7.30");
//         break;
//     case "thursday":
//         console.log("9.00");
//         break;
//     case "friday":
//             console.log("7.30");
//             break;
//     case "saturday":
//                 console.log("6.30");
//                 break;
//     case "sunday":
//                     console.log("10.00");
//                     break;


// }

// var day="monday"
// switch(day)
// {
//     case "monday":
//         console.log("7.00");
//         break;

//     case "tuesday":
//         console.log("8.00");
//         break;

//     case "wednesday":
//         console.log("7.30");
//         break;
//     case "thursday":
//         console.log("9.00");
//         break;
//     case "friday":
//             console.log("7.30");
//             break;
//     case "saturday":
//                 console.log("6.30");
//                 break;
//     case "sunday":
//                     console.log("10.00");
//                     break;
//                     default:
//                         console.log("invalid data");


// }
// //for loop,while,do while
// //syntax
// //for(initialization;condition;inc/dec){
// //task
// // }
// //var a=10;
// for(var a=1;a<=5;a++){
//     console.log("HI!YOU LOOK GREAT");
// }
// //FOR a=1 1<=5 1-->2
// //a=2 2<=5 -->3
// //a=5 5<=5 -->6
// //a=6 6<=5 -->7(it terminates)
// //while loop
// //syntax:(initializaton;condition;){
//     //Task;
//     //ic,dec
// //}
// // var a=1;
// // while(a<=5)
// // {
// //     console.log("hi handsome!!");
// //     a++;
// // }
// // //do while loop
// // //syntax(initialization;)
// // //do{
// //     //task;
// //     //inc/dec;
// //     //}while (condition)n
// // //}
// // var c=1;
// // do{
// //     console.log("im a gentle women");
// //     c++;


// //while(c<=6);
// //function--> it is a block of code which performs a speific task
// function hai(){
//     console.log("hai!im fine");

// }
// hai();
// hai();
// hai();
// //function expression (var ,constant,let)
// var add=function(num1,num2){
// return (num1+num2);
// }
// var res=add(7,8);
// console.log(res);

// //arrow function
// var add=(num1,num2)=>{
//     return (num1*num2);
// }
// var res=add(7,8);
// console.log(res);
// //var
// if(true){
//     var a=30;
//     console.log(a);
// }
// //let
// if(true){
//     let a=10;
//     //console.log(a)(we cant add console inside this block it access only outside the block)
// }
// console.log(a);
// //diff btwn let and constant
// //let
// // let a=50;
// // a=70;
// // console.log(a); //redeclaration is not posible but reinitialisation is possible
// // //const
// // const a=50;
// // a=80;
// // console.log(a); //redeclaration and reinitialisation both are not possible
// // //var
//  var a=20;
//  var a=80;
//  console.log(a); // redeclaration and reinitialisation both are possible

//  //Arrays in java script
//  //element 2 4 6 8 1
//  var arr=["hi","janani","hello",true,90];
//  /////////0       1       2       3   4
//  console.log(arr);

//  //length --> helps to find the size of the array
//  var arr=[60,"hi",800,"hello"];
//  console.log(arr.length);

//  //push--> add the elements to the end of the array
//   

//reverse
// var arr=["hello",99,true,"transparent"];
// console.log(arr.reverse);
// //strings
// var str="hi gud noon"
// console.log(str);
// //length
// var str="hi gud noon"
// console.log(str.length);
// //includes
// var str="hi u look godd"
// console.log(str.includes("x"));
// //indexof
// var str="hi im beautiful";
// console.log(str.indexOf("b"));
// //lastindexof
// var str="hi this is pineapple";
// console.log(str.lastIndexOf("p"));
//startswith(if it starts with capital letter then console letter should be in caps only)
//math methods
//pi
// const PI=Math.PI;
// console.log(PI);
// console.log(PI.toFixed(4));
// //round off
// var a=(5.8);
// console.log(Math.round(a));
// //floor
// var b=3.9
// console.log(Math.floor(b));
// //pow
// var p=Math.pow(4,4);
// console.log(p);
// //MIN
// var min=Math.min(34,8,9,66,5,);
// console.log(min);
// //max
// var max=Math.max(99,789,66,44,3,0);
// console.log(max);
// //random
// var random=Math.random()
// console.log(random);
//INHERITANCE
//one class acquiring the properties of another class
//super class:A CLASS FROM WHERE PROPERTIES ARE INHERITED
//sub class:A clss which inherits the propertIes from another class
//extends keyword is used for inheritance
// class Car{
//     setName(name,speed){
//         this.name=name;
//         this.speed=speed;


//     }
//     startEngine(){
//         console.log("engine is started for "+this.name);

//     }
//     stopEngine(){
//         console.log("engine is stopped for"+this.name);

//     }

    
// }
// class Minicooper extends Car{
//     topSpeed(){
//         console.log("top speed for"+this.name+" is "+this.speed);


//     }
// }
// var res=new Minicooper();

// res.setName("NissanMicra",130);
// res.startEngine();
// res.stopEngine();
// res.topSpeed();
// //ENCAPSULATION
// //Date methods
// var date=new Date();
// // //get method() --> we can only get values we cant update anything
//  var date=new Date();
//  var month=date.getMonth();
//  var day=date.getDay();
//  var year=date.getFullYear();
//  console.log(day,month,year);



// // set method--> we can update values ..and we can set the values for our own
// var d=new Date();
// d.setFullYear(1998);
// d.setDate(18);
// d.setMonth(4);
// console.log(d);

// var d=new Date();
// d.setFullYear(2001);
// d.setDate(3);
// d.setMonth(7);
// console.log(d);

var a=10;
let b=50;
function abc(){
    if(true){
        let b=20;
        var a=10;
        console.log("inside block a: "+ a);
    }
    console.log("outside block of a is:" + a);

}
abc();
console.log("after function of a :"+a);

function printPrimeNumbers(start,end){
    for(let i=start;i<=end;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
printPrimeNumbers(1,20)

var a=0
do{
    if(a%2==0){
    console.log(a)
    }
    a++
}
while(a<=20)

let n;
function prime(n){
    for(let number=2;number<=n;number++){
        let count=0;
        for(var i=1;i<=number;i++){
            if(number%i==0){
                count++;
            }
        }
        if(count<=2&&count!=0){
            console.log(number);
        }
    }
}
prime(15);


function isPrime(n){
    if(n<=1){
        return false;
    }
    if(n<=2){
        return true;
    }
    if(n%2===0 || n%3==0){
        return false;

    }
    for(let i=3;i*i<=n;i+=6){
        if(n%i===0 || n%(i+2)===0){
            return false;
        }
    }
    return true;
}
const numberToCheck=13;
if(isPrime(numberToCheck)){
    console.log(numberToCheck+ "is a prime number");
}else{
    console.log(numberToCheck + "is not a prime number");
}

function demo(){
if(""){
    console.log("hi");
}
}

demo();


var arrowFun=(a,b)=>a+b;
var arrowFun2=(a,b)=>{

    var sum=a+b;
    return sum;
}
console.log(arrowFun(10,20));
console.log(arrowFun2(20,70));


function greet(){
    if(10){
        console.log("hi");
    }
}
greet();


var funExpre=function(a){
    console.log(a);
}
funExpre(10);


function add(num1,num2){
    return num1 + num2;

}
function min(num1,num2){
    return num1 - num2;
}
function mul(num1,num2){
    return num1 * num2;
}
var num1=parseFloat("enter the first no:");

var num2=parseFloat("enter the second no:");

var sum=add(num1,num2);
var mul=mul(num1,num2);
var difference=min(num1,num2);


console.log("sum:",add);
console.log("product:",mul);
console.log("difference:",min);

 var sumFunc = (a1,a2)=>{
    return a1+a2;
}
var minFunc = (n1,n2)=>{
    return n1-n2;
}
var  mulFunc=(n1,n2)=>{
    return n1*n2;
}
 
console.log("hi");
 
function calculator(){
    var userInput;
    var n1;
    var n2;
 
    userInput = prompt("Enter the Function: ");
    n1 = parseFloat(prompt("Enter first number:"));
    n2 = parseFloat(prompt("Enter second number:"));
    switch(userInput){
        case 'sum':
            console.log(sumFunc(n1,n2))
            break;
        case "min":
            console.log(minFunc(n1,n2))
            break;
        case "mul":
            console.log(mulFunc(n1,n2))
            break
        default:
            console.log("Enter valid operations")
    }
}
calculator();
 

function sum(a,b){
    console.log(a+b);
}
sum(10,20)


function demoPara(n1,n2=0){
    console.log(n1);
    console.log(n2);

    var sum=n1+n2;
    console.log(sum);
}
 demoPara(10);


//REST OPERATOR

function sum(...numbers)
{
    console.log(numbers);
    var sum=0;
    for(let index=0;index<numbers.length;index++){
        sum+=numbers[index];
    }
    console.log(sum);
}
sum(10,10);
sum(10,20,40);
sum(10,20,30,40);


//SPREAD OPERATOR

function demoSpread(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);


}
var arr=[10,20,30];
demoSpread(...arr);
var arr2=[...arr];
arr[0]=1;
console.log(arr2);













