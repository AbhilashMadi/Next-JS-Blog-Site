import { FC } from "react";

interface IPostBody {
  body: string;
}

const PostBody: FC<IPostBody> = (props) => {
  const { body } = props;

  return (
    <article>
      <p className="text-sm text-justify">{body}</p>
    </article>
  )
}

export default PostBody;