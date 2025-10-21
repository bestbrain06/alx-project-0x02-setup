import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const AboutPage = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>

        <div className="flex flex-wrap gap-4">
          <Button title="Small Button" size="small" shape="rounded-sm" />
          <Button title="Medium Button" size="medium" shape="rounded-md" />
          <Button title="Large Button" size="large" shape="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
