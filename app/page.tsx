import Container from "@common/Container";
import PostCard from "@post/PostCard";
import PostsList from "@post/PostsList";

import { DUMMY_POSTS } from "@temp/collections";
import { POST_LAYOUT } from "@lib/enums";

const Home = () => {
  return (
    <Container className="space-y-10">
      <PostCard post={DUMMY_POSTS[0]} />
      <PostsList posts={DUMMY_POSTS.slice(1)} layout={POST_LAYOUT.VERTICAL} />
    </Container>
  )
}

export default Home;
