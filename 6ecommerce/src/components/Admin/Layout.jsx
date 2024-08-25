import {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Products from './Products.jsx'

const Layout = ({children}) => {

    const [size, setSize] =  useState(280)
    const [menu, setMenu] = useState(false)
    
    const location = useLocation()

    const [leftMenu, SetLeftMenu] = useState([

        {
            label: 'Dashboard',
            icon: <i className="ri-dashboard-3-line mr-2"></i>,
            link: '/admin/dashboard'
        },

        {
            label: 'Customers',
            icon: <i className="ri-user-line mr-2"></i>,
            link: '/admin/customers'
        },
        
        {
            label: 'Products',
            icon: <i className="ri-shopping-cart-2-line mr-2"></i>,
            link: '/admin/products'
        },

        {
            label: 'Orders',
            icon: <i className="ri-shape-line mr-2"></i>,
            link: '/admin/orders'
        },

        {
            label: 'Payments',
            icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
            link: '/admin/payments'
        },

        {
            label: 'Logout',
            icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
            link: '/admin/logout'
        },

        {
            label: 'Settings',
            icon: <i className="ri-tools-line mr-2"></i>,
            link: '/admin/settings'
        }




    ])

    
    return (
        <div className="h-screen">
            <aside className="bg-indigo-400 h-full fixed left-0 top-0 overflow-hidden" 
                    style={{
                        width: size,
                        transition: "0.3s"
                    }}>
                        
                        <div className='flex flex-col'>
                            
                            {
                                leftMenu.map((items, index) => (
                                    <Link key={index} to={items.link}
                                            className='px-4 py-2 text-lg font-semibold bg-indigo-300 text-white hover:bg-rose-500'
                                            style={{background: (location.pathname === items.link) ? '#F43F5E' : 'transparent'}}>
                                        {items.icon}
                                        {items.label}



                                    </Link>
                                ))
                            }


                        </div>

                    </aside>
            
            <section className="min-h-screen bg-gray-100" 
                    style={{
                            marginLeft: size,
                            transition: "0.3s"
                    }}>

                    <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
                        <div className="flex items-center gap-1">
                            <button className="h-9 w-9 rounded hover:bg-indigo-100" onClick={()=>setSize(size === 280 ? 0 : 280)}>
                                <i class="ri-menu-line text-2xl"></i>
                            </button>
                            <h1 className="text-2xl  font-bold">Shop Code</h1>
                        </div>

                        <div>
                            <button className="relative">
                                <img src="/images/avatar.jpg" className='h-10 w-10 rounded-full' onClick={() => setMenu(!menu)} />

                                {    menu &&
                                    <div className="absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg  ">
                                        <div>
                                            <h1 className='text-lg font-semibold'>Pranay Saini</h1>
                                            <p className='text-gray-500'>pksd3123@gmail.com</p>
                                            <div className="h-px bg-gray-200 my-4" />

                                            <div>
                                                <button>
                                                <i className="ri-logout-circle-r-line mr-2"></i>
                                                Log Out
                                                </button>
                                            </div>
                                        </div>

                                    </div>

                                }



                                

                            </button>
                        </div>



                    </nav>
                    {children}

            </section>
        </div>
    )

}
export default Layout