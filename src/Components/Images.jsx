import React, { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Loader from "./Loader";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
      <h1 className="text-center my-4 underline text-2xl">
        Result for{" "}
        <span className="text-blue-700 ">{searchImage || "Cats"}</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-5xl mx-auto px-4">
        {isLoading ? (
          <Loader item={10} />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
};

export default Images;
