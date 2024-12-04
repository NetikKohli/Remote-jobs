import React from "react";
import SearchIcon from '../assets/Search_icon'
function Search() {
  return (
    <div className="w-full flex justify-center">
      <div className="border-2 flex mt-3 justify-center item-center w-2/3 shadow-md">
        <div className="p-2 flex items-center w-full">
        <SearchIcon/>
          <input type="text" placeholder="Search by Job title, position, keyword..." className="p-2 rounded flex-1 w-full" />
        </div>
        <div className="border-l-2 flex justify-between p-2 w-full">
          <input type="text" placeholder="Location" className="p-2 rounded w-full" /> 
          <button className="bg-blue-700 text-white px-2 py-2 sm:w-1/2 lg:w-1/3">
            Find Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
