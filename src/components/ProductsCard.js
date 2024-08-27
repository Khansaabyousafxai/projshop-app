import React from "react";
import { BiArrowToRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const _id = product.title;
  const idstring = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idstring(_id);
  console.log(rootId);
  const HandleDetails = () => {
    navigate(`/product/${rootId}`,
      {
        state: {
          item: product,
        },
      }
    );
  };
  return (
    <div className="group">
      <div
        onClick={HandleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productimg"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div className="font-titleFont text-base font-bold">
            <h2>{product.title.substring(0, 15)}</h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="font-semibold ">${product.price}</p>
            </div>
            <p
              className="absolute  z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center
      gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform
      cursor-pointer duration-500"
            >
              add to cart{" "}
              <span>
                <BiArrowToRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div>
          {product.isNew && (
            <p className="bg-black text-white">
              Sale
              
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
