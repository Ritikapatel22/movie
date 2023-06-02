import { ArrowLeftIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./header";

function Movie() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const text = location.state.show.summary;

  return (
    <>
      <Header />
      <div
        className="p-4 flex flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <ArrowLeftIcon className="w-6 h-5 mr-2" />
        <span className="font-bold text-lg mt-0">Back</span>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2 flex justify-center items-center">
            <img
              src={location.state.show.image.original}
              alt={location.state.show.name}
              className="w-[43%]"
            />
          </div>
          <div className="text-left">
            <p className="text-3xl font-bold">
              <span className="text-2xl font-normal">Movie : </span>
              {location.state.show.name}
            </p>
            <div className="mt-4">
              <p className="mb-2">
                <span className="text-sm font-bold">Developed by : </span>
                {location.state.show.network?.name}
              </p>
              <p className="mb-2">
                <span className="text-sm font-bold">Genres : </span>
                {location.state.show.genres[0]}
              </p>
              <label className="text-sm font-bold">Details : </label>
              <p dangerouslySetInnerHTML={{ __html: text }}></p>
              <p className="mb-2">
                <span className="text-sm font-bold">
                  Language : {location.state.show.language}
                </span>
              </p>
              <p className="mb-2">
                <span className="text-sm font-bold">Show Type : </span>
                {location.state.show.type}
              </p>
              <p className="mb-2">
                <span className="text-sm font-bold">Schedule : </span>
                {location.state.show.schedule.days
                  ? location.state.show.schedule.days[0]
                  : ""}{" "}
                {location.state.show.schedule.time}
              </p>
            </div>
            <div className="mt-2">
              <button
                className="px-4 rounded py-2 text-center border-[1px] border-[#000] hover:bg-[#000] hover:text-[#ffff]"
                onClick={handleOpenModal}
              >
                Book ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Book Ticket for : {location.state.show.name}
            </h2>
            <div>
              <div className="mb-4">
                <label className="mr-2 font-semibold">Movie name :</label>
                <input
                  type="text"
                  className="bg-[#D9D9D9] rounded py-1 px-2"
                  value={location.state.show.name}
                  disabled
                />
              </div>
              <div className="mb-4">
                <label className="mr-2 font-semibold">Show Type :</label>
                <input
                  type="text"
                  className="bg-[#D9D9D9] rounded py-1 px-2"
                  value={location.state.show.type}
                  disabled
                />
              </div>
              <div className="mb-4">
                <p className="font-bold py-2">Schedule Details : </p>
                <label className="mr-2 font-semibold">Day :</label>
                <input
                  type="text"
                  className="bg-[#D9D9D9] rounded py-1 px-2 mr-2"
                  value={location.state.show?.schedule?.days[0]}
                  disabled
                />
                <label className="mr-2 font-semibold">Time :</label>
                <input
                  type="text"
                  className="bg-[#D9D9D9] rounded py-1 px-2"
                  value={location.state.show.schedule.time}
                  disabled
                />
              </div>
            </div>
            <button
              className="px-4 py-2 rounded text-white bg-red-500 hover:bg-red-600"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;
