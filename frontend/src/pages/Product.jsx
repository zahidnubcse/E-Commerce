import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { products } from '../assets/assets';

const Product = () => {

    const{ProductId} = useParams();
    const {Producs} = useContext (ShopContext);
    const [productData,setProductData] = useState(false);
    const [image, setImage] =useState('')
    
    const fetchProductData = async () => {
        products.map((item) => {
          if (item._id == ProductId) {
            setProductData(item);
            setImage(item.image[0])
            return;  
          }
          return null; 
        });
      };
      

    useEffect (()=>{
         fetchProductData();
    },[ProductId, products])
    
    return productData? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/*product data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
                pr
            </div>
             {/*product images */}
             <div className='flex-1 flex-col-reverse gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                
              </div>
             </div>
        </div>
    ): <div  className='opacity-0'>

    </div>
};

export default Product;