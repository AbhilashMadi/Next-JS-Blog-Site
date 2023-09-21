import { FC } from "react";
import { notFound } from "next/navigation";

import { DUMMY_POSTS, DUMMY_CATEGORIES } from "@temp/collections";
import { Post, Category } from "@temp/temp.types";
import Container from "@common/Container";
import PostsList from "@post/PostsList";
import { POST_LAYOUT } from "@lib/enums";

export const generateStaticParams = async () => {
  return DUMMY_CATEGORIES.map((category: Category) => {
    return {
      category: category.slug,
    };
  });
};

interface ICategoryPage {
  params: { category: string }
}

const Category: FC<ICategoryPage> = (props) => {
  const { params } = props;
  const { category } = params;

  const posts: Post[] = DUMMY_POSTS.filter((post: Post) => {
    return post.category.title.toLowerCase() === category;
  })

  if (!posts.length) {
    notFound();
  }

  return (
    <Container>
      <PostsList posts={posts} layout={POST_LAYOUT.VERTICAL} autoCols/>
    </Container>
  )
}

export default Category;