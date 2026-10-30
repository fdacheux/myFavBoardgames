"use client";

import { useState } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";

function Navbar() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-b-citrus shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="nav-brand flex items-center gap-3 group">
              <div className="w-12 h-12 bg-green-citrus rounded-full flex items-center justify-center shadow-citrus group-hover:rotate-12 transition-transform duration-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <!-- Left Dice Eye --> */}
                  <rect
                    x="20"
                    y="30"
                    width="22"
                    height="22"
                    rx="4"
                    fill="white"
                  ></rect>
                  <circle cx="31" cy="41" r="3" fill="#1F2937"></circle>
                  {/* <!-- Right Dice Eye --> */}
                  <rect
                    x="58"
                    y="30"
                    width="22"
                    height="22"
                    rx="4"
                    fill="white"
                  ></rect>
                  <circle cx="64" cy="36" r="3" fill="#1F2937"></circle>
                  <circle cx="74" cy="46" r="3" fill="#1F2937"></circle>
                  {/* <!-- Kawaii Smile --> */}
                  <path
                    d="M 35 65 Q 50 80 65 65"
                    stroke="#1F2937"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  ></path>
                  {/* <!-- Blush --> */}
                  <ellipse
                    cx="22"
                    cy="55"
                    rx="6"
                    ry="4"
                    fill="#FFB6C1"
                    opacity="0.7"
                  ></ellipse>
                  <ellipse
                    cx="78"
                    cy="55"
                    rx="6"
                    ry="4"
                    fill="#FFB6C1"
                    opacity="0.7"
                  ></ellipse>
                </svg>
              </div>
              <span className="text-xl font-bold hidden sm:block tracking-tight">
                My Fav
                <br /> <span className="text-gradient">Boardgames</span>
              </span>
            </a>
            <div className="flex items-center gap-2 sm:gap-6 text-lg font-bold">
              <Link
                href="/blog"
                className="hover:text-green-600 transition-colors px-3 py-2 rounded-full hover:bg-green-citrus/20"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="hover:text-green-600 transition-colors px-3 py-2 rounded-full hover:bg-green-citrus/20"
              >
                About
              </Link>
              <button
                className="flex items-center justify-center w-12 h-12 bg-citrus rounded-full hover:bg-green-citrus transition-colors shadow-md ml-2"
                aria-label="Login or Sign Up"
                onClick={() => setIsLoginModalOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </>
  );
}

export default Navbar;
