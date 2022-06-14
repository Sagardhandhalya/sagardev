---
title: web Accessibility and security
description: web Accessibility and security this is must for every developer.
date: august 28, 2021
updatedOn : Mar 21, 2022
coverImage: /images/post/a11y.jpeg
tags: a11y, security
---

### [Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)


#### 1. what is Focus

Focus refers to select one element in the dom and after that each keyboard event will run on that element. many user use only keyboard to navigate

``` js
      Tab : go forward 
       Shift + Tab : go backward
```

So that is why every page should have logical focus order. you have to set __tab order__ in useful way. focus order depend on element order of the dom you can change it by tan index attribute.

tab index > 0 := not good.
if you want a higher tab index to move high in the dom. tab index =0 to make div focusable .

#### 2. just use button

Always use native element whnever you can let say for example we can make a button from div with css but you should use button and style accordingly because 

1. you can focus button by default and for div you have to use tabindex
2. disable attribute will not work on div it will work on ntive button.

So use native elemnt for the job, it will always increase accesbility .

#### 3. ARIA

The ARIA specification is split up into three different types of attributes: __roles, states, and properties__. Roles describe widgets that aren't otherwise available in HTML 4, such as sliders, menu bars, tabs, and dialogs. Properties describe characteristics of these widgets, such as if they are draggable, have a required element, or have a popup associated with them. States describe the current interaction state of an element, informing the assistive technology if it is busy, disabled, selected, or hidden.

ARIA attributes are interpreted automatically by the browser and translated to the operating system's native accessibility APIs. So an element with role="slider" will be controlled in the same way as a native slider is controlled on the operating system.

```html
<!-- Now *these* are Tabs! -->
<!-- We've added role attributes to describe the tab list and each tab. -->
<ol role="tablist">
  <li id="ch1Tab" role="tab">
    <a href="#ch1Panel">Chapter 1</a>
  </li>
  <li id="ch2Tab" role="tab">
    <a href="#ch2Panel">Chapter 2</a>
  </li>
  <li id="quizTab" role="tab">
    <a href="#quizPanel">Quiz</a>
  </li>
</ol>

<div>
  <!-- Notice the role and aria-labelledby attributes we've added to describe these panels. -->
  <div id="ch1Panel" role="tabpanel" aria-labelledby="ch1Tab">Chapter 1 content goes here</div>
  <div id="ch2Panel" role="tabpanel" aria-labelledby="ch2Tab">Chapter 2 content goes here</div>
  <div id="quizPanel" role="tabpanel" aria-labelledby="quizTab">Quiz content goes here</div>
</div>
```

State changes
ARIA provides attributes for declaring the current state of a UI widget. Examples include (but are certainly not limited to):

aria-checked: indicates the state of a checkbox or radio button
aria-disabled: indicates that an element is visible, but not editable or otherwise operable
aria-grabbed: indicates the 'grabbed' state of an object in a drag-and-drop operation
(For a full list of ARIA states, consult the ARIA list of states and properties.)

Developers should use ARIA states to indicate the state of UI widget elements and use CSS attribute selectors to alter the visual appearance based on the state changes (rather than using script to change a class name on the element).

### you can add subtitle to html 5 video with .vtt file.

```html
<video controls>
  <source src="example.mp4" type="video/mp4">
  <source src="example.webm" type="video/webm">
  <track kind="subtitles" src="subtitles_en.vtt" srclang="en">
</video>
```
### Some links

[https://www.wuhcag.com/wcag-checklist/](https://www.wuhcag.com/wcag-checklist/)

[https://reactjs.org/docs/accessibility.html](https://reactjs.org/docs/accessibility.html)

