---
title: Angular, Typescript and Rx js
description:  Angular, Typescript and Rx js notes.
date: June 21, 2021
updatedOn : Mar 21, 2022
coverImage: /images/post/angular.png
tags:  Angular, Typescript, RxJs
---

### @ViewChild in Angular

view child is very useful when you want to call child component's method from the parent component , lets me go into more details , I have senario that i have a parent component and a child component in child component i have method that will change some class variable of the child now think about i want to change that variable from the button click in the parent, for this we can use use view child , what view child doing is it will give a object instance of the child component class in the parent so now using that instance you can call any method of child component class. 


### Angular change detection :

So, when your data object change compare whole object and change dom accordingly , but if you have nested object as state then angular will take more time for checking changes , So you can specify what change angular should look , If you specify change detection as Default then angular check all the nested object for change but if you specify onchange as change detection then angular check for change in reference do not compare nested object it will boost performance , but in this method you have change state by replacing state using map.


### Directive 

Attribute directive will change behaviour of the regular element. 

### Content Projection

content projection is when you put text inside h1 element it will render as header it will project content inside of them , we want to this same thing with angular component, what if we want to render content between tag in the component.we can use __ng-content__ here.

So thing is in the template of the component you can write this tag <ng-content> </ng-content> and angular put all those thing here which you written in between those component tag.

### @contentChild 

https://www.youtube.com/watch?v=dH1EWRoEcMo

https://www.youtube.com/watch?v=bRTiIRPU5A0

https://www.youtube.com/watch?v=Brqxd7Gk6Tk&list=PLp50dWW_m40Vwos9FO-QnCvGPTy24RRSB&index=9

https://www.youtube.com/watch?v=paEau8FRMxw&list=PLp50dWW_m40Vwos9FO-QnCvGPTy24RRSB&index=9

https://youtu.be/ewcoEYS85Co

https://youtu.be/SDgDzEAGwEw

Create Your First Angular Library - Nir Kaufman : https://youtu.be/lvjt9rBHWjo
test angular service : https://youtu.be/45BuZAfFU0o


# RX Js

### Think of RxJS as Lodash for events.

- The essential concepts in RxJS which solve async event management are:

- Observable: represents the idea of an invokable collection of future values or events.

- Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.

- Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.

- Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
- Subject: is the equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.

- Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.

#### observable is the data source that emit value and observer is the code that will be executed on that value (Simple !!!) 

Observer has 3 method :
1. next() : will be run when next value come from observable 
2. error() : on error 
3. complete() : on complete 

So now question is how observer know that he have to call which method so it will be decided when observer subscribe a observable.

### Operators :

Every operator will return a new observable, so we can call subscribe on that , and take a function as argument , that function will take old value as argument so you can return new value.

- map : convert original stream data to updated data and return new observable.

- Filter : take function as argument with return boolean  value if return true value will go to next level otherwise it will be dropped.

- debounceTime : wait until next request.take time as argument.  

- distictUntilChanged : get request only for distinct.

also read about __scan__ , __reduce__ , __pluck__ , __mergemap__



### Subject 

So if you can see observable is passive what i mean is that you wrap a data source with observable , so when new data come  next method will be called but you can not not call next method manually but you can do it with __subject__.

#### Rx js 6 and above has change import pattern like import {map} from 'rxjs/operators' and also one major change is add pipe to chain the operator. pass all the operator into the pipe funtion . 
 

### TypeScript for JavaScript Programmers

- Your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
