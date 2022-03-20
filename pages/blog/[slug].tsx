import React, { ContextType, FC } from "react";
import { IPost } from './index';
import fs from 'fs'
import path from 'path'
import matter from "gray-matter";
import { Box,Text } from "@chakra-ui/react";
import Image from "next/image"
import {marked} from 'marked'
 const Blog: FC<{ slug: string, content: string, metadata: IPost }> = ({slug,metadata,content}) => {
  console.log(metadata);
  
  return !metadata ? <p>Loading...</p> :  <Box mt="100px">
      <Text fontSize="2xl" fontWeight="bold" mb="8" textAlign="center" >{metadata.title}</Text>
      <Image width="1000px" height="400px" src={metadata.coverImage} />
      <div>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}} ></div>
      </div>
  </Box>
};


export async function getStaticProps(context:any) {
  const slug = context.params.slug
  const markdownWithMeta = fs.readFileSync (path.join('posts',slug+'.md'));
  const { data: metadata, content} = matter(markdownWithMeta)
  return { props: {slug , content, metadata }}
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename
    }
  }))  
  return { paths, fallback: true };
}

export default Blog;
