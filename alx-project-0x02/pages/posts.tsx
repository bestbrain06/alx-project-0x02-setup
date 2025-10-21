import PostCard from "@/components/common/PostCard";
import { PostsPageProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto mt-10 grid gap-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts = data.slice(0, 10);

  return {
    props: {
      posts,
    },
  };
}
