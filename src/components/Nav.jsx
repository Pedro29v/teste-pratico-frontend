import React from "react";

function Nav() {
  return (
    <nav className="w-[100%] bg-dark h-[3rem] text-primary flex items-center justify-center gap-4 mb-[5rem] ">
      <a href="/">ARTICLES</a>
      <a href="https://portfolio-mocha-omega-74.vercel.app/" target="_blank">
        PORTFOLIO
      </a>
      <a href="https://github.com/Pedro29v" target="_blank">
        GITHUB
      </a>
    </nav>
  );
}

export default Nav;
