import React from 'react';

const NewsLetterBox = () => {
    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat nesciunt, nostrum dignissimos at ex, maxime recusandae odio molestiae perspiciatis illo ad eos debitis consequuntur earum iusto, omnis iste esse?
            </p>
            <form className='w-ull sm:w-1/2 flex items-center gap-3 max-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your e-mail' required/>
                <button type='submit'className='bg-black text-white text-x5 px-10 py-4 rounded'>SUBSCRIBE</button>
            </form>
        </div>
    );
};

export default NewsLetterBox;