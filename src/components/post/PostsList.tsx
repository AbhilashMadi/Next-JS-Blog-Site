import { FC } from "react";

import { Post } from "@temp/temp.types";
import PostCard from "./PostCard";

enum LayoutTypes {
  VIRTICAL = "virtical",
  HORIZONTAL = "horizontal",
}

interface IPostsList {
  posts: Post[];
  layout?: LayoutTypes.HORIZONTAL
  | LayoutTypes.VIRTICAL;
}

const PostsList: FC<IPostsList> = (props) => {
  const { posts, layout = LayoutTypes.HORIZONTAL } = props;

  return (
    <div className="grid grid-cols-2 gap-10">
      {posts.map((post: Post) => {
        return <PostCard post={post} key={post.id} />
      })}
    </div>
  )
}

export default PostsList;