import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from './../components/NewsLetterBox';

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                     <Title text1={'ABOUT'} text2={'US'}/>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
              <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur perferendis quas unde, ex nostrum officia hic error quam ducimus exercitationem repellendus, blanditiis nisi delectus et, ut sapiente asperiores harum.</p>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam optio nobis dolores quibusdam? Assumenda, obcaecati. Sint praesentium, similique reprehenderit quaerat, temporibus iusto, commodi mollitia numquam aliquid odio modi reiciendis!</p>
                  <b className='text-gray-800'>Our Mission</b>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eum accusantium omnis eveniet impedit ipsam reiciendis aut laboriosam dolores voluptate delectus officiis et voluptatem in, autem magnam sint atque quo!</p>
              
              </div>
            </div>

           <div className='text-xl py-4'>
             <Title text1={'WHY'} text2={'CHOOSE US?'}/>
           </div>

           <div className='flex flex-col md:flex-row text-sm mb-20'>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Quality Assurance:</b>
                  <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quo molestiae nesciunt corporis ducimus, a ratione ut dolorem voluptatum? Quam, eum perferendis distinctio expedita quia iste natus corrupti alias quae.</p>
              </div>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Convenience:</b>
                  <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet velit aut hic expedita ipsam distinctio sint dolores cumque quidem, iste alias, quasi voluptates nesciunt repellat assumenda harum voluptas deleniti ut!</p>
              </div>
              <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Exceptional Customer Service:</b>
                  <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quo molestiae nesciunt corporis ducimus, a ratione ut dolorem voluptatum? Quam, eum perferendis distinctio expedita quia iste natus corrupti alias quae.</p>
              </div>
           </div>

           <NewsLetterBox/>

        </div>
    );
};

export default About;