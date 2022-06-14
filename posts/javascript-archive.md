---
title: Java Script Archive
description: In This post I am sharing what I know about javascript..
date: June 8, 2020
updatedOn : Jun 14, 2022
coverImage: /images/post/javascript.png
tags: javaScript, Interview
---

# Basic.

###  **__```How java script Work .. !! ..```__**

Now java script run by the java script engine like c++ run by it's compiler and convert c++ code in machine code same way java script engine convert js code into the machine code. In nut shell js engine has to main thing to manage 
                                                   1. call stack
                                                    2. Memory heap
Now call stack is basically a stack that will manage order in function is run. current runnung function will be on top of the stack . let tack example we have function one inside has function  two and in function to has console log inside it, we called function two from function one, so call stack from top to bottom will be console, two,one.

Memory heap is place where js engine store all there variable and function definition.

 Now when we run js in browser , browser is not just js engine it is **java script run time environment** there is clear difference in the  engine and run time environment.

```     
                           Js engine :Memory heap + call stack
                           Js run time environment  : Js engine + Eventloop + Web Api + Callback Queue (Browser itself)
```
Now let's why we need this Web api , event loop and call back queue . purpose of this things are to run async Js code because of this functionality  java script is the __single threaded but non blocking__ Let take example to explain this sentance.
``` java script
console.log(1);
setTimeout(() => {
console.log(2);
} , 2000)
console.log(3);

```

Output will be 1 , 3 , 2 .


Java script engine do not have set time out function so when ever the set time out comes in call stack js engine notify web api and pop out that call.now web API start the timer of the 2 sec and after  2 second web API will look what inside the set time out and put that function into the callback queue. now there is event loop who check every time call stack is empty or not  if call stack is empty then it put one function from call back queue to call stack and so now after call stack empty our function come into call stack and give output  2. that is how Async code run in browser same thing happen with the browser request. 



## 1. ES6 Features : [Article](https://www.tutorialrepublic.com/javascript-tutorial/javascript-es6-features.php#:~:text=ES6%20brought%20significant%20changes%20to,programming%20easier%20and%20more%20fun.)
## 2. Hoisting [video](https://www.youtube.com/watch?v=AplVrrwY1TI)

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

```java script
         1. function expression 
                            
                          var expression = function() {
                                             console.log('Will this work?');
                                        };
                            
          2. function declaration 
                             
                                function hoisted() {
                                      console.log('This function has been hoisted.');
                                  };
                            


this is the order

 var double = 22;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: number

var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: function

```
Bare in mind function declaration is hoisted but function expression will not.

## 3. sync vs Async [video](https://www.youtube.com/watch?v=hGSHfObcVf4)

## 4. promise vs callback [Article](https://itnext.io/javascript-promises-vs-rxjs-observables-de5309583ca2)

## 5. pros ans cons of js
## 6. Block and globle scop
## 7. why use strict

use strict will help developer to write more secure js and it comes with ES5.As you java script is very forgiven language  , but when you use use strict you have to follow some standard practice , other wise it wil give you a error but if you are not using strict mode it will work . Let us take a example .

``` java script
X = "Sagar" ;
console.log(X) ; // Sagar

``` 

But when you are using strict mode this will give you error like X is not defined.

``` java script
'use strict'
X = "Sagar" ;
console.log(X) ; // X is not defined .

``` 
This is the one example there is many things that you can not do if you using strict mode . like
1. can not delete variable , function or argument.
2. defining property more than 1
3. can not duplicate parameter name 
4. octal int or escape char is not allowed.
5.  with statment is not allowed

## 8. IIFE (immediately invoke function component )
## 9. Coding convention Java script

                               1. Megic number 

 ``` java script
const MEGIC_NUMBER = 2344;
for(int i=0;i<MEGIC_NUMBER ;i++)
{
console.log(i);
}
console.log("Define every number do not write direct number");
```


                               2. Deep nesting

 ``` java script
console.log("Do not do deep nesting use function");
```

                               3. code repetition is not allowed
 ``` java script
console.log("you can use destructing to from ES6");
```
                               4. variable name (camelCase)
 ``` java script
var myUser = "Saar";
function getUser(){
}
```
                               5.make bool variable clear
 ``` java script
var good = true; // not good
var isGood = false;  //use if will good
```

                               6. Write class name in PascleClass 
 ``` java script
class CarTier = {

}
```

                               7. for constant use SNACK_UPPER_CASE
 ``` java script
var PI = 3.14;
```
## 10. Dot vs bracket oprator

There are two ways to access properties on an object.Dot notation is used most frequently. Below we’ll dive into each and discover some of the differences.
``` java script
syntax: objectName.propertyName;
```
__Difference__ : you can use dynamic value in bracket notation  also you can use any string. but in dot notation you can use space and leading number. 

## 11.How import export work in ES6

When you use export default then you do not have to use { } .

Also you can export with name is but you have to use { } and fill with name you want to import.

```java script 
// -------------- function.js------------
export function one(){
console.log("one");
}

exxport function two(){
console.log("two....");
}
// -----------------main.js ------------------

import {one , two} form 'function.js'

//************** export default --------- 

// -------------- navbar.js------------
export default function (){
console.log("one");
}

// -----------------main.js ------------------

import Navbar form 'navbar.js'
```

## 11. Nature of the java script (interpreted Vs compiled )

So let us see what is difference between interpreted  and compiled language. C , C++ , etc are the compiled language and language like HTML is interpreted  . so if you run direct your source code language is interpreted like when you make request via browser server send you html which browser can interpret no need to compile but if we talk about c c++ then you have to compile your source code in some intermediate code you can not direct source code file that is why they are compiled language. 

> I hope now difference is clear.

Now let us decide about java script 

First thing a browser get plan java script when they make request , so from than we can say js is interpreted language but actually browser perform a compilation step to to make some note like what will we done in interpreter step . So browser perform both compilation and interpreter step.

#### 1. Compilation Step
Assign memory to variable which is declare with 'function' and 'var'
Set up the variable in scope

So basically compilation step will make not of what kind of variable we have and where this variable going to use (AKA Scope) , so do not have to waste the time.

#### function Currying

Function currying is a concept that if you want to call function with three arguments , if you curry that function if will take 1st argument and return a function this function will take 1 argument and return a function and this function will take 1 argument and return same answer that your function with 3 argument return so concept is we will not provide every argument together provide as they are needed.  if this not make sense let take example.

```js

// without currying
function details(name , age , hobby)
{
return `Hi, i am ${name}. i am ${age} , and i love to ${hobby}`;
}
var without_c = details('sagar' ,45 ,'read');
// let currying
function details_with_currying(name )
{
return function(age )
                      {
                        return function (hobby)
                                                {
                                             return `Hi, i am ${name}. i am ${age} , and i love to ${hobby}`;
                                                         }
   }
}
var with_c = details_with_currying('sagar')(45)('read');
with_c === without_c ; // true
```
### Array Methods in Java Script 

#### 1. Foreach in Java script

```js
 const num = [1,2,3,4,5];
num.foreach(pluseOne);

function pluseOne(item , index , arr){
item += 10;

}

// OR
 
num.foreach((item) => {item = item+1;});
console.log(num);
```
#### fill on Array

fill will modify array and also return new aray.
```js
var n = Array(5); // [undefined * 5]
n.fill(5) ; // [5,5,5,5,5]
n; // [5,5,5,5,5,]
```

Now make array of 1 to n using fill.
```js
var oneton = function(n) { 
return Array(n).fill(0).map((i,idx)=>idx+1);
}
```

#### 3. filter method on array

It will not modify the our array return new array.
```js
const num = [1,2,3,4,5,6,7,8,9];
const Afterfilter= num.filter(iseven);
function iseven(n) 
{
    return n%2==0;
}
afterfilter //[2,4,6,8]
num // [1,2,3,4,5,6,7,8,9] 
```
In every callback you can pass three args like,
```js
(item , index , arr) => {return true}
```
#### 4. Include method
 
```js
const family = ['rohit' ,'kamlesh','rashi' , 'rom'];

family.includes('rohit'); // true
family.includes('sagar'); // true
```
#### 5. Map function on array

map do not modify given array it modify and return new array

```js
const num = [1,2,3,4];
num.map((i) =>  i = i*i) ; // [1,4,9,16]

```

#### 6.Reduc method
reduc call back take 4 argument accumlator , item , index , arrr.
```js
 const num = [1,2,3,4];
num.reduce((acc , i ) => acc + i , 0);
```
#### 7. Slice method

Do not modify given array create new copy

```js
 const num = [1,2,3,4];
num.slice(2 ,4);  //[3 ,4]
num.slice(-3); // last three
num.slice(1); // 1 to end 
```
#### 8. Sort function
 
it will  modify array
```js
<0 a come first
0 no change 
>0 b come first   in compare function.
```


#### java script object vs javascript Map

- main dofference is you can only set string as key and in map you can use anything as key also you can set object as key also, map has set and get method. 


# Call - Bind - Apply - this

#### 1. what is difference in child node and children in dom 

Childenode will consider white space but .children will only give 
HTML elements as a child. This is the same with __firstchild__  and  __firstchildelement__

...also same for lastchild and last child element.

#### 3.The difference between call / apply / bind

##### JavaScript is a dynamic language, and is flexible enough to let you do things like multiple inheritance. 
That’s when an object or a class can inherit characteristics from more than one parent. This can be done using 
one of these 3 methods: call / apply / bind.

**Call**

1. just use like Name.call()  pass execution context as the first argument and then pass function argument 

Example :
``` java script
let obj = {things: 3};
let addThings = function(a, b, c){
 return this.things + a + b + c;
};

console.log( addThings.call(obj, 1,4,6) ); // 14
```

**Apply**

1. apply same as call but have to pass an arguments as array

Example :
``` java script
let obj = {things: 3};
let addThings = function(a, b, c){
 return this.things + a + b + c;
};

let arr = [1,4,6];
console.log( addThings.apply(obj, arr) ); 
```
**Bind**

1. Bind is something different it returns a copy of the given function with a given execution context.

Example :
``` java script
let obj = {things: 3};
let addThings = function(a, b, c){
 return this.things + a + b + c;
};

let arr = [1,4,6];
console.log( addThings.bind(obj, 1,4,6)() );
OR..........
console.log( addThings.bind(obj)(1,4,6) );
```
#### 4. This keyword in javascript [Article](https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)

Objects are the basic building blocks in JavaScript. There’s one special object available in JavaScript, 
the this object. You can see the value of this at every line of JavaScript execution. The value of this is 
decided based on how the code is being executed.
                                                                                            . . . .
 1. By default, the execution context for an execution is global — which means if a code is being executed as part of a simple function call, then 
     this refers to a global object.

2.  If strict mode is enabled for any function, then the value of this will be marked as undefined as in strict mode. The global object refers to undefined 
      in place of the windows object.

3.  When a function is invoked with the new keyword, then the function is known as a constructor function and returns a new instance. In such cases, 
     the value of this refers to a newly created instance. 

4.  In JavaScript, the property of an object can be a method or a simple value. When an object’s method is invoked, then this refers to the object which 
     contains the method being invoked.  

5.  The bind method returns a new method with this referring to the first argument passed. We’re going to use the above example to explain the bind 
     method.

```` javascript
function Person(fn, ln) {
	this.first_name = fn;
	this.last_name = ln;

	this.displayName = function() {
		console.log(`Name: ${this.first_name} ${this.last_name}`);
	}
}

let person = new Person("John", "Reed");
person.displayName(); // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Prints Name: Paul Adams

let person2Display = person.displayName.bind(person2);  // Creates new function with value of “this” equals to person2 object
person2Display(); // Prints Name: Paul Adams
```

#### some fact about js

1. Js first time developed in 10 days, no planning.

2. First js runtime engin was spider monkey.

3. V8 has 2 compilers, Full-Codegen and Crankshaft. Full-Codegen parses JavaScript directly to machine code, without an intermediary language, allowing it to begin execution sooner. A JIT compiler called Crankshaft produces optimized code for hot methods. This means that in the same V8 program, different levels of optimized code coexist at the same time.


# Java script code snippet to solve

#### 1. Read and write operation , you can assign value to variable without declaring it but it will be created in global scope

```javascript
var p=10;
function sam(){
    var b =30;
    console.log(b);
    c = 500;
}
sam();
console.log(c);  // 500 (it will not give error c created from function sam)
```

#### 2. Hoisting ...

```javs script
function outer(){
    var b =30;
    console.log(b); // 30
    function iner(){
        var c =b;
        console.log(c); // undefined
        var b = 50;
    }
    iner();
}
outer(); 
``` 

#### this

```js
let action  = {
    one : ()=>{alert('hi')},
    two: () => {this.one()}
}

action.one()
action.two()

let action  = {
    one(){alert('hi')},
    two() {this.one()}
}

action.one()
action.two()



```

# Java script is object oriented  language : Object & Prototype

### 🤔  constructor and new keyword. 
you can  create object without constructor let say how can we do it.

```javascript
function createUserObject(name , email , password)
{
var user  = {} ; // line 1 
user.name = name ;
user.email = email;
user.password = password;
return user; // line 2
}
 var sagar = createUserObject('sagar' , 'sam@gmail.com','123456');
```

Above snippet will create user object. so why we need constructor so every time we create this function we have to return line 1 & 2 in every function so java script gave us a feature as constructor so you do not have to write that two line  instead of you will call this function will with *new* keyword this will call java script that you have to add this two line when calling this function. so code will change like,

```javascript
function createUserObject(name , email , password)
{
// var this = {};
this.name = name ;
this.email = email;
this.password = password;
// return this;
}
 var sagar = new createUserObject('sagar' , 'sam@gmail.com','123456');
```

So i hope now we are clear on new keyword it will switch function to the constructor mode and create the this object and assign all property and return that object. __that is why this in constructor function will refer to the created object__ .

you can call regular function with new keyword it will  still work. but if you a constructor function without new keyword that will assign value to this keyword of that function and in above case our function will in global scope so if you call createUserObject function without new keyword then value will assign on global Object  (😬😬 Really !!!) .  and function will not return anything so final result is  when you run it.

```javascript
function createUserObject(name , email , password)
{
this.name = name ;
this.email = email;
this.password = password;
}
 var sagar = createUserObject('sagar' , 'sam@gmail.com','123456'); // no new keyword
console.log(sagar); // undefined
console.log(name); // sagar          :  from global object
```

👉 So it is not good idea to mix up factory function and constructor function.

### 🏋️‍♀️ 4 way to call function in java script:

1. direct define and call in global mode
2. function is property of the object call like obj.foo()
3. call with new keyword
4. with dynamic execution context with call , bind

###  🎊 Prototype 

So thing is that when you are declaring function js engin create 2 object
 1. function object
 2. prototype object 

Here prototype  object will store as property on the function you access it by function.prototype .

So every function object has prototype property when you call any function with new keyword it will return new object and this object has property ____proto____ (Dunder proto)  it because of this prototype property on that function . 

Now where we can use this thing so when you are build a class for something we will define behaviour in the prototype so every object created by that function will share them it will not copy in each object.

```javascript
function child(name , age)
{
this.name = name;
this.age = age;
}
child.prototype.play = function(){
console.log(`${this.name} is playing ....`);
}
var firstchild = new child("sarthak" , 5);
firstchild.play();

```

Now in above example we added play property on the prototype so every child will share it , that will not copy in each object.


### ✔️ Global function Object

This is a function with name Object but in js every function is object so you can call it global object. to see run this code in console.

```javascript
Object;
Object();
```
Now let us talk about where we use Object function so whenever you are creating object with this syntax 
```javascript
var obj = { };
``` 
Above syntax will conver into 
```diff
var obj = new Object();
```
so here {} is just shortcut to create a object js always use this Object function to create object.So when java script engine created this Special Object function they also included some function and property in their prototype after all Object function is a function it has prototype. 

**Now everything make sense when you create a empty object from any of above syntax js create object with Object constructor and it has prototype So even your object is empty you have some default mathods like toStrign() etc. that is come from Object function's prototype because your object's prototype is created by doing new Object() ;(__Wow!!!__  🤓🤓🤓)**

Now let us take example to clear it 

```js
function Employee(){ 
}  // constructor for the employee
var emp = new Employee();  // create object emp

emp.test; 
/*
 try to access property test on the emp object but there is no test property on emp , but java script engine not check only emp object it will check emp after that prototype of the 
Employee function and then check in Object function's prototype because Employee function prototype created from that.there is 3 level  emp => emp.__proto__=>  emp.__proto__.__proto__ (Object.prototype)
*/

Object.prototype.king = function(){
console.log("i am the father of everyone")
}

function sam(){
} 
var p = new sam();
p.king(); // i am the father of everyone
``` 

here king property is creted in Object prototype so every object have access of this method.

For example video 18.
 

### class in js

https://medium.com/javascript-in-plain-english/javascript-classes-an-in-depth-look-part-2-88b666ed3546

https://javascript.info/class


#### common js vs ES6 module

Let me start from the basic if you want to use function of one file fro the other what we use to do in the browser is add the script tag with that function script and that add the other script tag with src of the file where you want to use this function , this method is fine for the browser but when Node js come they find this problem , because node run on server not in the browser , so now we have to find some way to share code from one file to another file and that is when __Common js __ is introduced.

 So according to my understanding common js is just a way to share code between file, where we use syntext like __require(path)__ to import a code from a file and use model.export = {<what to export >} to export from the file. 

Common js solved this problem and it was osm,  but but .. require() was sync function that means if you require 1000 file then code will load all the file and then go to next line of code and this is really really bad for the browser it is not good experience to wait app to load. for user .

So to solve this ES6 come with their own method of doing this called ES6 module  where we use __import__ and __export__ keyword.


# JavaScript Design patterns from web dev 

### Design patterns :
Design patterns are solutions to general problems that software developers faced during software development. we will see some design patterns here.

#### 1. Null Object pattern :

Often you return object of a class and the function which using this object where you have to check that object is not null, every time you have to write this check , to avoid this we can use this pattern. So the solution is if you are returning object USER of the user class , make other class call NULLUSER and set all the default value of user in this class like name will be guest , profile photo url can be some avatar logo, now whenever you return null user return instead of object of the nulluser class So now no need to check every time.

#### 2. Builder pattern :

When you are create object of a class you call a constructor , it has 20+ argument and some of them are optional but you are passing in the function so order matter , so if you do not want to pass a argument you have to pass undefined , to avoid this you can create builder class for that class which has method to set different property independently . in the java script you can pass only required field to function as every other field in different object as extra args and make default value of this object {}. 

#### 3. singleton pattern :

key idea here is that you create a object that will be share between different part of the application , something like global state, it can also create some problem in the testing.
let say you have count that modified by to file so it have to be on global state.

#### 4. Facade Pattern :

This pattern make your code ready to change in the future .key thing to note here so write your code in way that if something have to change then you should have to make this change in very few places, let me give you example you are using fetch api before now your team decided to use axios so all your api call have to be in one file so you can change one file and everything is fine now this can be  example of this pattern, in advance you can make a general function and pass url and params this function will make call , so you need to change only at one place. this pattern make your code easy to change.

#### 5. Command pattern :

Idea here is that make every function a command by implementing their own class , so you can create new command by merging two command. let's take a example that when you close a window you get 3 option save , exit and save&exit to implement this without command pattern you have to write every three complete different function but with command you can implement  save and exit and combine them to implement save & exit.


### SOLID design Principles : 

1. Single Responsibility Principle : one reason to change .
2. open/closed principle :  
3. Liskov Substitution Principle 
4. Dependency inversion 

# Common Js Issue 

### If you attach two event listener with same name it will be called two times.

```js
 document.getElementById("editSpanner" + this.tableIndex).addEventListener("click", () => {
            Actions.editAndSaveButtonHandler( this.tableIndex, this.tableName, this.notNullConstraint);
        });
```

Have to look how js compare function on onclick , same then do not attach agiain [todo !!!]

### Never use get request for delete :

I have one api route when i send request with id this id will be deleted , but browser retry request if request taking time so when you make request with id=0 broeser will make 3 tries So id 0 , 1 , 2 will be deleted from your db. never do this !!!!!!!!! alse when search engin bot visit this link , that will also delete your data.

```js 
response = await Fetch.getAppData('GET', '/drop/secondaryindex?table=' + tableName + '&pos=' + pos);
```

pos is id here.

# Java Script From React Source code

If You want to be better at javascript than read the source code of the written library So let's start with React. you can download react js plain ja file from the nodemodule.

### Concepts List

#### 1. React Withoute java script

#### 2. Symbole

#### 3. Freeze and Seal Object

#### 4. Dynamic function name 

### References
[React Source](https://youtu.be/Z7ysKNFrMqo)

# JavaScript Memory manangment / GS

### Memory Management

Regardless of the programming language, the memory life cycle is pretty much always the same:

1. Allocate the memory you need
2. Use the allocated memory (read, write)
3. Release the allocated memory when it is not needed anymore

The second part is explicit in all languages. The first and last parts are explicit in low-level languages but are mostly implicit in high-level languages like JavaScript.

### references 

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)

[jsconf](https://youtu.be/AeUCN2lPqL8)

# type of qeueue 

### Message vs Job queue 

So job queue will give priority to the function , you know that when js engine will encounter the async code than it will put into the queue and that their is two type of the queue in the ES5/ES6 their use to a only one queue the Message queue and all callback live their but now after promise introduced promise always go in __Job Queue__ . Now let us see what is difference in them So Message queue will wait for call stack to be empty and then put a callback in the call stack but in job will not wait call stack to be empty but it will put callback after current function execution complete .

As example you have two function in call stack fun1 and fun2 and fun1 is runing right now at this point of time setTime out timer complete but it is in message queue so it will wait for fun1 and fun2 complete. but at same time one promise resolved so it will be executed after fun1 complete. So you can say promise has some priority.

### Promise all , rece , allsettled

These are some method that will help you to call and run one or more process in parallels you can pass array of promise in this method.

Promise.all : These will be go to the then block after all promise resolved and go to catch block if one them is reject it will not run other and will run catch block.

Promise.allsettled : In thease method it will wait for every promise to get resolve or reject then it will run then block. with info like status , value and reason.

Promise.race : these is wait for the only one promise to resolve or reject and it will go in then block after one promise resolve. 

# How to create Nodejs CLI

### Making Node cli

1. First create cli.js this is the entry point of the cli
2. create create-project file with !# So node can execute this file
3. the bin of package.json file give command and path to create-project file So node will run this exucuteble when you fire that command , and fromthat executabe we are calling cli.js
4. look into arg pkg.


