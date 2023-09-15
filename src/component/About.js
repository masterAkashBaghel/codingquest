import React from "react";
import imgLight from "../assets/about-light.jpg";
import imgDark from "../assets/about-dark.jpg";
import Footer from "./Footer";
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  const clickHandler = () => {
    window.location.href = 'https://github.com/masterAkashBaghel';
  };

  const aboutImage = isDarkMode ? imgDark : imgLight;

  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 1, type: 'spring' }}
    >
      <div className={`fiction-section w-[95%] mx-auto rounded-md flex flex-col lg:flex-row about-section lg:w-[75%] ${isDarkMode ? 'bg-black' : 'bg-white'} mt-8`}>
        <div className="w-full lg:w-[50%] p-4">
          <img src={aboutImage} alt="about" className="w-full h-auto rounded-md" />
        </div>

        <div className={`w-full lg:w-[50%] flex flex-col justify-center p-4 rounded-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h1 className={`font-bold text-2xl text-center mb-2 ${isDarkMode ? 'text-green-300' : 'text-green-400'}`}>ABOUT</h1>
          <div className={`h-[2px] w-[50%] bg-blue-500 mx-auto my-2 ${isDarkMode ? 'bg-white' : 'bg-blue-500'}`}></div>

          <p className={`font-semibold text-opacity-60 text-center mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Welcome to our Coding Quest Web App! This application is built using
            React.js and serves as your gateway to the exciting world of coding contests.
          </p>

          <p className={`font-semibold text-opacity-60 text-center mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            With Coding Quest, you can explore a wide range of coding challenges and competitions
            from platforms like CodeForces, HackerRank, AtCoder, and many more. Whether you're a
            beginner or an experienced coder, our app has something for everyone.
          </p>

          <p className={`font-semibold text-opacity-60 text-center mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Stay updated on upcoming contests, set reminders for your favorites, and
            track your progress. Embark on coding adventures and enhance your skills with us!
          </p>

          <div className="flex justify-center">
            <button onClick={clickHandler} className={`px-4 py-2 my-3 ${isDarkMode ? 'bg-green-300' : 'bg-green-500'} text-white rounded-md hover:bg-green-600`}>
              Know More
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-0">
        <Footer isDarkMode={isDarkMode} />
      </div>
    </motion.div>
  );
};

export default About;
