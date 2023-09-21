import { FC } from "react";

import { Post } from "@temp/temp.types";
import PostCard from "./PostCard";
import { POST_LAYOUT } from "@lib/enums";

interface IPostsList {
  posts: Post[];
  layout?: POST_LAYOUT.HORIZONTAL
  | POST_LAYOUT.VERTICAL;
  autoCols?: boolean;
}

const PostsList: FC<IPostsList> = (props) => {
  const { posts, layout = POST_LAYOUT.HORIZONTAL, autoCols = false } = props;

  return (
    <div className={`grid grid-col-1 md:grid-cols-2 gap-10 ${autoCols && "lg:grid-flow-col lg:auto-cols-fr"}`}>
      {posts.map((post: Post) => {
        return <PostCard post={post} key={post.id} layout={layout} />
      })}
    </div>
  )
}

export default PostsList;