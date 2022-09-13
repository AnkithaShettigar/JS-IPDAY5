//1.Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

const element2=document.getElementsByTagName("h1")
console.log(element2[1]);
console.log(element2[1].innerText);

function changeText(){
    element2[1].innerText = "MERN stack";
}

// 2.Write code to get 1st H1 element from a webpage using DOM
function changeMore(){
    element2[0].innerText = "able to access the 1st element";

}

//3.Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs>=12){
        session.innerHTML = 'PM';
    }
    else
    {
        session.innerHTML = 'AM';

    }

    if(hrs>12){
        hrs = hrs-12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime,1000);

//4.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function changeMore1(){
    element2[2].innerText = "Welcome to Elevation academy";

}

//5.Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

function HideText(){
    element2[3].style.display="none";
}

//6.Given an array of 0's and 1's find out number of 0's
console.log("number of zero");
let array = [1,0,1,0,1,0,1,0,0];
let count=0;
for(let i of array){
    if(i == 0){
         count=count+1;
    }
}

console.log(count);

console.log("----------------------------------------------------");


//7. Given an array find out total no. of odd and even nos.
console.log("odd and even nos");

let arr = [2,3,4,5,6];
let x=0;
let a=0;
for(let i=0 ; i<arr.length ; i++ ){
    if(arr[i]%2==0){
        x=x+1;
    }
    else{
        a=a+1;
    }
}
console.log(x);
console.log(a);
console.log("-------------------------------------------");

//8.Given a string find out number of vowels 

console.log("number of vowels");

let vowels = ["a","e","i","o","u"];

let strng = "Hello Everyone";

var S=0
for(let s of strng){
    if(vowels.includes(s)){
          S=S+1;
    }
}
console.log(S);
console.log("-------------------------------------------");

//9.Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same
console.log("arrays in both the objects are same");

let obj1 = {
    name:"Sushmitha",
    hobby: ['Singing', 'dancing']
}

let obj2 = {
    name:"Ankitha",
    hobby: ['Singing', 'dancing']
}

function sameArray(a1, a2) {
    let arr1 = a1.hobby;
    let arr2 = a2.hobby;

    if(arr1.length != arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(sameArray(obj1, obj2)); // false
console.log("-------------------------------------------");



