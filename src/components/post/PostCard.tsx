import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Post } from "@temp/temp.types";
import PostContent from "@post/PostContent";
import { POST_LAYOUT } from "@lib/enums";

interface IPostCard {
  post: Post;
  layout?: POST_LAYOUT.HORIZONTAL | POST_LAYOUT.VERTICAL;
  reverse?: boolean;
}

const PostCard: FC<IPostCard> = (props) => {
  const { post, layout = "horizontal", reverse = false } = props;

  return (
    <section>
      <Link href={`/post/${post.slug}`}
        className={`cursor-pointer ${layout === POST_LAYOUT.HORIZONTAL
          ? "grid grid-cols-2 items-center gap-10"
          : "space-y-10"}`}>
        <Image
          src={post.image}
          width={600}
          height={300}
          alt="post"
          className={`w-full object-cover rounded-md 
          object-center max-h-[300px] hover:shadow-xl
          ${reverse && "order-last"}`} />
        <PostContent post={post} />
      </Link>
    </section>
  )
}

export default PostCard;