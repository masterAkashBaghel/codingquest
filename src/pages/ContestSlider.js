import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContestSlider = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [contests, setContests] = useState([]);
  const API_URL = "https://kontests.net/api/v1/all";

  async function getData() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const codingContests = data.filter((contest) => contest.status === "CODING");
      setContests(codingContests);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" mt-5">
      <Slider {...sliderSettings}>
        {contests.map((contest, index) => (
         <div key={index} className={`contest-slide `}>
            <div className="mx-auto text-center">
              <h3 className={`font-bold text-xl m-2 `}>{contest.name}</h3>
              <p><span className=" font-semibold text-green-400">Start Time:</span> {new Date(contest.start_time).toLocaleString()}</p>
              <p><span className=" font-semibold  text-red-600">End Time:</span> {new Date(contest.end_time).toLocaleString()}</p>
              <p className=" font-bpld text-xl ">  {contest.site}</p>
             <div  className=" button-51 mt-3 xs:w-[25%] lg:w-[15%] md:w-[20%]  w-[35%] mx-auto">
             <a  href={contest.url} target="_blank" rel="noopener noreferrer">
                Contest Link 
              </a>
             </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ContestSlider;
