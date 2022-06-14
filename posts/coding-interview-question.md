---
title: Coding interview questions
description: This post will help you with markdown syntaxt.
date: June 21, 2021
updatedOn : Mar 21, 2022
coverImage: /images/post/Competitive-Programming.jpeg
tags: cp, algorithm, c++
---

## coding questions

## Day 1: (Array)
### 1. Find the Duplicates in Array of N integers.
```c++
void printRepeating(int arr[],int n)
{
     int i;
     cout<<"Repeating Elements are: "<endl;
     for(i=0;i<n;i++){
         if(arr[abs(arr[i])]>=0)
         {
               arr[abs(arr[i])]=-arr[abs(arr[i])];
         } 
         else cout<<abs(arr[i])<<" ";
     }
}
```
### 2. Sort an array of 0’s 1’s 2’s without using extra space or sorting algo 

``` c++
        void sortColors(vector<int>& nums) {
        int l = 0;
        int h = nums.size()-1;
        int m = 0;
        
        while(m<=h)
        {
            if(nums[m] == 0){
                swap(nums[m++],nums[l++]);
            }
            else if(nums[m] == 1){
                m++;
            }
            else{
                swap(nums[m],nums[h--]);
            }
        }
        cout<<l<<" "<<m<<" "<<h<<endl;
        for(int i : nums){
            cout<<i<<" ";
        }
        
    }

```

### 3. Repeat and Missing Number
__Approch 1:__ First take sum still n and subtract given array sum from that you will get answer.
``` c++
int missingNumber(vector<int>& nums) {
         int n = nums.size();
        int sum =(n *(n+1))/2;
   
    for(int i=0;i<n;i++)
    {
        sum -= nums[i];
    }
     
        
        return sum;
        
    }
```
    
__Approch 2:__ XOR of the two equal number will be zero, in this we will take xor of all i (1 to n) and all nums[i] in array so after all we will xor all 1 to n number except missing number and order is not meter in XOR so result will be your answer . __EXP__: 3 0 1  => xor  Opration  : 0^3^1^0^2^1^3 == 2(Ans)
``` c++
    int missingNumber(vector<int>& nums) {
         int n = nums.size();
    
   int sum =0;
    for(int i=0;i<n;i++)
    {
        sum ^= nums[i];
        sum ^=i+1;
    }
     
        
        return sum;
        
    }
```

### 4. Merge two sorted Arrays without extra space

``` c++
 void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
     int i = m - 1, j = n - 1, tar = m + n - 1;
        while (j >= 0) {
            nums1[tar--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
        }
    }
```

### 5. Largest Sum Contiguous Subarray

__Kadane’s Algorithm__  : 
``` c++
Initialize:
    max_so_far = 0
    max_ending_here = 0

Loop for each element of the array
  (a) max_ending_here = max_ending_here + a[i]
  (b) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
  (c) if(max_ending_here < 0)
            max_ending_here = 0
return max_so_far

```

``` c++
 int maxSubArray(int A[], int n) {
        int ans=A[0],i,j,sum=0;
        for(i=0;i<n;i++){
            sum+=A[i];
            ans=max(sum,ans);
            sum=max(sum,0);
        }
        return ans;
    }
```

 
### 6 .Set Matrix Zeros

``` c++
 void setZeroes(vector<vector<int>>& m) {
        int n =m.size();
        int x = m[0].size();
        vector<bool> r(n,0);
        vector<bool> c(x,0);
         for(int i=0;i<m.size();i++){
            for(int j=0;j<m[0].size();j++){
                if(m[i][j] == 0)
                {
                   r[i] =1;
                    c[j] = 1;
                        }
            }
        }
        
       for(int i=0;i<n;i++) {
            if(r[i])
            {
        
              for(int j=0;j<m[0].size();j++)
        {
            m[i][j] = 0;
        }
        
}
       }
      
        for(int i=0;i<x;i++) {
        {
            if(c[i])
            {
            for(int j=0;j<n;j++)
        {
            m[j][i] = 0;
        }
            }
}
        }
        
}
```

#### better approach  can be store states of each row in the first of that row, and store states of each column in the first of that column. Because the state of row0 and the state of column0 would occupy the same cell, I let it be the state of row0, and use another variable "col0" for column0. In the first phase, use matrix elements to set states in a top-down way. In the second phase, use states to set matrix elements in a bottom-up way

   ----------------------------------------------------------------------------------------------------------
## Day 2: (Array)

### 7. Pascal Triangle
 ``` cpp
 vector<vector<int>> generate(int n) {
        
        vector<vector<int> > pas ; 
        if(n==0)  return pas;
        
             vector<int> temp;
        temp.push_back(1);
        pas.push_back(temp);
        if(n == 1) return pas;
        
        
        for(int i=1;i<n;i++)
        {
        vector<int> temp(i+1);
            temp[0]=1;
            temp[i] = 1;
            
            for(int j=1;j<i;j++)
            {
                int v = pas[i-1][j]+pas[i-1][j-1];
               temp[j]=v; 
            }
       
        pas.push_back(temp);
        }
        return pas;
```

### 8. Next Permutation

``` cpp
1. Find the largest index k such that nums[k] < nums[k + 1]. 
    If no such index exists, just reverse nums and done.
2. Find the largest index l > k such that nums[k] < nums[l].
3. Swap nums[k] and nums[l].
4. Reverse the sub-array nums[k + 1:]
```

### 8.Inversion of Array (Using Merge Sort)

``` cpp
 bool isIdealPermutation(vector<int>& A) {
        int n = A.size();
        
        for(int i=0;i<n;i++)
        {
            if(abs(A[i]-i) >1)
            {
return false;}
}
        
            return true;
    
    }
```
### 9. Stock sell and buy

#### This is the best case where you can use kadane 's algorithm
``` c++
public int maxProfit(int[] prices) {
        int maxCur = 0, maxSoFar = 0;
        for(int i = 1; i < prices.length; i++) {
            maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
            maxSoFar = Math.max(maxCur, maxSoFar);
        }
        return maxSoFar;
    }
```
### 10. Rotate metrix 

``` cpp 
/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/
void rotate(vector<vector<int> > &matrix) {
    reverse(matrix.begin(), matrix.end());
    for (int i = 0; i < matrix.size(); ++i) {
        for (int j = i + 1; j < matrix[i].size(); ++j)
            swap(matrix[i][j], matrix[j][i]);
    }
}

/*
 * anticlockwise rotate
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7
*/
void anti_rotate(vector<vector<int> > &matrix) {
    for (auto vi : matrix) reverse(vi.begin(), vi.end());
    for (int i = 0; i < matrix.size(); ++i) {
        for (int j = i + 1; j < matrix[i].size(); ++j)
            swap(matrix[i][j], matrix[j][i]);
    }
}
```
   ----------------------------------------------------------------------------------------------------------
## Day 3 : (Math)
   
  ### 11. Excel Column Number

   
   
    int titleToNumber(string s) {
        
        int n = s.length();
        long long sum =0;
        long long num26 = 1;
        for(int i=n-1;i>=0;i--)
        {
            sum += (s[i]-'A'+1) * num26;
            num26*=26;
        }
        return sum;
        
    }

    12. x^n in log n

    double myPow(double x, int n) {
        
        
        if(n==0) return 1;
        if(n<0) 
        {
            x = 1/x;
            n = n*(-1);
        }
        
       return  n&1 ? x * myPow(x*x , n/2) : myPow(x*x , n/2);
        
    }

### 13 . Tralling zero in  factorial.


int trailingZeroes(int n) {
        
      int temp;
        int ans = 0;
        while(n/5 > 0){
            temp = n/5;
            ans +=temp;
            n = temp;
            
            
        }
       return ans;  
    }

### 14.  Find GCD in Log N

Complexity of the O(log(a+b) )  this is logn Complexity.

int gcd(int a , int b)
{
        if(a == 0) return b;

        return gcd(a%b , b)
}


### 15.  Finding grid unique path.

 int uniquePaths(int m, int n) {
        
        vector<vector<int> > dp(m, vector<int>(n,1) );
     
        for(int i=1;i<m;i++){
            
            for(int j=1;j<n;j++)
            {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
        return dp[m-1][n-1];
    }

   ----------------------------------------------------------------------------------------------------------
## Day 4: (Hashing)
### 1. 2 Sum problem
 vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> res;
        unordered_map<int,int> mp;
        for(int i=0;i<nums.size();i++)
        {
            int p = target - nums[i];
            if(mp.find(p) != mp.end())
            {
                
                res.push_back(mp[p]);
                res.push_back(i);
                
                }
            mp[nums[i]] = i;
        }
        return res;
        
    }




-------------------------------------------------------------------------------------


### 2. 4 Sum problem

``` cpp
vector<vector<int>> fourSum(vector<int>& nums, int t) {
        sort(nums.begin(),nums.end());
        set<vector<int> > uni;
       vector<vector<int> > res;
        int n = nums.size();
            vector<int> c(4);
        for(int i=0;i<n;i++){
for(int j=i;j<n-1;j++){
    if(j!=i)
    {
int x = t-nums[i]-nums[j];
int l = j+1;
        int r = n-1;
    
        
        while(l<r)
        {
            int z = nums[l]+nums[r];
            if( z == x ){
                c[0] = nums[i];
                c[1] = nums[j];
                c[2] = nums[l];
                c[3] = nums[r];
                uni.insert(c);
                
                l++;
                r--;
            }
            else if(z < x)
            {
l++;}
            else{
                r--;
            }
        }
        
    
    }
}}
        
        for(vector<int> i : uni)
        {
res.push_back(i);
        }
        return res;
    }
```
### 3. Longest Consecutive Sequence
``` c++
int longestConsecutive(vector<int>& nums) {
        int n = nums.size();
        if(n==0) return 0;
        if(n==1) return 1;
        
        sort(nums.begin(),nums.end());
        int maxi = 0;
        for(int i=0;i<n;i++)
        {
            int local = 0;
            while(i+1 < n && abs(nums[i] - nums[i+1]) <= 1)
            {
                if(abs(nums[i] - nums[i+1])==1) local++;
                
i++;}
            maxi = max(local , maxi);
        }
        return maxi+1;
        
    }
```
### 4. Longest Subarray with 0 sum


### 5. Count number of subarrays with given XOR(this clears a lot of problems)

``` c++
 vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& q) {
        int n = arr.size();
        vector<int> ans;
        int temp=0;
    for(int i=0;i<n;i++){
        temp ^= arr[i]; 
        arr[i] = temp;
        
    }
        //for(int i : arr) cout<<i<<" ";
      for(int i=0;i<q.size();i++){
          if(q[i][0] == 0)
          {
               ans.push_back(arr[q[i][1]]);
          }
          else{
              int h =q[i][0]-1; 
              int x = arr[h]^arr[q[i][1]];
              ans.push_back(x); 
          }
          
             
          
      }  
        
        return ans;
        
    }
```
### 6. Longest substring without repeat
```c++
  int lengthOfLongestSubstring(string s) {
    
        int n =s.size();
        int m = 0;
        int st = -1;
        unordered_map<char ,int> mp;
        for(int i=0;i<n;i++)
        {
            if(mp.count(s[i]) != 0)
            {
                st = max(st,mp[s[i]]);
            }
            mp[s[i]] = i;
            m = max(m , i-st);
        }
        return m;
    }
```

## Day5: (LinkedList)

### 1. Reverse a LinkedList [Leetcode Link](https://leetcode.com/problems/reverse-linked-list/)
```c++
reverseList(ListNode* head) {
    if(!head) return NULL;
    
    ListNode* pre = NULL;
    LIstNode* cur = head;
    ListNode* nex;
    
    while(!head)
    {
    
    nex = cur->next;
    cur->next = pre ;
    pre = cur;
    cur = nex;
     
    }
}
```
### 2. Find middle of LinkedList [Link](https://leetcode.com/problems/middle-of-the-linked-list/)

```c++
ListNode* middleNode(ListNode* head) {
     
      ListNode* slow=head;
         ListNode* fast=head;
    
        while (fast!=nullptr && fast->next !=nullptr)
            slow = slow->next, fast = fast->next->next;
        return slow;
        
    }
};
```
### 3. Merge two sorted Linked List [Link](https://leetcode.com/problems/merge-two-sorted-lists/)

```c++
ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *newHead = new ListNode(-1);
        ListNode *cur = newHead;
        while (l1 != 0 && l2 != 0) {
            if (l1->val < l2->val) {
                cur->next = l1;
                l1 = l1->next;
            }
            else {
                cur->next = l2;
                l2 = l2->next;
            }
            cur = cur->next;
        }
        cur->next = l1 == 0 ? l2 : l1;
        return newHead->next;
    }
};
```
### 4. Remove N-th node from back of LinkedList [Link](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
```c++
 ListNode* removeNthFromEnd(ListNode* head, int n) {
         ListNode* ans = head;
        
        int i=0;
        while(head)
        {
            i++;
            head = head->next
;        }
        if(i==1) return nullptr;
       
        head = ans;
        ListNode* pre = ans;
        for(int j=0;j<i-n;j++)
        {
             pre = head;
            head = head->next
;        }
         head= head->next;
        pre->next = head;
       
       if(i==n) ans = head;
        return ans;
        
    }
};

```

#### Ap : 2

A one pass solution can be done using pointers. Move one pointer fast --> n+1 places forward, to maintain a gap of n between the two pointers and then move both at the same speed. Finally, when the fast pointer reaches the end, the slow pointer will be n+1 places behind - just the right spot for it to be able to skip the next node.

Since the question gives that n is valid, not too many checks have to be put in place. Otherwise, this would be necessary.

### 5. Delete a given Node when a node is given. (0(1) solution) [Link](https://leetcode.com/problems/delete-node-in-a-linked-list/)
```c++
   void deleteNode(ListNode* node) {
    if(node == NULL) return;
    ListNode *tmp = node->next;
    node->val = tmp->val;
    node->next = tmp->next;
    delete tmp;
}
```
### 6. Add two numbers as LinkedList [Link](https://leetcode.com/problems/add-two-numbers/)
```c++
 ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        vector<int> s;
        int v=0;
        //   ListNode temp = new ListNode(0);
        // ListNode ans = temp;
          
        while(l1 && l2){
            int t = l1->val + l2->val;
            int ans = (t+v)%10;
            v = (t+v)/10;
           s.push_back(ans);
        
             l1 = l1->next;
             l2 = l2->next;
            
        }
        while(l1){
                int t = l1->val;
            int ans = (t+v)%10;
            v = (t+v)/10;
           s.push_back(ans);
        
             l1 = l1->next;
            
            
        }
        
        while(l2){
             int t = l2->val;
            int ans = (t+v)%10;
            v = (t+v)/10;
           s.push_back(ans);
        
             l2 = l2->next;
            
        }
        
        if(v)
        {
s.push_back(v);
        }
        ListNode *temp = new ListNode(0);
         ListNode *ans = temp;
        for(int i:s)
        {
         temp->next  = new ListNode(i);
        
           temp = temp->next;
            cout<<i<<" ";
            
        }
        return ans->next;
        
    }
```


### Day : 6 (Linked List 2)

#### 1. Find intersection point of Y Linked List [Link](https://leetcode.com/problems/intersection-of-two-linked-lists/)

``` c++
 int length(ListNode *cur)
    {
        int  i=0;
        
        while(cur){
            cur=cur->next;
            i++;
            
        }
        return i;
}
    ListNode *getIntersectionNode(ListNode *hA, ListNode *hB) {
        
        int A = length(hA);
        int B= length(hB);
        
        if(A>B)
        {
            for(int i=0;i<A-B;i++){
                hA = hA->next;
            }
        }
        else{
             for(int i=0;i<B-A;i++){
                hB = hB->next;
            }
            
        }
        ListNode *ans = NULL;
     
    
        while(hA != hB)
        {
            
            
        
             hA = hA->next;
            hB = hB->next;
            
        }
        
        return hA;
      }

```
### Ap : 2 

n1 = length of linklist 1

n2 =  length of linklist 2

if you loop n1+n2 time cur will reach at intersection 

``` c++
ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    ListNode *cur1 = headA, *cur2 = headB;
    while(cur1 != cur2){
        cur1 = cur1?cur1->next:headB;
        cur2 = cur2?cur2->next:headA;
    }
    return cur1;
}
```
#### 2. Check if a Linked List is palindrome or not. [Link](https://leetcode.com/problems/palindrome-linked-list/)
``` c++
bool isPalindrome(ListNode* head) {
        int n=0;
        ListNode* temp=head;
        if(!head) return true;
        while(temp!=NULL) temp=temp->next,n++;
        int x=0;
        ListNode *pre=NULL;
        ListNode *ptr=head;
        while(x++<n/2){
            ListNode* temp=ptr;
            ptr=ptr->next;
            temp->next=pre;
            pre=temp;
        }
        if(n&1) ptr=ptr->next;
        while(ptr!=NULL || pre!=NULL){
            if(ptr->val!=pre->val) return false;
            ptr=ptr->next;
            pre=pre->next;
        }
        return true;
    }

```
#### 3. Reverse a Linked List in groups. [Link](https://leetcode.com/problems/reverse-nodes-in-k-group/)
``` c++

```
#### 4. Detect a cycle and removing loop(two different questions and same concept) [Link](https://leetcode.com/problems/linked-list-cycle/)
``` c++

```
#### 5. Flattening of a Linked List [Link](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)
``` c++

```
#### 6. Rotate a Linked List [Link](https://leetcode.com/problems/rotate-list/)
``` c++

```
#### 7. Clone a Linked List with random and next pointer [Link](https://leetcode.com/problems/copy-list-with-random-pointer/)
``` c++

```

### Day 7: (LinkedList)

#### 1. Merge two sorted LinkedLists
```c++
ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *newHead = new ListNode(-1);
        ListNode *cur = newHead;
        while (l1 != 0 && l2 != 0) {
            if (l1->val < l2->val) {
                cur->next = l1;
                l1 = l1->next;
            }
            else {
                cur->next = l2;
                l2 = l2->next;
            }
            cur = cur->next;
        }
        cur->next = l1 == 0 ? l2 : l1;
        return newHead->next;
    }
```
#### 2. Find the starting point of the loop.
```c++
ListNode *detectCycle(ListNode *head) {
    if (head == NULL || head->next == NULL)
        return NULL;
    
    ListNode *slow  = head;
    ListNode *fast  = head;
    ListNode *entry = head;
    
    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {                      // there is a cycle
            while(slow != entry) {               // found the entry location
                slow  = slow->next;
                entry = entry->next;
            }
            return entry;
        }
    }
    return NULL;                                 // there has no cycle
}
```

#### 3. Trapping rainwater (This is my favorite ....)
```c++

 int trap(vector<int>& A) {
       int n = A.size();
        if(n==0) return 0;
       int left[n];
       int right[n];
        
        right[n-1]= A[n-1]; 
        left[0] = A[0];
        
        for(int i=n-2;i>=0;i--)
        {
            right[i] = max(right[i+1],A[i]);
        }
        
        
        
        for(int i=1;i<n;i++)
        {
            left[i] = max(left[i-1],A[i]);
            
        }
       
        int res=0;
        
        for(int i=0;i<n;i++)
        {
            res += min(left[i],right[i])- A[i];  
        }
        
        return res;
      
    }

```
#### 4. Remove Duplicate from Sorted array
```c++
 int res = 0;
        int c=0;
        int n = nums.size();
        for(int i=0;i<n;i++)
        {
            
            if(nums[i] == nums[i+1])
            {
                c++;
            }
            else{
                nums[i-c] = nums[i];
            }
        }
        
        return nums.size()-c;
    
        
        
    }

```
#### 5. Max continuous number of 1’s

```c++
int findMaxConsecutiveOnes(vector<int>& nums) {
        
         int res = 0;
        int c=0;
        int ans=0;
        int n = nums.size();
        for(int i=0;i<n;i++)
        {
            
            if(nums[i] == 1)
            {
                c++;
            }
            else{
                c=0;
            }
            ans = max(ans,c);
           
        }
    return ans;
}
```

### Day:8

#### 1. N meeting in one room
```c++
 Arrays.sort(start);
    Arrays.sort(end);

    int l = start.length;
    int i = 1;
    int j = 0;

    int minMeetingRoomsRequired = 1;
    int noOfOngoingMeetings = 1;

    while (i < l && j < l) {
      if (end[j] > start[i]) {
        noOfOngoingMeetings++;
        if (minMeetingRoomsRequired < noOfOngoingMeetings) {
          minMeetingRoomsRequired = noOfOngoingMeetings;
        }
        i++;
      } else {
        noOfOngoingMeetings--;
        j++;
      }
    }

    return minMeetingRoomsRequired;
```
#### 2. Activity Selection

```c++

```
#### 3. Greedy algorithm to find minimum number of coins
#### 4. Fractional Knapsack Problem
#### 5. Minimum number of platforms required for a railway
#### 6. Job sequencing Problem


**Given an array of n non-negative integers. The task is to find the sum of the product of elements of all the possible subsets.**
 
Now take three numbers a, b, c:-
so possible subsets are : 
                             
subset 1 : {a}   

subset 2 : {b}     

subset 3 : {c}

subset 4 : {a,b}

subset 5 : {b,c}

subset 6 : {a,c}

subset 7 : {a,b,c}

so for each subset do product of all elements in each subset and then sum it.

**Solution :** 

**Brute Force Approach:** 
Simple approach is to generate all possible subset one by one and calculate sum of all elements. Time Complexity of this approach is exponential as there are total pow(2,n)– 1 subsets.

**Efficient Approach:**

Now take three numbers a, b, c:-

**sum of product of all subset**

   = a + b + c + ab + bc + ca + abc 

   = a + ac + b + bc + ab + abc + c + 1 - 1     **(add +1 and -1 to simplify things)**

   = a(1+c) + b(1+c) + ab(1+c) + c + 1 - 1

   = (a + b + ab + 1)(1+c) - 1 

   = (1+a) * (1+b) * (1+c) - 1  


**Now generalize it for n element**

__**Sum of product of all subset=(1+A1)(1+A2)...(1+An)-1;**__


### Problem Description

You are given a 1D integer array B containing A integers.

Count the number of ways to split all the elements of the array into 3 contiguous parts so that the sum of elements in each part is the same.

Such that : sum(B[1],..B[i]) = sum(B[i+1],...B[j]) = sum(B[j+1],...B[n])

``` c++
int Solution::solve(int A, vector<int> &B) {
int ans   = 0;
int sum =0;
int psum =0 ;
vector<int> temp(A,0);
for(int i=0;i<A;i++)  sum+=B[i];

if(sum%3 !=0 ) return 0;

for(int i=A-1;i>=0;i--) {
    psum+=B[i];
    
    if(sum/3 == psum) temp[i] = 1;
}
int ksum =0 ;
int i;
for(i=0;i<A;i++) {
ksum+=B[i];
    
    if(sum/3 == ksum) 
    {
    
        
        for(int j = i+2;j<A;j++)
{
    if(temp[j] == 1) ans++;
}
    }
}

return ans;
}

```


### Given preorder and inorder construct a B Tree

``` c++
TreeNode* buildTree(vector<int>& p, vector<int>& in) {
        int t =0;
        if(p.empty()) return nullptr;
      return helper(p ,in , 0 , in.size()-1 ,t);  
    }
    
    TreeNode* helper(vector<int>& p, vector<int>& in , int s , int e,int &t )
    {
        if(s > e) return nullptr;
        
         TreeNode * root = new TreeNode(p[t]);
           
        
        int i;

        for(i=s;i<=e;i++)
        {
            if(root->val == in[i])
            {
                break;
            }
        }
         t++;
        cout<<t<<endl;
        root->left = helper(p , in ,s , i-1,t );
        root->right = helper(p , in , i+1 , e ,t);
        
        return root;
    }
```


###   Populating Next Right Pointers in Each Node
``` c++
    Node* connect(Node* root) {
        
        Node* pre=root;
        Node* cur;
        
        while(pre){
            
            cur = pre;
            while(cur && cur->left)
            {
               
                cur->left->next  = cur->right;
                
                if(cur->next)
                {
                    cur->right->next = cur->next->left;
                }
                
                cur = cur->next;
            }
            pre = pre->left;
        }
        
        return root;
        
    }
```

### Lowest Common Ancestor of a Binary Tree

```c++
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
     
        if(!root) return nullptr;
        
        if(root == p || root==q) return root;
        
        TreeNode* l = lowestCommonAncestor(root->left , p ,q);
        TreeNode* r = lowestCommonAncestor(root->right, p ,q);
        
        if(!l && !r) return nullptr;
        if(l && r) return root;
        
        return l == nullptr ? r : l;
    }
```
### 4.Validate Binary Search Tree

```cpp
 bool helper(TreeNode * root , TreeNode * &pre)
    {
        if(!root) return true; 
       bool l = helper(root->left , pre);
        if(!l) return false;
        if(pre != NULL && pre->val >= root->val) return false;
        pre = root;
       bool r= helper(root->right , pre);
        
        return r;
    }
    
    bool isValidBST(TreeNode* root) {
   TreeNode *pre = nullptr;
     return helper(root , pre);  
    }
```

### 4. validate preorder travelsal

```cpp
int Solution::solve(vector<int> &A) {
    int root = INT_MIN;
    stack<int> s;
    for(int i=0;i<A.size();i++)
    {
        if(A[i] < root)
            return 0;
        
        while(!s.empty() && s.top() < A[i])
        {
            root = s.top();
            s.pop();
        }
        
        s.push(A[i]);
    }
    return 1;
}
```

### Flatten Binary Tree to Linked List

```c++
 void flatten(TreeNode* root) {
    if (!root) return;
    flatten(root->left);
    flatten(root->right);
    TreeNode *tmp = root->right;
    root->right = root->left;
    root->left = nullptr;
    while (root->right)
        root = root->right;
    root->right = tmp;
}
```

### Convert Sorted List to Binary Search Tree
```cpp
TreeNode* sortedListToBST(ListNode* head) {
    if (!head) return nullptr;
    if (!head->next) return new TreeNode(head->val);
    auto fast = head->next, slow = head;
    while (fast->next && fast->next->next) {
        fast = fast->next->next;
        slow = slow->next;
    }
    
    auto mid = slow->next;
    slow->next = nullptr;
    auto root = new TreeNode(mid->val);
    root->left = sortedListToBST(head);
    root->right = sortedListToBST(mid->next);
    return root;
}
```
## Day5: (LinkedList)

### 1. Reverse a LinkedList [Leetcode Link](https://leetcode.com/problems/reverse-linked-list/)
```c++
reverseList(ListNode* head) {
    if(!head) return NULL;
    
    ListNode* pre = NULL;
    LIstNode* cur = head;
    ListNode* nex;
    
    while(!head)
    {
    
    nex = cur->next;
    cur->next = pre ;
    pre = cur;
    cur = nex;
     
    }
}
```
### 2. Find middle of LinkedList [Link](https://leetcode.com/problems/middle-of-the-linked-list/)

```c++
ListNode* middleNode(ListNode* head) {
     
      ListNode* slow=head;
         ListNode* fast=head;
    
        while (fast!=nullptr && fast->next !=nullptr)
            slow = slow->next, fast = fast->next->next;
        return slow;
        
    }
};
```
### 3. Merge two sorted Linked List [Link](https://leetcode.com/problems/merge-two-sorted-lists/)

```c++
ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *newHead = new ListNode(-1);
        ListNode *cur = newHead;
        while (l1 != 0 && l2 != 0) {
            if (l1->val < l2->val) {
                cur->next = l1;
                l1 = l1->next;
            }
            else {
                cur->next = l2;
                l2 = l2->next;
            }
            cur = cur->next;
        }
        cur->next = l1 == 0 ? l2 : l1;
        return newHead->next;
    }
};
```
### 4. Remove N-th node from back of LinkedList [Link](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
```c++
 ListNode* removeNthFromEnd(ListNode* head, int n) {
         ListNode* ans = head;
        
        int i=0;
        while(head)
        {
            i++;
            head = head->next
;        }
        if(i==1) return nullptr;
       
        head = ans;
        ListNode* pre = ans;
        for(int j=0;j<i-n;j++)
        {
             pre = head;
            head = head->next
;        }
         head= head->next;
        pre->next = head;
       
       if(i==n) ans = head;
        return ans;
        
    }
};

```

#### Ap : 2

A one pass solution can be done using pointers. Move one pointer fast --> n+1 places forward, to maintain a gap of n between the two pointers and then move both at the same speed. Finally, when the fast pointer reaches the end, the slow pointer will be n+1 places behind - just the right spot for it to be able to skip the next node.

Since the question gives that n is valid, not too many checks have to be put in place. Otherwise, this would be necessary.

### 5. Delete a given Node when a node is given. (0(1) solution) [Link](https://leetcode.com/problems/delete-node-in-a-linked-list/)
```c++
   void deleteNode(ListNode* node) {
    if(node == NULL) return;
    ListNode *tmp = node->next;
    node->val = tmp->val;
    node->next = tmp->next;
    delete tmp;
}
```
### 6. Add two numbers as LinkedList [Link](https://leetcode.com/problems/add-two-numbers/)
```c++
 ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        vector<int> s;
        int v=0;
        //   ListNode temp = new ListNode(0);
        // ListNode ans = temp;
          
        while(l1 && l2){
            int t = l1->val + l2->val;
            int ans = (t+v)%10;
            v = (t+v)/10;
           s.push_back(ans);
        
             l1 = l1->next;
             l2 = l2->next;
            
        }
        while(l1){
                int t = l1->val;
            int ans = (t+v)%10;
            v = (t+v)/10;
           s.push_back(ans);
        
             l1 = l1->next;
            
            
        }
        
        while(l2){
             int t = l2->val;
            int ans = (t+v)%10;
            v = (t+v)/10;
           s.push_back(ans);
        
             l2 = l2->next;
            
        }
        
        if(v)
        {
s.push_back(v);
        }
        ListNode *temp = new ListNode(0);
         ListNode *ans = temp;
        for(int i:s)
        {
         temp->next  = new ListNode(i);
        
           temp = temp->next;
            cout<<i<<" ";
            
        }
        return ans->next;
        
    }
```


### Day : 6 (Linked List 2)

#### 1. Find intersection point of Y Linked List [Link](https://leetcode.com/problems/intersection-of-two-linked-lists/)

``` c++
 int length(ListNode *cur)
    {
        int  i=0;
        
        while(cur){
            cur=cur->next;
            i++;
            
        }
        return i;
}
    ListNode *getIntersectionNode(ListNode *hA, ListNode *hB) {
        
        int A = length(hA);
        int B= length(hB);
        
        if(A>B)
        {
            for(int i=0;i<A-B;i++){
                hA = hA->next;
            }
        }
        else{
             for(int i=0;i<B-A;i++){
                hB = hB->next;
            }
            
        }
        ListNode *ans = NULL;
     
    
        while(hA != hB)
        {
            
            
        
             hA = hA->next;
            hB = hB->next;
            
        }
        
        return hA;
      }

```
### Ap : 2 

n1 = length of linklist 1

n2 =  length of linklist 2

if you loop n1+n2 time cur will reach at intersection 

``` c++
ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    ListNode *cur1 = headA, *cur2 = headB;
    while(cur1 != cur2){
        cur1 = cur1?cur1->next:headB;
        cur2 = cur2?cur2->next:headA;
    }
    return cur1;
}
```
#### 2. Check if a Linked List is palindrome or not. [Link](https://leetcode.com/problems/palindrome-linked-list/)
``` c++
bool isPalindrome(ListNode* head) {
        int n=0;
        ListNode* temp=head;
        if(!head) return true;
        while(temp!=NULL) temp=temp->next,n++;
        int x=0;
        ListNode *pre=NULL;
        ListNode *ptr=head;
        while(x++<n/2){
            ListNode* temp=ptr;
            ptr=ptr->next;
            temp->next=pre;
            pre=temp;
        }
        if(n&1) ptr=ptr->next;
        while(ptr!=NULL || pre!=NULL){
            if(ptr->val!=pre->val) return false;
            ptr=ptr->next;
            pre=pre->next;
        }
        return true;
    }

```
#### 3. Reverse a Linked List in groups. [Link](https://leetcode.com/problems/reverse-nodes-in-k-group/)
``` c++

```
#### 4. Detect a cycle and removing loop(two different questions and same concept) [Link](https://leetcode.com/problems/linked-list-cycle/)
``` c++

```
#### 5. Flattening of a Linked List [Link](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)
``` c++

```
#### 6. Rotate a Linked List [Link](https://leetcode.com/problems/rotate-list/)
``` c++

```
#### 7. Clone a Linked List with random and next pointer [Link](https://leetcode.com/problems/copy-list-with-random-pointer/)
``` c++

```

### Day 7: (LinkedList)

#### 1. Merge two sorted LinkedLists
```c++
ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *newHead = new ListNode(-1);
        ListNode *cur = newHead;
        while (l1 != 0 && l2 != 0) {
            if (l1->val < l2->val) {
                cur->next = l1;
                l1 = l1->next;
            }
            else {
                cur->next = l2;
                l2 = l2->next;
            }
            cur = cur->next;
        }
        cur->next = l1 == 0 ? l2 : l1;
        return newHead->next;
    }
```
#### 2. Find the starting point of the loop.
```c++
ListNode *detectCycle(ListNode *head) {
    if (head == NULL || head->next == NULL)
        return NULL;
    
    ListNode *slow  = head;
    ListNode *fast  = head;
    ListNode *entry = head;
    
    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {                      // there is a cycle
            while(slow != entry) {               // found the entry location
                slow  = slow->next;
                entry = entry->next;
            }
            return entry;
        }
    }
    return NULL;                                 // there has no cycle
}
```

#### 3. Trapping rainwater (This is my favorite ....)
```c++

 int trap(vector<int>& A) {
       int n = A.size();
        if(n==0) return 0;
       int left[n];
       int right[n];
        
        right[n-1]= A[n-1]; 
        left[0] = A[0];
        
        for(int i=n-2;i>=0;i--)
        {
            right[i] = max(right[i+1],A[i]);
        }
        
        
        
        for(int i=1;i<n;i++)
        {
            left[i] = max(left[i-1],A[i]);
            
        }
       
        int res=0;
        
        for(int i=0;i<n;i++)
        {
            res += min(left[i],right[i])- A[i];  
        }
        
        return res;
      
    }

```
#### 4. Remove Duplicate from Sorted array
```c++
 int res = 0;
        int c=0;
        int n = nums.size();
        for(int i=0;i<n;i++)
        {
            
            if(nums[i] == nums[i+1])
            {
                c++;
            }
            else{
                nums[i-c] = nums[i];
            }
        }
        
        return nums.size()-c;
    
        
        
    }

```
#### 5. Max continuous number of 1’s

```c++
int findMaxConsecutiveOnes(vector<int>& nums) {
        
         int res = 0;
        int c=0;
        int ans=0;
        int n = nums.size();
        for(int i=0;i<n;i++)
        {
            
            if(nums[i] == 1)
            {
                c++;
            }
            else{
                c=0;
            }
            ans = max(ans,c);
           
        }
    return ans;
}
```

### Day:8

#### 1. N meeting in one room
```c++
 Arrays.sort(start);
    Arrays.sort(end);

    int l = start.length;
    int i = 1;
    int j = 0;

    int minMeetingRoomsRequired = 1;
    int noOfOngoingMeetings = 1;

    while (i < l && j < l) {
      if (end[j] > start[i]) {
        noOfOngoingMeetings++;
        if (minMeetingRoomsRequired < noOfOngoingMeetings) {
          minMeetingRoomsRequired = noOfOngoingMeetings;
        }
        i++;
      } else {
        noOfOngoingMeetings--;
        j++;
      }
    }

    return minMeetingRoomsRequired;
```
#### 2. Activity Selection

```c++

```
#### 3. Greedy algorithm to find minimum number of coins
#### 4. Fractional Knapsack Problem
#### 5. Minimum number of platforms required for a railway
#### 6. Job sequencing Problem

**Given an array of n non-negative integers. The task is to find the sum of the product of elements of all the possible subsets.**
 
Now take three numbers a, b, c:-
so possible subsets are : 
                             
subset 1 : {a}   

subset 2 : {b}     

subset 3 : {c}

subset 4 : {a,b}

subset 5 : {b,c}

subset 6 : {a,c}

subset 7 : {a,b,c}

so for each subset do product of all elements in each subset and then sum it.

**Solution :** 

**Brute Force Approach:** 
Simple approach is to generate all possible subset one by one and calculate sum of all elements. Time Complexity of this approach is exponential as there are total pow(2,n)– 1 subsets.

**Efficient Approach:**

Now take three numbers a, b, c:-

**sum of product of all subset**

   = a + b + c + ab + bc + ca + abc 

   = a + ac + b + bc + ab + abc + c + 1 - 1     **(add +1 and -1 to simplify things)**

   = a(1+c) + b(1+c) + ab(1+c) + c + 1 - 1

   = (a + b + ab + 1)(1+c) - 1 

   = (1+a) * (1+b) * (1+c) - 1  


**Now generalize it for n element**

__**Sum of product of all subset=(1+A1)(1+A2)...(1+An)-1;**__


### Problem Description

You are given a 1D integer array B containing A integers.

Count the number of ways to split all the elements of the array into 3 contiguous parts so that the sum of elements in each part is the same.

Such that : sum(B[1],..B[i]) = sum(B[i+1],...B[j]) = sum(B[j+1],...B[n])

``` c++
int Solution::solve(int A, vector<int> &B) {
int ans   = 0;
int sum =0;
int psum =0 ;
vector<int> temp(A,0);
for(int i=0;i<A;i++)  sum+=B[i];

if(sum%3 !=0 ) return 0;

for(int i=A-1;i>=0;i--) {
    psum+=B[i];
    
    if(sum/3 == psum) temp[i] = 1;
}
int ksum =0 ;
int i;
for(i=0;i<A;i++) {
ksum+=B[i];
    
    if(sum/3 == ksum) 
    {
    
        
        for(int j = i+2;j<A;j++)
{
    if(temp[j] == 1) ans++;
}
    }
}

return ans;
}

```

### Given preorder and inorder construct a B Tree

``` c++
TreeNode* buildTree(vector<int>& p, vector<int>& in) {
        int t =0;
        if(p.empty()) return nullptr;
      return helper(p ,in , 0 , in.size()-1 ,t);  
    }
    
    TreeNode* helper(vector<int>& p, vector<int>& in , int s , int e,int &t )
    {
        if(s > e) return nullptr;
        
         TreeNode * root = new TreeNode(p[t]);
           
        
        int i;

        for(i=s;i<=e;i++)
        {
            if(root->val == in[i])
            {
                break;
            }
        }
         t++;
        cout<<t<<endl;
        root->left = helper(p , in ,s , i-1,t );
        root->right = helper(p , in , i+1 , e ,t);
        
        return root;
    }
```


###   Populating Next Right Pointers in Each Node
``` c++
    Node* connect(Node* root) {
        
        Node* pre=root;
        Node* cur;
        
        while(pre){
            
            cur = pre;
            while(cur && cur->left)
            {
               
                cur->left->next  = cur->right;
                
                if(cur->next)
                {
                    cur->right->next = cur->next->left;
                }
                
                cur = cur->next;
            }
            pre = pre->left;
        }
        
        return root;
        
    }
```

### Lowest Common Ancestor of a Binary Tree

```c++
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
     
        if(!root) return nullptr;
        
        if(root == p || root==q) return root;
        
        TreeNode* l = lowestCommonAncestor(root->left , p ,q);
        TreeNode* r = lowestCommonAncestor(root->right, p ,q);
        
        if(!l && !r) return nullptr;
        if(l && r) return root;
        
        return l == nullptr ? r : l;
    }
```
### 4.Validate Binary Search Tree

```cpp
 bool helper(TreeNode * root , TreeNode * &pre)
    {
        if(!root) return true; 
       bool l = helper(root->left , pre);
        if(!l) return false;
        if(pre != NULL && pre->val >= root->val) return false;
        pre = root;
       bool r= helper(root->right , pre);
        
        return r;
    }
    
    bool isValidBST(TreeNode* root) {
   TreeNode *pre = nullptr;
     return helper(root , pre);  
    }
```

### 4. validate preorder travelsal

```cpp
int Solution::solve(vector<int> &A) {
    int root = INT_MIN;
    stack<int> s;
    for(int i=0;i<A.size();i++)
    {
        if(A[i] < root)
            return 0;
        
        while(!s.empty() && s.top() < A[i])
        {
            root = s.top();
            s.pop();
        }
        
        s.push(A[i]);
    }
    return 1;
}
```

### Flatten Binary Tree to Linked List

```c++
 void flatten(TreeNode* root) {
    if (!root) return;
    flatten(root->left);
    flatten(root->right);
    TreeNode *tmp = root->right;
    root->right = root->left;
    root->left = nullptr;
    while (root->right)
        root = root->right;
    root->right = tmp;
}
```

### Convert Sorted List to Binary Search Tree
```cpp
TreeNode* sortedListToBST(ListNode* head) {
    if (!head) return nullptr;
    if (!head->next) return new TreeNode(head->val);
    auto fast = head->next, slow = head;
    while (fast->next && fast->next->next) {
        fast = fast->next->next;
        slow = slow->next;
    }
    
    auto mid = slow->next;
    slow->next = nullptr;
    auto root = new TreeNode(mid->val);
    root->left = sortedListToBST(head);
    root->right = sortedListToBST(mid->next);
    return root;
}
```

### Xor from 1 to n
``` c++
Method 2 (Efficient method) :
1- Find the remainder of n by modulating it with 4.
2- If rem = 0, then xor will be same as n.
3- If rem = 1, then xor will be 1.
4- If rem = 2, then xor will be n+1.
5- If rem = 3 ,then xor will be 0
```
### Array given from 1 to N find duplicate in O(N)

``` c++
1. first take index i and make A[A[i]-1] nagative
2. if A[A[i]-1] is already 0 than A[i] is repeating nummber.

let N=2
1 2 2  => - A[0]  (: A[0]  - here i=0 so A[A[0]- 1] =  A[1-1] = A[0])
0 2 2  => -A[1] = 0
0 0 2  => - A[1] = 0 (But A[1] is already nagative so i= 2 is repeating number)

```

### Heap in c++

1. Here priority_queue<Type> is default max heap if you want to use min heap you can use like

```
priority_queue<ll ,vector<ll>, greater<ll> > pq;

```
2.  Elements can be inserted at any order and it have O(log(n)) time complexity for insertion.


#### power function recursive 

```cpp
long long power(int x , int n)
{
    if(n == 0) return 1;
    if(n&1) return x*power(x*x , n/2);
    else return power(x*x , n/2);
}

#### power function iterative

```cpp
long long power(int x , int n)
{
    if(n == 0) return 1;
    if(n&1) return x*power(x*x , n/2);
    else return power(x*x , n/2);
}
long long power_it(int x, int n)
{
    long long ans =1;
    while (n)
    {
        if(n&1) ans= ans*x;
        x = x*x;
        
        n = n>>1;
    }
    
    return ans;
}

int power_x_y_mod_p(int x , int y , int p)
{
    x = x%p;
    if(x ==0) return 0;

    int ans =1;

    while(y)
    {
        if(y&1) ans=(ans*x)%p;
            x = (x*x)%p;
            y = y>>1;

    }

    return ans;
}
```

###  


It is a fact that a number is divisible by 11 
**if and only if the alternating sum of its digits is equal to 0 modulo 11**
For example, 
8174958 is a multiple of 11, 
                  since 8 - 1 + 7 - 4 + 9 - 5 + 8 = 22.


### Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the 
 ### histogram.

``` cpp
   int largestRectangleArea(vector<int>& heights) {
                    
        heights.push_back(0);
        stack<int> s;
        int N = heights.size(), res = 0;
        
        for (int i = 0; i < N; ++i) {
            
            while (!s.empty() && heights[i] < heights[s.top()]) {
                int top = s.top();
                s.pop();
                res = max(res, heights[top] * (s.empty() ? i : i - s.top() - 1));
                cout<<res<<endl;
            }
            
            s.push(i);
        }
       
        return res;
    }
```

### Xor from 1 to n
``` c++
Method 2 (Efficient method) :
1- Find the remainder of n by modulating it with 4.
2- If rem = 0, then xor will be same as n.
3- If rem = 1, then xor will be 1.
4- If rem = 2, then xor will be n+1.
5- If rem = 3 ,then xor will be 0
```
### Array given from 1 to N find duplicate in O(N)

``` c++
1. first take index i and make A[A[i]-1] nagative
2. if A[A[i]-1] is already 0 than A[i] is repeating nummber.

let N=2
1 2 2  => - A[0]  (: A[0]  - here i=0 so A[A[0]- 1] =  A[1-1] = A[0])
0 2 2  => -A[1] = 0
0 0 2  => - A[1] = 0 (But A[1] is already nagative so i= 2 is repeating number)

```

### Heap in c++

1. Here priority_queue<Type> is default max heap if you want to use min heap you can use like

```
priority_queue<ll ,vector<ll>, greater<ll> > pq;

```
2.  Elements can be inserted at any order and it have O(log(n)) time complexity for insertion.


#### power function recursive 

```cpp
long long power(int x , int n)
{
    if(n == 0) return 1;
    if(n&1) return x*power(x*x , n/2);
    else return power(x*x , n/2);
}

#### power function iterative

```cpp
long long power(int x , int n)
{
    if(n == 0) return 1;
    if(n&1) return x*power(x*x , n/2);
    else return power(x*x , n/2);
}
long long power_it(int x, int n)
{
    long long ans =1;
    while (n)
    {
        if(n&1) ans= ans*x;
        x = x*x;
        
        n = n>>1;
    }
    
    return ans;
}

int power_x_y_mod_p(int x , int y , int p)
{
    x = x%p;
    if(x ==0) return 0;

    int ans =1;

    while(y)
    {
        if(y&1) ans=(ans*x)%p;
            x = (x*x)%p;
            y = y>>1;

    }

    return ans;
}
```