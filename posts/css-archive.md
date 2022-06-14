---
title: CSS Archive
description: This contain some CSS concept that you have to know. CSS specificity.
date: June 22, 2020
updatedOn : Jun 14, 2022
coverImage: /images/post/css.jpeg
tags: CSS, SCSS
---

# CSS Notes & sass

### 1. CSS Units

__rem__ : There is many units like Rem,em ,PX ,VM  from them px is fix and easy to understand but  rem and vm are relative . Here rem is relative to root element(HTML element). HTML fond size is 16 px to default so if you make fontsize to 2rem on p thank actual fontsize will be 32px .

So rem always relative to the HTML element font which is 16px default you can change it.

__Em__ : It is relative to parent element font size.

__Vh__ :  view port height 50vh means half of page .horizontally .

__vw__ : veiw port width

### 2. Flex box

Flex is very use full display property you can create a container with display style flex
and yu can give property like.
1. justify-content : space-around
2. align-item : center
3. flex-wrap : wrap

and on each item we can use flex-grow : 2 and flex-basis : 0

### 3. position in CSS

__absolute__ :  This will be like absolute never change it will be override other element. You can give top bottom etc. but that is relative their parent who has position other than static. this is always use with pair parent will be relative and child will be absolute. 

 __relative__ : Just same as static until you do not apply top etc. property. You can change top , bottom, etc. relative to their own static element . this element is out of the dom. it will create Dom overflow.

__sticky__ :  relative by default but if you scroll it will become fixed.

__static__ : This is the default position in the browser .

__fixed__ : similar to absolute but has relative to  whole html element and it will be their in scroll but absolute will be gone in scroll but fix is not.
 

### 4. Display in CSS
 you can display block like div, p , other then that display inline but in inline margin and padding  do not work as expected . 

so we will use inline-block property to fix that. also you can use display flex.

### 5.Animation in CSS

This is in the folder code/cssprec


1. HTML was first created by Tim Berners-Lee, Robert Cailliau, and others starting in 1989. It stands for Hyper Text Markup Language.

2. In meta tag you can write encoding , author and description etc.

3. as per seacrch engin h1 is the most important info on page so be carefull when you are using tags.

4. ol , ul , __dl__

### Final guild for layout of the web site....

1. Float Property

- here two main property float and clear 
    1. float left means image will touch left edge of the browser in the pearagraph 

    2. clear left means that no floating element can float left to this element.

    we can use overflow auto .


2. css Flexbox layout

    - first set display flex on the container.now you can set this property to flex container :

        1. flex direction : direction of the item is flex container 
            -:  ---- = row 
            -: |  = column
        2. flex wrap : should warp or not it will go to the next line if neded .
            -: wrap and nowarap and wrap-reverse 
        3. flex flow : short hand for wrap and direction
            -: flex-flow : row wrap;
        4. justify-content : use for the align item in flex like flrx-start flex-end , space-around , space-between , etc. more apply on space between item.

        5. align-item : it will appply on each item like base line will center line , stretch will apply same size on each item etc.

        6. align-content :  to align flex line .

                to center a thing align-item center and justfy content center.
                

3. CSS Grid layout



-- Font : always use font size in em 
        1em = 16 px = default font size int the browser.
        ```html
        body {
  font-size: 100%;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 1.875em;
}

p {
  font-size: 0.875em;
}
        ```

   responsivw font size is vh = view port .Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.


### Specifics on CSS Specificity

- when you give id and class on div and give diferent style then how breowser decide which style to apple there are specificity rule for that.

In fact, the order of selectors in your CSS does play a role and the “further down” one does in fact win when the specificity values are exactly the same.

Specificity is 4 number 

``` js
                       inlineStyel ID Class Tag 
```

So 1,1,1,1 means selector has one inline style, one id , one class name and one tag name something like color:red on html then in css file #someid.someclassdiv .So browser compare this number one by one and select which selector style to apply.

### Scss

#### 1. Variables
```css
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

#### 2. Modules

```css
// _base.scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

#### 3. Mixins

```css
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

#### 4. Extend/Inheritance
```css
/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}
```

#### 5. Variables

```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```