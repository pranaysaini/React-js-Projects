import { useState } from "react"
import Layout from "./Layout"

const Category = () => {

    const [cate, setCate] = useState([

        {
            name: 'Shirts'
        },

        {
            name: 'T-Shirts'
        },

        {
            name: 'Pants'
        },

        {
            name: 'Watches'
        },

        {
            name: 'Sweatshirts'
        },

        {
            name: 'Genes'
        }
    ])
    return (
        <Layout>
            <div>

                <h1 className="text-center text-3xl font-bold mt-10 mb-10">Explore Categories</h1>
                <div className="flex justify-center mb-10">
                    <div className="grid grid-cols-3 gap-5 ">
                        {
                            cate.map((items, index) => (
                                <button key={index} className="rounded-md bg-orange-400 hover:bg-orange-600 hover:text-white h-40 w-96 flex flex-col justify-center items-center" >
                                    <div className="text-5xl"><i class="ri-menu-search-line"></i></div>
                                    <h1 className="text-4xl font-bold">{items.name}</h1>
                                </button>
                            ))
                        }
                    </div>
                </div>
            

            </div>
        </Layout>
    )
}
export default Category