import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from './../components/CartTotal';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

const [method, setMethod] = useState('cod');
 const navigate = useNavigate();

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/*----Left side of place order page---- */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
               <div className='text-xl sm:text-2xl my-3'>
                   <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
               </div>
               <div className='flex gap-3'>
                <input className='border border-gray-500 px-3.5 py-1.5 w-full' placeholder='First Name' type="text" />
                <input className='border border-gray-500 px-3.5 py-1.5 w-full' placeholder='Last Name' type="text" />
               </div>
               <input className='border border-gray-500 px-3.5 py-1.5 w-full' placeholder='Email address' type="email" />
               <input className='border border-gray-500 px-3.5 py-1.5 w-full' placeholder='Street' type="text" />
               <div className='flex gap-3'>
                <input className='border border-gray-500 px-3.5 py-1.5 w-full' placeholder='City' type="text" />
                <input className='border border-gray-500 px-3.5 py-1.5 w-full' placeholder='Division' type="text" />
               </div>
               <div className='flex gap-3'>
                <input className='border border-gray-500 px-3.5 py-1.5 w-full' placeholder='Zip-Code' type="number" />
                <input className='border border-gray-500 px-3.5 py-1.5 w-full' placeholder='Country' type="text" />
               </div>
               <input className='border border-gray-500 px-3.5 py-1.5 w-full' placeholder='Phone' type="number" />
            </div>

    {/*----Right Side of cart page---- */}

    <div className='mt-8'>
            <div className='mt-8 min-w-80'>
                <CartTotal/>
            </div>
            <div className='mt-12'>
                <Title text1={'PAYMENT'} text2={('METHOD')}/>

                {/* ----Payment---- */}
                <div className='flex gap-3 flex-col lg:flex-row'>
                    <div  onClick={()=> setMethod('visa')}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'visa' ? 'bg-green-400' : ''}`}></p>
                    <img className='h-5 mx-4' src={assets.visa_icon} alt="" />
                    </div>
                    <div onClick={()=> setMethod('bkash')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'bkash' ? 'bg-green-400' : ''}`}></p>
                    <img  className='h-5 mx-4 ' src={assets.bkash_icon} alt="" />
                    </div>
                    <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                     <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                    </div>
                </div>

            <div className='w-full text-end mt-8'>
              <button onClick={()=>navigate('/orders')} className='bg-black text-white px-6 py-4 rounded '>
                PLACE ORDER
              </button>
            </div>

            </div>
    </div>

        </div>
    );
};

export default PlaceOrder;