import { Link } from 'react-router-dom';

const Layout = ({children}) => {

    const menus = [
        
        {
            label: 'Home',
            href: '/'
        },

        {
            label: 'Categories',
            href: '/categories'
        },

        {
            label: 'Products',
            href: '/products'
        },

        {
            label: 'Contact-us',
            href: '/contact-us'
        }

    ]

    return (
        <div>
            <nav className="sticky bg-slate-50 shadow-lg ">
                <div className='flex items-center justify-between w-10/12 mx-auto'>

                    <img src="public/images/logo.jpg" className="w-[150px]" />

                        <div>
                            <ul className="flex text-md gap-4 items-center">
                                {
                                    menus.map((items, index) => (
                                        
                                        <li key={index}>
                                            
                                            <Link to={items.href} className='font-semibold hover:bg-slate-300 hover:rounded-md p-3 w-10'>
                                                {items.label}
                                            </Link>
                                            
                                        </li>
                                    ))
                                }

                                <Link to='/login' className=' block px-6 py-2 hover:bg-blue-500 text-md font-semibold hover:text-white rounded-md'>Login</Link>
                                <Link to='/signup' className='bg-blue-500 text-white px-6 py-2 text-md font-semibold rounded-md hover:bg-blue-400' >Signup</Link>
                            </ul>

                        </div>

                </div>
                
            </nav>

            {children}

            <footer className='bg-orange-600 py-16'>

                <div className='w-10/12 mx-auto grid grid-cols-4 gap-8'>

                    <div>
                        <h1 className='text-white font-semibold text-3xl mb-3'>Website Links</h1>
                        
                        <ul className='space-y-2 text-gray-50'>
                            {
                                menus.map((items, index) => (
                                    <li key={index}>
                                        <Link to={items.href}>{items.label}</Link>
                                    </li>
                                ))
                            }
                            
                            <li><Link to='/login'>Log in</Link></li>
                            <li><Link to='/signup'>Sign-up</Link></li>

                        </ul>
                      
                    </div>
                    


                    <div>
                        <h1 className='text-white font-semibold text-3xl mb-3'>Follow Us</h1>
                        
                        <ul className='space-y-2 text-gray-50'>
                            
                            <li><Link to='/facebook'>Facebook</Link></li>
                            <li><Link to='/instagram'>Instagram</Link></li>
                            <li><Link to='/youtube'>Youtube</Link></li>
                            <li><Link to='/linked-in'>Linked-in</Link></li>
                            <li><Link to='/twitter'>Twitter</Link></li>
                        </ul>
                      
                    </div>

                    <div>
                        <h1 className='text-white font-semibold text-3xl mb-3'>Brand Details</h1>
                        <p className='text-gray-100 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa necessitatibus corporis obcaecati sed enim animi sequi laboriosam voluptate eaque in!</p>
                        <img src="/public/images/logo.jpg" className='w-[100px]' />
                      
                    </div>

                    <div>
                        <h1 className='text-white font-semibold text-3xl mb-3'>Contact-us</h1>
                        
                        <form className='space-y-4'>

                            <input type="text" className='bg-white w-full rounded p-3' required placeholder='Enter Name'/>
                            <input type="text" className='bg-white w-full rounded p-3' required placeholder='Enter e-mail'/>
                            <input type="message" className='bg-white w-full rounded p-3 h-20' required placeholder='Message' rows={3}/>
                            
                            <button className='bg-black h-10 w-20 text-white rounded-md'>Submit</button>

                        </form>
                      
                    </div>

                   

                </div>

            </footer>






        </div>
    )
}
export default Layout