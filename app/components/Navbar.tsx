"use client";

import { useState } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <nav>
        <a href="/" className="nav-brand">
          My Fav Boardgames
        </a>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <button
          aria-label="Login or Sign Up"
          onClick={() => setIsLoginModalOpen(true)}
        >
          Login or Sign Up
        </button>
      </nav>
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </>
  );
}

export default Navbar;
