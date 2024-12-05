"use client";
import React from "react";
import SearchIcon from "../assets/Search_icon";

function Search({ setFilters }) {
  const onSearchSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    const location = e.target.location.value.trim();

    setFilters({ keyword, location });
  };

  return (
    <div className="w-full flex justify-center">
      <form
        className="border-2 flex mt-3 max-sm:w-[90%] max-sm:mb-4 justify-center items-center w-2/3 shadow-md rounded-lg"
        onSubmit={onSearchSubmit}
      >
        <div className="p-2 flex items-center w-full">
          <SearchIcon />
          <input
            type="text"
            name="keyword"
            placeholder="Search by Job title, position, keyword..."
            className="p-2 flex-1 w-full border-none outline-none"
          />
        </div>
        <div className="border-l-2 flex justify-between p-2 w-full">
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="p-2 rounded w-full border-none outline-none"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white p-2 sm:w-1/2 lg:w-1/3 max-sm:text-[14px] max-sm:w-36 max-sm:p-0"
          >
            Find Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
