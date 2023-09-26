import { FC } from "react";
import Image from "next/image";

import { Post } from "@temp/temp.types";
import PostContent from "@post/PostContent";


interface IPostHero {
  post: Post;
}
const PostHero: FC<IPostHero> = (props) => {
  const { post } = props;

  return (
    <>
      <PostContent post={post} isPostPage />
      <Image src={post.image}
        width={1280}
        height={500}
        alt={post.title}
        className="rounded-md object-cover object-center mt-6 h-[300px] md:h-[500px]"
      />
    </>
  )
}

export default PostHero