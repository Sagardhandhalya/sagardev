---
title: Blockchain notes
description: Blockchain notes in brife.
date: Jan 21, 2022
updatedOn : Mar 21, 2022
coverImage: /images/post/blockchain.webp
tags: truffle, Ethereum, web3, ganesh
---


# Starting with Blockchain
##  NFT
1. https://youtu.be/tBMk1iZa85Y [Ultimate NFT Programming Tutorial - FULL COURSE]
2. https://www.youtube.com/watch?v=CgXQC4dbGUE [2 hour Dapp course]
3. solidity : https://youtu.be/M576WGiDBdQ?t=5461'
4. Block chain 101 : https://youtu.be/M576WGiDBdQ
5. .eth : https://youtu.be/jPfryC5yCo0
### What is blockchain 
- Giant worldwide database network
- block 
- smart contract [imutable programme]
- browser -> frontend -> web3 -> blockchain -> smart contract 
 


## Solidity 

```cpp
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
contract Storage {

    int256 n;

    function set(int256 m) public{
        n=m;
    }
    function get() public view returns(int256){
        return n;
    }
}
```

### array, struct, and Map
```cpp// make struct.
    struct Person{
        string name;
        uint256 age;
    }

    // type visibility name.
     Person public person = Person({name:'Sagar',age:4});
    mapping(string => uint256) public nameToAge;
    // array dynamic you can add fix size in bracket.
    Person[] public people ;

/*
    string is not normal type, it is object type.
    you need to decide where you want to store it , it can be storage or memory 
    memory : delete after execution
    storage : will persist after function exucutes 
*/
    // adding person in people
    function addPerson(string memory _name, uint256 _age) public{
        // order matter here name=0, age=1
        people.push(Person(_name,_age));
        nameToAge[_name] = _age;
    }

```

### import
you can import other sol file with

import filepath

### inherit
- contract x is y [*inherit y]