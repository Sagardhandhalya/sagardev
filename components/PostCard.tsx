import { Badge, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { title } from 'process';
import React, { FC } from 'react'
import useBoxShadow from '../hooks/useBoxShadow';
import { IPost } from '../pages/blog';

const PostCard: FC<{ post: IPost }> = ({ post }) => {
  const [shadow, hoverShadow] = useBoxShadow();

  return (
    <a href={`/blog/${post.slug}`}>
      <Box maxW="sm" borderRadius="lg" overflow="hidden" mx="5"
        my="5"
        boxShadow={shadow}
        _hover={{
          boxShadow: hoverShadow,
        }}>
        <Image width="500px" height="300px" src={post.coverImage} alt="project banner" />
        <Box p="6">
          <Box mt="1" fontWeight="semibold" as="h3" isTruncated fontSize="xl">
            {post.title}
          </Box>

          <Text fontSize="sm">{post.description}</Text>
          <Box display="flex" alignItems="baseline" mt="4">
            {post.tags.split(',').map((tag) => {
              return (
                <Badge
                  key={tag}
                  borderRadius="full"
                  px="2"
                  mx="2"
                  colorScheme="teal"
                >
                  {tag}
                </Badge>
              );
            })}
          </Box>
        </Box>
      </Box>
    </a>
  );
}

export default PostCard