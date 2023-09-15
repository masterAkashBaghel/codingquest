import React from "react";
import hero2 from "../assets/hero2.jpg";
import hero1 from "../assets/hero1.jpg";
import ContestSlider from "../pages/ContestSlider";
import data from "./data";
import Footer from "./Footer";
import { useNavigate } from "react-router";
import { motion } from 'framer-motion';

const Home = ({ isDarkMode}) => {
  const navigate = useNavigate();
  function clickHandler()
  {
    navigate('/Contest')
  }



 
  return (
    <div>
      <div className=" container w-[75%] mx-auto">
      {/* hero section */}
      <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-center items-center mt-[30px] gap-10">
        {/* Image part */}
        <motion.div 
         animate={{ y: [0, -10, 0], opacity: [1, 0.8, 1] }}
         transition={{
           duration: 1.5,
           repeat: Infinity,
           repeatType: "reverse", // This creates the up and down effect
         }}
        
        className="hello rounded-xl order-2 lg:order-1">
  <img
    className="h-[350px] rounded-xl"
    src={isDarkMode ? hero1 : hero2}
    alt="hero2"
  />
</motion.div>


        <div className="container mx-auto text-center order-1 lg:order-2 ">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to ContestQuest
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Your Gateway to Programming Contests
          </p>
         <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            delay: 4,
            stiffness: 120,
            duration: 5,
          }}
         >
         <button className="button-52 mt-3" onClick={clickHandler}>Contests</button>
         </motion.div>
        </div>
      </div>

      {/* sliders */}

      <ContestSlider></ContestSlider>
      {/* heading os istes */}
      <div className="container mx-auto text-center my-5 ">
        <h1 className="lg:text-5xl md:text-2xl sm:text-xl text-2xl  font-bold">
          Explore Popular Coding Platforms
        </h1>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto place-items-center">
        {data.map((card, index) => (
          <div key={index} className={`border-2 rounded-lg `}>
            <div className="card">
              <div className="content">
                <img
                  className="rounded-full lg:h-[150px] lg:w-[150px] md:h-[100px] md:w-[100px] h-[70px] w-[70px] mx-auto"
                  src={card.logoUrl}
                  alt="logo"
                />
                <p className={`heading ${isDarkMode ? 'text-white' : 'text-black'}`}>{card.name}</p>
                <p className={`para ${isDarkMode ? 'text-white opacity-60' : 'text-black'}`}>{card.description}</p>

                <button className="btn">
                  <a href={card.url} target="_blank" rel="noopener noreferrer">
                    Practice
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <div>
        <Footer isDarkMode={isDarkMode}></Footer>
      </div>
    </div>
  );
};

export default Home;
