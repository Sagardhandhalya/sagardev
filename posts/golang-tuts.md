---
title: Golang notes.
description: basic notes on golang.
date: June 21, 2021
updatedOn : Mar 21, 2022
coverImage: /images/post/go.png
tags:  goLang
---

### These are something you find new in Go.
1. function declaration has to in the same line like func(){ 
2. give an error if you declare variable or package and do not use them.

```Go
package main

import "fmt"

func main() {
	var sam = 4
	fmt.Println(sam)
}
```

3. when you assign a variable to value in same line type is optional but when you are assigning value letter type must.

```Go
var num1  // error
var num1 int // will define num1=0
var num1 = 5  // num1 will be int type.
var num1, num2 int  ---- 2 variable in same line have to be same type
num1,num2 = 2,3 ---- asiign value 
```

#### what is :=
```Go
result := 9. // same as var result = 9 
```
creation and assignment happen at the same time.
const is also there in go
```go
const num1 = 7
num1 = 9 // error

```

#### Go has only one loop [for]
```go
package main

import "fmt"

func loop1() {
	i := 0
	for i <= 5 {
		fmt.Println(i)
		i++
	}
}

func loop2() {
	for i := 0; i <= 10; i++ {
		fmt.Println("sagar is good guy..", i)
	}
}

func myfunction(x int, y int) int {
	return x + y
}

func addsub(x, y int) (int, int) {
	return x + y, x - y
}

func main() {
	// variable
	var sam = 4
	num1 := 5
	fmt.Println(sam, num1)

	// loops
	loop1()
	loop2()

	//functions

	result := myfunction(10, 11)
	fmt.Println(result)

	add, sub := addsub(4, 7)
	fmt.Println(add, sub)
	//
}

```

#### variable work same as js the functional scope

#### capital name function will be exported small name will not be 

### defer Panic Recover 

https://youtu.be/c78JEGBAopg


#### Go module

Like node go also has a dependency management tool called "go mod", these are some commands that will be useful to you.

1. go get github.com/bwmarrin/discordgo [get the package it will store  it in the cache]
2.go mod tidy [remove a package that not used]
3.go mod vendor [make vendor folder and put all dependency locally there]
4. go mod init <path> [ initialize a project. with go module]

### print and scan

-- fmt has 3 print function:
1. fmt.Printf("%v %T",10,10). : it will print number on the screen you formate it via %
2. fmt.Sprint("%v",10) : it will format and return formatted string which you can store somewhere.
3. fmt.Println(): print a line

-- scan functions:
```
scanner := bufio.NewScanner(os.Stdin) 
	scanner.Scan()
		n, err := strconv.ParseInt(scanner.Text(), 10, 64)
```

### Go routine 

``` go
func main(){
  go process("order")
  go process("refund")
}

func  process(item string){
for I:=0;true;i++{
    time.Sleep(time.Second/2)
   fmt.println("processed",I,item)
 }
}
```

So if you put go keyword than it will move ahead in the code and push that statement run in the background, but if main rutine exits those will not run to fix that we can put end of main something that take time and main do not exits , like scanLn etc. 

but the there better way to do this thing in __sync__  pkg called WaitGroup [it is a counter]

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func main() {
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		process("order", 5)
		wg.Done()
	}()
	wg.Add(1)
	go func() {
		process("refund", 10)
		wg.Done()
	}()
	wg.Wait()
}

func process(item string, n int) {
	for i := 0; i < n; i++ {
		time.Sleep(time.Second / 2)
		fmt.Println("processed", i, item)
	}
}

```
#### Facts

There are major differences between the ways arrays work in Go and C. In Go,

Arrays are values. Assigning one array to another copies all the elements.

In particular, if you pass an array to a function, it will receive a copy of the array, not a pointer to it.

The size of an array is part of its type. The types [10]int and [20]int are distinct.

#### Interfce in Go

the interface will help to define behaviour and will help you to implement polymorphism, 
```go
type human interface{
       speak()
}
```

now any object that has speak method that object implements this interface OR you can say any type has speak method is also human type.


### testing
-run take regex 
```go
go test -v -run="French|Canal"
```

## working with file

- In order to read from files on the local system, the io/ioutil module is put to use. The io/ioutil module is also used to write content to the file.
- os.Create() : The os.Create() method is used to creates a file with the desired name. If a file with the same name already exists, then the create function truncates the file.
- ioutil.ReadFile() : The ioutil.ReadFile() method takes the path to the file to be read as it’s the only parameter. This method returns either the data of the file or an error.
- ioutil.WriteFile() : The ioutil.WriteFile() is used to write data to a file. The WriteFile() method takes in 3 different parameters, the first is the location of the file we wish to write to, the second is the data object, and the third is the FileMode, which represents the file’s mode and permission bits.
- log.Fatalf : Fatalf will cause the program to terminate after printing the log message. It is equivalent to Printf() followed by a call to os.Exit(1).
- log.Panicf : Panic is just like an exception that may arise at runtime. Panicln is equivalent to Println() followed by a call to panic(). The argument passed to panic() will be printed when the program terminates.
- bufio.NewReader(os.Stdin) : This method returns a new Reader whose buffer has the default size(4096 bytes).
- inputReader.ReadString(‘\n’) : This method is used to read user input from stdin and reads until the first occurrence of delimiter in the input, returning a string containing the data up to and including the delimiter. If an error is encountered before finding a delimiter, it returns the data read before the error and the error itself.

```go
package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
)

func writeFile(filename string,data string){
	file,err :=os.Create(filename)
	fmt.Printf("creating file : %s",filename)
	defer file.Close()
	if err != nil{
	log.Fatal("not able to create file")
	}
	file.WriteString(data)
}

func readFile(filename string){
	 data,err := ioutil.ReadFile(filename)
	if err != nil{
	log.Fatal("not able to read file")
	}
	fmt.Printf("%s",data)
}

func main(){
	var fname,content string
	fmt.Println("Enter file name :")
	fmt.Scanln(&fname)
	fmt.Println("Enter data :")
	fmt.Scanln(&content)
	writeFile(fname,content)
	readFile(fname)
}
```










