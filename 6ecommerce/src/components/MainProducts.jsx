import {useState} from 'react'
import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Navigation } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';


const MainProducts = () => {

    const [prod, setProd] = useState([

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: './public/images/TeachersImages/a.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/b.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/c.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/d.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/e.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/f.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/f.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/f.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/f.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/f.webp'
        },

        {
            title: 'Blue Mens T-Shirt',
            price: 1200,
            discount: 15,
            thumbnail: '/images/TeachersImages/f.webp'
        }

    ])

    return (
        <Layout>
            <div>
                

                <div className="p-10">
                    <h1 className="text-center text-3xl font-semibold font-">All Products</h1>
                    <div className='md:w-full mx-auto grid md:grid-cols-3'>
                        
                            {
                                prod.map((items, index)=>(
                                    <div key={index} className='mx-auto mt-10 shadow-md w-[300px] flex flex-col justify-center'>
                                        <h1 className='text-center text-xl font-bold'>{items.title}</h1>
                                        <img src={items.thumbnail} className='h-[500px]' />
                                        <div className="flex justify-center gap-x-3 pt-5 pb-2">
                                            <h1 className='text-xl font-semibold'>{items.price-(items.discount/100)*items.price}</h1>
                                            <h1 className=' text-xl line-through'>₹{items.price}</h1>
                                            <h1 className=''>Discount: {items.discount}%</h1>
                                        </div>

                                        <div className='flex justify-center items-center gap-x-3 pb-6'>
                                            <button className='bg-green-600  text-white rounded-lg h-[40px] w-32 hover:bg-green-400 hover:text-black'>BUY NOW</button>
                                            <button className='bg-green-600 text-white rounded-lg h-[40px] w-32 hover:bg-green-400 hover:text-black'>ADD to CART</button>
                                        </div>

                                        
                                        
                                    </div>
                                ))
                            }
                        
                    
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default MainProducts