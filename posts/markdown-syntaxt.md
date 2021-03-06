---
title: Markdown syntaxt Tutorial
description: This post will help you with markdown syntaxt.
date: June 21, 2021
updatedOn : Mar 21, 2022
coverImage: /images/post/markdown-syntaxt-tutorial.jpeg
tags: md, markdown
---
# How to Write .Md file let us see.

# 1. Heading  
| input               |              output      |
|------------------------|-------------------------|
|# Text                  | <h1>Text</h1>           |
|## Text                 | <h2>Text</h2>           | 
|### Text                | <h3>Text</h3>           | 

****

# 2.Bold & italic 
|     Input              |  Output              |
|------------------------|----------------------|
| `_Text_`               |     _Text_           |
|    `**Text**`          |     **Text**         | 

****

# 3.Link & images
|     Input              |  Output              |
|------------------------|----------------------|
| `[Name of the link that you want to display to user](URL of link "this text will show on hover")`             |     [Name of the link that you want to display to user](https://www.google.com/ "this text will show on hover")         |
| `[alternate text of image](URL of image "this text will show on hover")`             |     [alternate text of image](https://www.google.com/ "this text will show on hover")        |
### Example:
---
this example link to google

|     Input              |  Output              |
|------------------------|----------------------|
| `[Google](https://www.google.com/ "google")`           |  [Google](https://www.google.com/ "google")          |
| `[doraemon](http://jto.s3.amazonaws.com/wp-content/uploads/2014/05/p1-doraemon-a-20140510.jpg "Doraemon")`           | ![doraemon](http://jto.s3.amazonaws.com/wp-content/uploads/2014/05/p1-doraemon-a-20140510.jpg "Doraemon")         |

***

# 4.To write code in .md

We use **```** (three `) to dispaly any code in particular code in .md file Let us take a example to Java script than

### Input 

` ``` javascript 
var sam = "It is Really Good to help Other";
console.log(sam);
``` `

### Output

``` javascript 
var sam = "It is Really Good to help Other";
console.log(sam);
```
_you have to specify language after ``` to syntax highlighting._

# 5. Table in .md
### Input
    
`|  col1  |  col2   |`</br>
`|----|----|`</br>
`|1       |     2   |`</br>
`|3       |     4   |` </br>

### Output
    
|    col1   |  col2  |
|-------------|-----------|
|     1       |     2     |
|     3       |     4     |
    

<br/>

**Credit** : __Sagar Dhandhalya__



__Git Profile__ : [GITHUB](https://github.com/Sagardhandhalya)