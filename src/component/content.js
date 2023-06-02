import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Rating from "./rating";
import show from "../show.jpg";

function Content() {
  const [movies, setMovies] = useState();
  const navigate = useNavigate();
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const compRef = useRef(null);
  const isScroll = () => scrollToDiv(compRef);
  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => console.log("err", error));
  }, []);
  return (
    <>
      <Header />
      <div className="text-[#303030] text-center">
        <p className="text-xs sm:text-sm">New collection</p>
        <p className="font-bold text-4xl sm:text-7xl pb-4">
          THE MOST TRENDING MOVIE HERE
        </p>
        <button
          className="border-2 rounded border-[#303030] py-2 px-4 sm:px-8 mt-8 hover:bg-[#303030] hover:text-[#FFFFFF]"
          onClick={isScroll}
        >
          Shop now
        </button>
      </div>

      <div className="mx-auto mt-8" ref={compRef}>
        <p className="text-3xl font-bold text-center py-2 mt-2">Movies</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {movies?.map((data) => {
            return (
              <div className="py-6 bg-gray-100">
                <div className="flex flex-col justify-center items-center ">
                  <div className="overflow-hidden">
                    <img
                      src={data.show.image.medium}
                      alt={data.show.name}
                      className="filter"
                    />
                    <p className="text-lg font-bold text-center tex-left mr-2">
                      {data.show.name}
                    </p>{" "}
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Rating rating={data.show.rating.average} />
                </div>
                <div className="flex justify-center mt-2">
                  <button
                    className="w-[100px] rounded py-2 text-center border-[1px] border-[#000] hover:bg-[#000] hover:text-[#ffff]"
                    onClick={() => navigate("/movie", { state: data })}
                  >
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Content;
