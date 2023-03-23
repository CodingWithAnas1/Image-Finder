import React from "react";

const Loader = ({ item }) => {
  return [...Array(item).keys()].map((item, key) => (
    <div key={key} className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-72"></div>
    </div>
  ));
};
export default Loader;
