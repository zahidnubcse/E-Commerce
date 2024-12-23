import React, { useContext } from "react";
import Product from "./Product";
import { ShopContext } from "../Context/ShopContext";
import Title from "../components/Title";
import { products } from "../assets/assets";

const Orders = () => {
  const { Producs, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDER"} />
      </div>

      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
          key={index}
          className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center gap-4"
        >
          {/* Product Section (Left) */}
          <div className="flex items-start gap-6 text-sm md:w-1/3">
            <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
            <div>
              <p className="sm:text-base font-medium">{item.name}</p>
              <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                <p className="text-lg">
                  {currency} {item.price}
                </p>
                <p>Quantity: 1</p>
                <p>Size: M</p>
              </div>
              <p className="mt-2">
                Date: <span className="text-gray-400">21, Dec, 2024</span>
              </p>
            </div>
          </div>
        
          {/* Ready to Ship Section (Middle) */}
          <div className="flex justify-center items-center md:w-1/3">
            <div className="flex items-center gap-2">
              <p className="w-2 h-2 rounded-full bg-green-500"></p>
              <p className="text-sm md:text-base">Ready to Ship</p>
            </div>
          </div>
        
          {/* Track Order Section (Right) */}
          <div className="flex justify-end md:w-1/3">
            <button className="border px-4 py-2 text-sm font-medium rounded-sm">
              Track Order
            </button>
          </div>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Orders;
