import React from "react";

const Image = ({ data }) => {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className="h-72 w-full object-cover rounded-lg shadow-lg shadow-gray-600 hover:scale-105 transition-all"
      />
    </a>
  );
};

export default Image;
