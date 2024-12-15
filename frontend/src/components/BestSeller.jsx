import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

const {products} = useContext (ShopContext);
const [bestSeller,setBestseller] = useState([0]);

useEffect (()=>{
    const bestProduct = products.filter((item)=>(item.bestseller));
    setBestseller(bestProduct.slice(0,5))
},[])

    return (
        <div className='my-10 '>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLERS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum saepe ad officiis maxime ex quas, omnis sunt voluptas rerum aliquid libero nam temporibus laborum dolorem dolorum doloribus est ab qui!
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
 

           </div>

        </div>
    );
};

export default BestSeller;