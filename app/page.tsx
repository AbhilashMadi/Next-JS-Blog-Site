import Container from "@common/Container";
import PostCard from "@post/PostCard";
import PostsList from "@post/PostsList";

import { DUMMY_POSTS } from "@temp/collections";

const Home = () => {
  return (
    <Container>
      <PostCard post={DUMMY_POSTS[0]} />
      <PostsList posts={DUMMY_POSTS.slice(1)} />
    </Container>
  )
}

export default Home;
