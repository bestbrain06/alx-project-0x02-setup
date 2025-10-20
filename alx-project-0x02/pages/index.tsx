import Header from "@/components/layout/Header";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="h-screen grid place-content-center">
        <h1>WELCOME</h1>
      </div>
    </>
  );
};

export default Home;
