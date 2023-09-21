import { FC } from "react";
import { DUMMY_POSTS, DUMMY_CATEGORIES } from "@temp/collections";
import { Post,Category } from "@temp/temp.types";

export const generateStaticParams = async () => {
  return DUMMY_CATEGORIES.map((category:Category) => {
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

  return (
    <div>{JSON.stringify((DUMMY_POSTS.filter((post: Post) => post.category.title.toLowerCase() === category)))}</div>
  )
}

export default Category;