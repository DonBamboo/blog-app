import Link from "next/link";
import Button from "./button";

export default function Header() {
  return (
    <header className=" ba-my-9 ba-flex ba-items-center ba-justify-between ba-font-inter ba-font-semibold ba-text-white">
      <Link href={"/"} className="">
        <span>DonPablitos</span>
      </Link>
      <nav className="ba-flex ba-items-center ba-font-inter ba-font-semibold ba-text-sm">
        <Link href={`/blog`}>
          <span className="ba-mx-8">Blog</span>
        </Link>
        <Link href={`/projects`}>
          <span className="ba-mx-8">Projects</span>
        </Link>
        <Link href={`/about`}>
          <span className="ba-mx-8">About</span>
        </Link>
        <Link href={`/newsletter`}>
          <span className="ba-mx-8">Newsletter</span>
        </Link>
      </nav>
    </header>
  );
}
