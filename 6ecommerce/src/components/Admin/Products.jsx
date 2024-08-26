import {useState} from 'react'
import Layout from "./Layout"

const Products = () => {

    const [prod, setProd] = useState([
        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/a.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/b.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/c.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/d.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/e.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/f.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/g.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/h.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/i.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/j.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/k.webp'
        },

        {
            title: 'Mens T-Shirt',
            description: 'I am related to mens product',
            price: 2000,
            discount: 15,
            image: '/images/TeachersImages/l.webp'
        }
    ])

    return (
        <Layout>
            <div>
                <h1 className="text-xl font-semibold text-center mt-7">Orders</h1>
                
                <div className="grid md:grid-cols-4 gap-8 p-11">
                    {
                        prod.map((items, index) => (
                            <div key={index} className='bg-white shadow-lg'>
                                <img src={items.image} className='h-[450px] w-full'/>
                                <div className="p-4">
                                    <h1>{items.title}</h1>
                                    <p className="text-slate-600">{items.description}</p>
                                    <div className="flex gap-1">
                                        <label>₹{items.price-(items.price*items.discount/100)}</label>
                                        <del className='font-semibold'>₹{items.price}</del>
                                        <label>({items.discount}%off)</label>
                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div>


            </div>
            
        </Layout>
    )

}
export default Products