import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);
  const accesskey = "Y0qFXzOGmc6K1RvQOcKx0X1eZex5Zd-P4iEBe9lmwaE";

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchData(
      `/search/photos?page=1&per_page=50&query=${search}&client_id=${accesskey}`
    );
    setSearch("");
    setSearchImage(search);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `/search/photos?page=1&per_page=50&query=${search}&client_id=${accesskey}`
      );
      setSearch("");
      setSearchImage(search);
    }
  };

  return (
    <div className="bg-gray-900 flex flex-col items-center py-8">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold">
          Find Images
        </h1>
        <div className="mt-3 w-[80%] sm:w-full flex text-center mx-auto ">
          <input
            value={search}
            onChange={handleInputChange}
            type="text"
            placeholder="Search anything..."
            className="w-full outline-none px-2"
            onKeyDown={handleEnterSearch}
          />
          <button
            disabled={!search}
            onClick={handleButtonSearch}
            className="px-6 py-2 bg-blue-500 text-white rounded-tr-sm rounded-br-sm disabled:bg-gray-400"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
