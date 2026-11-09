import React from "react";

function SearchBar() {
  return (
    <section className="bg-white p-4 sm:p-6 rounded-[2.5rem] shadow-soft mb-12 border-2 border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative w-full md:w-1/2 lg:w-3/5">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <i className="ph-bold ph-magnifying-glass text-gray-400 text-xl"></i>
        </div>
        <input
          type="text"
          placeholder="Search for a game (e.g. Catan, Root...)"
          className="w-full pl-12 pr-6 py-4 bg-gray-50 border-2 border-transparent focus:border-green-citrus focus:bg-white rounded-full text-lg font-semibold outline-none transition-all placeholder-gray-400 shadow-inner"
        />
      </div>
      <div className="flex w-full md:w-auto gap-3">
        <div className="relative grow md:grow-0">
          <select className="appearance-none w-full bg-gray-50 border-2 border-transparent hover:border-citrus focus:border-citrus rounded-full py-4 pl-6 pr-12 text-lg font-bold outline-none cursor-pointer transition-all shadow-sm">
            <option>Trending First</option>
            <option>Most Liked</option>
            <option>Newest</option>
            <option>A-Z</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-green-citrus hover:bg-citrus  font-bold py-4 px-6 rounded-full shadow-citrus transition-all transform hover:-translate-y-1" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </svg>
          <span className="hidden md:inline">Filters</span>
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
