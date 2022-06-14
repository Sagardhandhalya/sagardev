---
title: Python and ML library
description: This contain some CSS concept that you have to know. CSS specificity.
date: June 22, 2020
updatedOn : Jun 14, 2022
coverImage: /images/post/python.png
tags: python, Numpy, panda
---

#### Number  :
```python
 round(2.565656 , 2) // 2.57
```
#### String :
String is immutable in python.
``` python
text = "sagar"
text[0] = 's'
text[1] = 'p' // ERROR
text[1:3]  //ag   :: first will included in output second index will not
text[:4] // saga
''' ''' // for multiple line
srt(25)  // '25' num to string
```

#### list

```py
items = ['sam', 'tt']
items[0] // 'sam'
items[0]='sagar'
items[0:2] // ['sagar','tt']
items[-1] // last item
items.append('samir') // to add
items.inser(1,'samir')  // insert on 1 index 
// you can join list by + operator 
len(items) // size of list
"sagar" in items // true for look up
```
#### Pycharm 

```py

 # For loop ................
for i in range(1 , 50):
    if m <= 30:
        print("yes")
    else:
        print("no")

s = "sagar"

for i in s:
    print(i.upper())
    print(i.lower())

# Functions ..................................

def loop():
    for x in range(2, 30, 3):
        print(x)


loop()


# Class ........................

class man:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def speak(self):
        print('my name is '+self.name + ' i am '+ str(self.age))


sagar = man('sagar', 23)
samir = man('samir', 23)
sagar.speak()
samir.speak()
del samir.name
# print(samir.name)
print(sagar.name)

# pass for empty class

# Sort ..................................

cars = ['Ford', 'BMW', 'Volvo']
cars.append('zzz')
cars.insert(2,'dsds')
cars.sort()
print(cars)


```

### Panda

panda is a python module that contains utilities functions to manipulate data and that makes data science easy and effective. You can do everything in Excel and pure python but that is not convenient that is why we need panda. 

Import pandas and read csv file convert into the data frame , with read_csv mathod.

```py
import pandas as p
df = p.read_csv("w.csv")
df
df.shape  // print row and column of dataframe
df.head    // only few row
df.head(2)  // first 2 row
df[2:5]  // will print row 2 to 4 
df.columns // print title
df['day']  // first column
df[['day' , 'event']]  // only two column day and event
``` 
other methods are DataFrame()  pass python dictionary as input to convert into a df.

Opration on dataframe :

```py
df['temperature'].mean()
df['temperature'].std()
df['temperature'].describe()
df[df.temperature >= 30]
df[df.temperature >= 30]
df[df.event == 'Rain'][['day','event']]
df.index      
df.set_index('day' , inplace=True)  // set index to day inpalce true will update df do not return new frame
df.loc['1/6/2017']
```

There are so many ways to create data frame.

#### Read and Write CSV or Exel..
```py
import pandas as pd
df = pd.read_csv('csv name')
df = pd.read_csv('csv name' , skiprows=1)  // skip row
// header = None name=[]
df.to_csv('new.csv')
``` 
