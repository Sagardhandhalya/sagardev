---
title: Chrome extention basics
description: chrome extention basics, you can start from here..
date: June 21, 2021
updatedOn : Mar 21, 2022
coverImage: /images/post/cextention.jpeg
tags: extention,
---

 Extensions are made of different, but cohesive, components. Components can include background scripts, content scripts, an options page, UI elements, and various logic files. Extension components are created with web development technologies: HTML, CSS, and JavaScript. An extension's components will depend on its functionality and may not require every option.

### Basic set up of extention project

#### Manifest.json

Start with __name__ name of the extention , then __description__ then __version__
 aftet that __manifest_version__ then you will write __background__  object has a __scripts__ ararry in that array you will write path of all script that you wanted to execute when extention will instelled, important write a __permissions__ a array that hold all your permission. write a __browser_action__ object has key __default_popup__ to show html page when you click on extention icon.


```json
{
    "name" : "To do List",
    "manifest_version" : 2,
    "version":"0.1.0",
    "description": "the is the text extention we will see there",

    "browser_action":{
        "default_popup" : "popup.html"
    },
    "permissions":[
        "tabs"
    ],
    "background":{
        "scripts":["./background.js"]
    }
}
```

