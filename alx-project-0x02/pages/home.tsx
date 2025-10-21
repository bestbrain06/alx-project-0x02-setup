import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";
import { type PostData } from "@/interfaces";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";

const HomePage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (data: PostData) => {
    setPosts([...posts, data]);
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Posts</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Post
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />
      </div>
    </>
  );
};

export default HomePage;
