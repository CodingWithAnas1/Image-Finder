import { createContext, useState } from "react";
import useAxios from "./Components/Hooks/useAxios";
import Images from "./Components/Images";
import Navbar from "./Components/Navbar";

export const ImageContext = createContext();
function App() {
  const accesskey = "Y0qFXzOGmc6K1RvQOcKx0X1eZex5Zd-P4iEBe9lmwaE";
  const [searchImage, setSearchImage] = useState("");

  const { response, isLoading, error, fetchData } = useAxios(
    `/search/photos?page=1&per_page=50&query=cats&client_id=${accesskey}`
  );
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    setSearchImage,
    searchImage,
  };

  return (
    <>
      <ImageContext.Provider value={value}>
        <Navbar />
        <Images />
      </ImageContext.Provider>
    </>
  );
}

export default App;
