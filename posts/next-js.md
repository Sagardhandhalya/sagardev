---
title: Next js
description: Next js notes.
date: Jan 22, 2021
updatedOn : Jun 14, 2022
coverImage: /images/post/next.png
tags: NextJs
---

### Why and What

So when you use react you load index.html and app.js so now app.js will be executed by your browser and you can see output on the screen but you will not able to see this code in page source because all the html will be created by js, So what next js do id it genrate all the html on server and send direct html to the browser this is good for the SEO.

__why next js is good only because you can render react code on the server except this all things can be done with react also__

#### File structure 

1.public : static hosting file will go here , any file will be server as it is.
2. pages : Routes go here is you put about.js then you can see this component on localhost:3000/about more cases are 
   -- about.js : localhost:3000/about
   -- src/about.js : localhost:3000/src/about
   -- [slug].js :
 
3. index.js  : page/_document.js custom document go here[use minimal]

4._app.js : this file is responsible for rendering all your component , if you pass h1 h1 will be shown on every component.
 you will pass two things to App component component and pageProps .

```js
export default function App(Component , pageProps )
{
return <Component {...pageProps}>
}
```
__!!! if you make console log in _app.js it will print on both side onserver and also on browser console because in SSR first html genrate then send html show it on page after that java script will be download and then attach it to html , so first log happens on console and then in the browser. _document.js only run on server do not write java script there.__

### Routing 

1. Nesting route 

So for the nested route you can create a folder like say you want to have /sagar and /sagar/task so you will create sagar folder in page folder in there create index.js file it will be shown on /sagar and create second file in sagar with name task.js so that component will be shown in the /sagar/task route that how nesting route work in next js.

2. Dynamic Route :

let's say you want to build a blog you will need route like /blog/blog1 , /blog/blog2 etc.so to do that you will create a special file with __[]__ , you will create [oneBlog].js so with this file all the route like .blog/xyx , blog/anything will serve oneBlog].js file , but /blog/xyz/abc will not serve that file beacause there is 2 section. So to catch this you have to create folder [oneblog] and create new file in there [suboneblog].js there.

### use Router hook 

Used for navigate with programme.
```js
 const router = useRouter()
```
router contain many things , if you want to catch dynamic route it is in query object.when you want user click and redirect to other page use link from next js for programatic redirect use router. 

__catch all route [...name].js in this case router.query wii return array in order of path__

__A special file 404.js will be shown as 404 page__

### getStaticProps 

### getStaticPath  

if you have dynamic page ([name]) that have to use both staticpath and props together elsewhere getstaticprops will work.


### Routing 

- In the HTML we use a tag or windows.location.href to routing to another page in next js we use 

```js
<Link href="/about">
<a>About</a>
</Link>
```
you can use a tag but it very slow it will mount react again it will take time to do so.

- For the programetic routing we can use useRouter Hook,

```JS
import {useRouter } from 'next/router'
render(){
const router = userRouter();
<button onClick= {()=> router.push('/about')}> About </button>
}
```

-  shalow routing in next js concept of render page with new quesry data without reruning all data facting function it is way to store your state inside of your url.__ where to use this one case is you have map on your site , you store x , y in url when user share this info other user can see exact location of that user , benofits of storing state in url.
