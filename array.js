var arr=[1,2,3,"alice",{a:10,b:30}];
console.log(arr[3]);
console.log(arr.length);


for(let index=0;index<arr.length;index++){
    const element=arr[index];
    console.log(element);
}


//FOR OF
console.log("for of");
for(let element of arr){
    console.log(element);
}

//FOR IN

console.log("for in");
for(let index of arr){
    console.log(index);
    console.log(arr[index]);
}


//ARRAY METHODS

//toString()
var array=[8,5,3,4];
console.log(array);
console.log(array.toString());

//ADD OR REMOVE ELEMENTS FROM ARRAY

push() --> //add elemnt at the end //pop()-->remove element at end
unshift()-->//add element at first // shift()--> add element at last

//add ele at end

array.push(90);
console.log(array);

array.shift();
console.log(array);

array.pop(5);
console.log(array);

array.unshift(9);
console.log(array);

//adding element at the particular index

var array=[7,"hari",90,{a:90,b:89}];
array[4]=10
console.log(array);

//splice

array.splice(2,1,90);
console.log(array);

var arr=[1,2,3,4];
arr.splice(2,3,10);
console.log(arr);

var index=arr.indexOf(3);
console.log(index);

let text="apple,kiwi,grape,orange";
let part=text.slice(7);
console.log(text);

const fruits=["banana","mango","grape","kiwi"];
let fruit=fruits.at(1);
console.log(fruit);


const girls=["jan","sheelz","meena","ani"];
const boys=["hari","ram","sai","nivin"];
const mychildren=girls.concat(boys);
console.log(mychildren);

//merging three arrays 
// array1.concat(array2,array3);

const fru=["banana","apple","kiwi","litchi"];
fru.splice(2,0,'lemon','strawberry');
console.log(fru);//splicing meaning 2 is the place where element need to be added,0 define how many elements should be removed


fru.sort();//sort will give u in ascending order
console.log(fru);

fru.reverse();
console.log(fru);



const months=["jan","feb","mar","apr"];
const sorted=months.toSorted();
console.log(sorted);


const points=[400,9,77,5,10];
points.sort(function(){return 0.5-Math.random()});
console.log(points);//sorting elements in the random order
const score=[88,90,100,50];
score.sort(function(a,b){return a-b});
console.log(score);


function isLeapYear(year){
    return (year%4==0 && year%100!=0) || (year%400===0);
}
console.log(isLeapYear(2022));


//RANDOM NUMBER

const rn=Math.floor(Math.random()*100)+1;
let guess=parseInt(prompt("guess a number between 1 and 100"));
let attempt=1;
while(guess!=rn){
    if(guess<rn){
        alert("no is lower thn guess...try again!!!!!!" );

    }else{
        alert("no is high than guess .....try again!!");

    }
    
    guess=parseInt(prompt("enter a number between 1 and 100"));
    attempt++;


}


