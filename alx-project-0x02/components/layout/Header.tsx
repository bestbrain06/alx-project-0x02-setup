import Link from "next/link";

const Header = () => {
  return (
    <div className="container-screen flex justify-between">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Header;
