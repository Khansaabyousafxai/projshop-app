import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
 const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    "https://cdn.dribbble.com/userupload/6630453/file/original-e8c864a9462d4120ed1c07b279cbd969.png?resize=750x500&vertical=center",
    "https://img.freepik.com/premium-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg",
    "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg",
    "https://cdn.vectorstock.com/i/500p/09/80/online-shopping-banner-vector-17230980.jpg",
  ];
  const prevSlide=()=>{
    setCurrentSlide(currentSlide===0?3:(prev)=>prev-1)

  }
  const nextSlide=()=>{
    setCurrentSlide(currentSlide===3?0:(prev)=>prev+1)

  }
  console.log(currentSlide)

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
        style={{transform: `translateX(-${currentSlide*100}vw)`}}
         className="w-[400vw] h-full flex transition-transform duration-1000">
          <img
           className="w-screen h-full object-cover"
            src={data[0]}
            alt="first"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="first"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="first"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="first"
          />
        </div>
        <div className="absolute w-fit right-0 left-0 mx-auto flex gap-8 bottom-44">
          <div onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300"
          >
            <GoArrowLeft />
          </div>

          <div onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300"
          >
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
