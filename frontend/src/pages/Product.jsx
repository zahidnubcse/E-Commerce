import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets, products } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

    const{productId} = useParams();
    const {Products, currency,addToCart} = useContext (ShopContext);
    const [productData,setProductData] = useState(false);
    const [image, setImage] =useState('')
    const [size, setsize] = useState('')
    
    const fetchProductData = async () => {


        products.map((item) => {
          if (item._id === productId) {
            setProductData(item)
            setImage(item.image[0])
            console.log(item)
            return null;
          } 
        })
      }
      

    useEffect (()=>{
         fetchProductData();
    },[productId])
    
    return productData ? (
      <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*---------- Product Data --------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>


        {/*-------- Product Images--------- */}
        <div className='flex-1 flex sm:gap-4'>
          <div className='flex flex-col gap-3 sm:w-[18%] w-[30%] overflow-y-auto'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-full h-auto sm:mb-3 flex-shrink-0 cursor-pointer border border-gray-300 hover:border-blue-400 transition-all duration-200 rounded'
                alt=''
              />
            ))}
          </div>
    
          {/* ------------Right Main Image Section-------------- */}
          <div className='w-full sm:w-[80%]'>
            <img
              className='w-full h-auto'
              src={image}
              alt=''
            />
          </div>
        </div>
        {/*----------------product info------------------- */}

        <div className='flex-1'>
           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
           <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>{122}</p>
           </div>
           <p className='mt-5 text-3xl font-medium '>{currency} {productData.price}</p>
           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
           <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500':''}`} key={index}>{item}</button>
                ))}
              </div>
           </div>
           <button onClick={()=>addToCart(productData._id,size)} className='py-3 px-8 bg-black text-white rounded text-sm active:bg-gray-700 '>ADD TO CART</button>
           <hr className='mt-8 sm:w-4/5' />
           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
               <p>100% Original Product</p>
               <p>Cash On Delivery Is Avilable On This Product</p>
               <p>Easy Return and Exchange Policy With in 7 Days</p>
           </div>
           
        </div>
      </div>

      {/* ------Description----- */}

     <div className='justify-between mt-20'>
      <div className='flex'>
        <b className='border py-3 px-5 text-sm'>Description</b>
        <p className=' border py-3 px-5 text-sm'>Reviews(122)</p>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ducimus, suscipit laboriosam excepturi minima sit corporis iste placeat minus asperiores iusto iure incidunt accusantium consectetur, dolorem nihil reiciendis perspiciatis inventore!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste laborum sed in id, reprehenderit ducimus laudantium cumque et. Corrupti doloremque asperiores provident. Atque nam amet omnis eum hic fugiat?</p>
           </div>
     </div>
  {/*Display Related Product*/}
  <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
     
    ): <div  className='opacity-0'></div>
};

export default Product;