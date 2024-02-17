import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import NotionService from "../../services/notion.service";
import { marked } from "marked";
import { Text, Image, useColorMode } from "@chakra-ui/react";
const Post = ({
  markdown,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name={"description"}
          title={"description"}
          content={post.description}
        />
        <meta name={"og:title"} title={"og:title"} content={post.title} />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={post.description}
        />
        <meta name={"og:image"} title={"og:image"} content={post.coverImage} />
      </Head>

      <div className="min-h-screen">
        <Image
          width="100%"
          height={400}
          src={post.coverImage}
          alt="logo"
          className="my-8"
        />
        <main className="max-w-5xl mx-auto relative">
          <div className="flex items-center justify-center">
            <article>
              <div
                className={`prose sm:prose-xl ${
                  colorMode === "light" ? "" : "prose-invert"
                }`}
                dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
              ></div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();
  console.log(context.params?.slug);

  // @ts-ignore
  const p = await notionService.getSingleBlogPost(context.params?.slug);
  console.log(p, "---------------");

  if (!p) {
    throw "";
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
    },
  };
};

export async function getStaticPaths() {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();

  // Because we are generating static paths, you will have to redeploy your site whenever
  // you make a change in Notion.
  const paths = posts.map((post) => {
    return `/post/${post.slug}`;
  });

  return {
    paths,
    fallback: false,
  };
}

export default Post;
