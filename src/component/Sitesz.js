import React from "react";
import data from "./dataSites2";
import imag from "../assets/prog1.jpg";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
const Sites = ({isDarkMode}) => {
  const navigate = useNavigate();

  function handleclick(query) {
    navigate(`/Content/${query}`);
  }
  function clickHandler() {
    navigate("/Contest");
  }
  const animationVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 4,
        stiffness: 100,
        delay: 1, // Adjust the delay as needed
      },
    },
  };
  return (
    <div className=" ">
      <div className="  container w-[75%] mx-auto">
        <div className=" container mx-auto flex justify-center items-center my-5 mt-10">
          <motion.h1
            className="text-2xl md:text-3xl font-bold lg:text-4xl"
            variants={animationVariants}
            initial="hidden"
            animate="visible"
          >
            Coding Contest Sites
          </motion.h1>
        </div>

        {/* image an contetnts */}
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-center items-center mt-[30px] gap-[60px]">
          <div className=" hello">
            <img className="rounded-2xl" src={imag} alt="imag" />
          </div>
          <div className=" flex flex-col w-[100%]  lg:w-[50%]   md:w-[60%]">
            <p className=" text-xl   text-blue-600 lg:text-2xl ">
              Discover a Variety of Top Coding Contest Platforms and Dive into
              <span className=" font-semibold opacity-60 text-green-500">
                {" "}
                Exciting Coding Challenges Worldwide with Ease!
              </span>
            </p>
            <button
              className=" button-51 mt-10 lg:w-[30%]  w-[50%]mx-auto"
              onClick={clickHandler}
            >
              {" "}
              All Contest
            </button>
          </div>
        </div>
        <div className="container mx-auto text-center my-10 ">
          <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-xl  font-bold   p-3 rounded-md">
            Supported Coding Sites on this Platforms
          </h1>
          <p>
            "Embark on a Journey of Code and Creativity! Explore a Diverse World
            of Top Coding Contest Platforms, Where Challenges Await Your Skills
            and Imagination. Join the Global Community of Coders and Dive into
            Exciting Puzzles, Competitive Coding, and Brain-Teasers. The
            Adventure Begins Here – Unleash Your Coding Passion!"
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto place-items-center mt-10  ">
          {data.map((card, index) => (
            <div key={index} className="border-2 rounded-lg">
              <div className="card">
                <div className="content">
                  <img
                    className="rounded-full lg:h-[150px] lg:w-[150px] md:h-[100px] md:w-[100px] h-[70px] w-[70px] mx-auto"
                    src={card.logoUrl}
                    alt="logo"
                  />
                  <p className={`heading ${isDarkMode ? 'text-white' : 'text-black'}`}>{card.name}</p>
                  <p className={`para ${isDarkMode ? 'text-white opacity-60' : 'text-black'}`}>{card.description}</p>

                  <button
                    className="btn"
                    onClick={() => handleclick(card.query)}
                  >
                    Contests
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sites;
