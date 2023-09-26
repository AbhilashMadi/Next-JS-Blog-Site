import { FC } from "react";

interface IPostBody {
  body: string;
}

const PostBody: FC<IPostBody> = (props) => {
  const { body } = props;

  return (
    <article>
      {body}
    </article>
  )
}

export default PostBody;