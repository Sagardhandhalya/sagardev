import React, { ContextType, FC } from "react";
import { IPost } from "./index";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { marked } from "marked";
import NotionService from "../services/notion.service";
const Blog: FC<{ slug: string; content: string; metadata: IPost }> = ({
  slug,
  metadata,
  content,
}) => {
  return !metadata ? (
    <p>Loading...</p>
  ) : (
    <Box mt="100px">
      <Text fontSize="2xl" fontWeight="bold" mb="8" textAlign="center">
        {metadata.title}
      </Text>
      <Image
        width="1000px"
        height="400px"
        src={metadata.coverImage}
        alt="logo"
      />
      <div>
        <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
      </div>
    </Box>
  );
};

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  try {
    const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"));
    const { data: metadata, content } = matter(markdownWithMeta);
    return { props: { slug, content, metadata } };
  } catch (e: any) {
    if (e?.code === "ENOENT") {
      const notionService = new NotionService();
      const p = await notionService.getSingleBlogPost(context.params?.slug);

      return {
        props: {
          content: p?.markdown,
          metadata: p?.post,
          slug: p?.post?.slug,
        },
      };
    }
  }
}

export async function getStaticPaths() {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();
  const pathsNotions = posts.map((post) => {
    return `/blog/${post.slug}`;
  });

  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => {
    let finalName = filename.replace(".md", "");
    return {
      params: {
        slug: finalName,
      },
    };
  });
  return { paths: [...paths, ...pathsNotions], fallback: true };
}

export default Blog;
