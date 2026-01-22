// console.log("hello world");
// var a = 10;
// var str = "likki"
// var bool = true;
// var un;
// var nu = null;


// //relational operators(<,>,<=,>=,==,!=,===,!==)

// var a=10;
// var b=20;
// console.log(a>b);// flase

// console.log(a<b);//true
// console.log(a>=b);// flasse
// console.log(a<=b); //true
// a= 10;
// b="10"
// console.log(a==b); //flase
// console.log(a!=b); //false
// console.log(a===b);//false
// console.log(a!==b);// true


// //logical operators (&,||,!)

// a= true;
// b= false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// var arr = [10,20,30,40]
// console.log (arr);
// console.log(typeof arr);

// var obj ={
//     name: "likki",
//     age: 20
// }
// console.log(obj);
// console.log(typeof obj);

// // looping statement
// // for loop
// //for(initialization;CSSConditionRule;increment/ decrement){
//     //statement
//    //}
// for (let i=0;i<=10;i++){
//     console.log(i);
// } 

// //while loop
// //while(condition){
// //}
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// //DO while loop
// //do{
//     //statement
// //}while(condition);
// i=1;
// do{
//     console.log('do..while');
// }while(i===0);

// // control statements
// //find even number
// for(let i=1;i<=10;i++){
//     if(i%2===0) console.log(i);
// }
// i=9;
// if(i%2===0) console.log("even");
// else console.log("odd");

// //else if
// let mark=70;
// if(mark>90) console.log("o grade");
// else if (mark>=80) console.log("a grade");
// else if (mark>=70) console.log(" b grade");
// else console.log("fail");
 
// mark =30;
// let result = (mark>=90)?"a grade":(mark>=80)?"b grade":(mark>=70)?"b grade":(mark>=60)?"c grade":(mark>=35)?"grade e":"grade f";
// console.log(res);

// function add(a,b){
//     console.log(a+b);
// }
// add(10,20)

//  //arrow function
//  var add = ()=>{
//     console.log(10+20);
//  }
//  add()

//spread arry 
//  var arr1=[10,20,30];
//  var arr2=[...arr1,40,50,60];
//  console.log(arr2);

 //destructuring operators 
//  var [m1,m2,m3,m4,m5]=[12,14,15,26,10]
//  console.log(m1);
//  console.log(m2);
//  console.log(m3);
//  console.log(m4);
//  console.log(m5);


var { name,age,dept,marks}= {
    name:"likki",
    age:20,
    dept:["csd","cse"],
    marks:{
        mern:90,
        java:80,
        c:99
    }
  }
 console.log(name);
 console.log(age);
 console.log(dept);
 console.log(marks);