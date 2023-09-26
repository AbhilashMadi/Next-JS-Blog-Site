import { FC } from "react";
import { notFound } from "next/navigation";

import { DUMMY_POSTS } from "@temp/collections";
import { Post } from "@temp/temp.types";
import Container from "@common/Container";
import PostHero from "@post/PostHero";

const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post:Post) => {
    return {
      slug: post.slug,
    }
  })
}

interface IPostPage {
  params: { slug: string };
}

const PostPage: FC<IPostPage> = (props) => {
  const { params: { slug } } = props;
  const post = DUMMY_POSTS.find((post: Post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Container>
      <PostHero post={post}/>
    </Container>
  )
}

export default PostPage;