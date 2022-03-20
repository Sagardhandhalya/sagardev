import { Heading, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import fs from 'fs'
import path from 'path'
import matter  from 'gray-matter'
import PostCard from "../../components/PostCard";
export interface IPost{
  title:string
  slug:string
  description:string
  date:string,
  updatedOn:string
  coverImage:string
  tags:string
}
const index:FC<{posts:IPost[]}> = ({posts}) => {
  console.log(posts)
  return <>
     <Heading
        as="h1"
        size="md"
       textAlign="center"
        fontWeight="bold"
        textDecoration="underline"
        textDecorationColor="blue.200"
        textDecorationThickness="5px"
        textUnderlineOffset="6px"
        my="12"
      >
        Posts
      </Heading>
       <Flex
      direction={["column", "row"]}
      align={["", "space-around"]}
      justify={["", "center"]}
      wrap="wrap"
    >
      {posts.map((post:IPost) => (
        <PostCard key={post.slug}  post={post} />
      ))}
    </Flex>
    </>
  
      }

export default index;


export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
 const meta =  files.map(file => {
    // getting slug
   const slug=file.replace('.md','')
   console.log(slug)
    const fileData = fs.readFileSync(path.join('posts',file),'utf-8');
    const metadata = matter(fileData)
    metadata.data['slug'] = slug
    return metadata.data;
  })
  
  return {props:{posts:meta}}
}