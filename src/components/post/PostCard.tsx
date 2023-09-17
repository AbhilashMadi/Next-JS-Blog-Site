import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Post } from "@temp/temp.types";
import PostContent from "@post/PostContent";

interface IPostCard {
  post: Post;
}

const PostCard: FC<IPostCard> = (props) => {
  const { post } = props;

  return (
    <section>
      <Link href={`/post/${post.slug}`}
        className="cursor-pointer 
        grid grid-cols-2 gap-10 items-center">
        <Image
          src={post.image}
          width={600}
          height={300}
          alt="post"
          className="w-full object-cover rounded-md object-center max-h-[300px] hover:shadow-xl" />
        <PostContent post={post} />
      </Link>
    </section>
  )
}

export default PostCard;