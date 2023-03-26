import React from "react";

function Nav() {
  return (
    <nav className="w-[100%] bg-dark h-[4rem] text-primary flex items-center justify-center gap-6 mb-[5rem] ">
      <a href="/" className="hover:underline">
        ARTICLES
      </a>
      <a
        href="https://portfolio-mocha-omega-74.vercel.app/"
        className="hover:underline"
        target="_blank"
      >
        PORTFOLIO
      </a>
      <a
        href="https://github.com/Pedro29v"
        className="hover:underline"
        target="_blank"
      >
        GITHUB
      </a>
    </nav>
  );
}

export default Nav;
