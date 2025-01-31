import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Product = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/6 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productimg"
          />

          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
                Sale
                <p />
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              {/* <p className="line-through font-base text-gray-900">${details.price}</p> */}
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-2 text-base">
            <div className="flex">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="flex gap-3">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button className="border h-5 font-normal text-lg flex items-center
                justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                duration-300 active:bg-black">-</button>
                <span>1</span>
                <button className="border h-5 font-normal text-lg flex items-center
                justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer
                duration-300 active:bg-black">+</button>
              </div>
            </div>
               <button className="bg-black text-white py-3 px-3 active:bg-gray-800">add to cart</button>
          </div>
          <p className="text-base">
            <span className="font-medium capitalize">Category: {details.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
