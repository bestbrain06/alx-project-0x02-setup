import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-wide">
          <Link href="/">MyApp</Link>
        </h1>

        <nav className="flex gap-6 text-lg font-medium">
          <Link
            href="/home"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/posts"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Posts
          </Link>
          <Link
            href="/users"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Users
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
