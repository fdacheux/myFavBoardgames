import React from "react";

function Header() {
  return (
    <header className="text-center mb-12">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
        Welcome to <br />
        <span className="inline-block bg-citrus px-4 rounded-3xl mt-2 rotate-1 shadow-soft">My Fav Boardgames</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto mt-6">
        Discover, rate, and discuss the absolute best tabletop experiences. Your
        next favorite game is just a roll away!
      </p>
    </header>
  );
}

export default Header;
