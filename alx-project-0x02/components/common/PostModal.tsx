import React, { useState } from "react";
import { type PostData } from "@/interfaces";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (data: PostData) => void;
}

const PostModal: React.FC<PostModalProps> = ({
  isOpen,
  onClose,
  onAddPost,
}) => {
  const [formData, setFormData] = useState<PostData>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPost(formData);
    setFormData({ title: "", content: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            placeholder="Post title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <textarea
            name="content"
            placeholder="Post content"
            value={formData.content}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
