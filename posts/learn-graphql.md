---
title: Learn GraphQl
description: GraphQl notes.
date: Jan 22, 2021
updatedOn : Jun 14, 2022
coverImage: /images/post/graphQl.png
tags: GraphQl,
---

### GraphQL
In the current rest api you wil send a request to a api and get data , so there will be many endpoint , you will pass parameter in url and get data from the server , but graphql will change this, graphql is query language for a api you will pass query to server , server will evaluate that query and send data accordingly , it will not send extara data , is you ask for one column in table you will get only one column.

let's take example you want to fetch list of video and information about specific video from the api , so using rest api you have to make one api call to fetch list of the video and then have to make n number of call to /id endpoint to fetch each video details , but with graphql you will have to make only one call.

#### graphQL is  not implementation it is just a specification.to use graphQL you have too use server and client library on your lenguage.

### React query npm

- react query is a library that can help you in making api call, with only useEffect hook we make api call then wait for the response still reponse come we willl show a loder , and then show real app data , so all this things you have to by your self but with this library you can just use __useQuery__ hoook it will return to thing data and status , status can be loading , success , or error . you can contionly render with status and when data come show data it is that easy ,

```js
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
 const queryClient = new QueryClient()
 
 export default function App() {
   return (
     <QueryClientProvider client={queryClient}>
       <Example />
     </QueryClientProvider>
   )
 }
 
 function Example() {
   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
 
   return (
     <div>
       <h1>{data.name}</h1>
       <p>{data.description}</p>
       <strong>👀 {data.subscribers_count}</strong>{' '}
       <strong>✨ {data.stargazers_count}</strong>{' '}
       <strong>🍴 {data.forks_count}</strong>
     </div>
   )
 }

```
react uqery also take care of 

- Help you remove many lines of complicated and misunderstood code from your application and replace with just a handful of lines of React Query logic.
- Make your application more maintainable and easier to build new features without worrying about wiring up new server state data sources
- Have a direct impact on your end-users by making your application feel faster and more responsive than ever before.
 Potentially help you save on bandwidth and increase memory performance

