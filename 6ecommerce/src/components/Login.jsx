import {useState} from 'react'
import Layout from './Layout.jsx'
import {Link} from 'react-router-dom'

const Login = () => {

    const [pass, setPass] = useState("password")

    return (
        <>
            <Layout>
                <div className="grid grid-cols-2 overflow-hidden">
                    <img src="./images/signup.jpg" className='max-h-screen w-full' />
                    <div className='flex flex-col p-16'>
                        <h1 className='text-4xl font-bold'>Sign in</h1>
                        <h1 className='text-lg text-gray-600'>Enter Profile Details</h1>

                        <form className='mt-8 space-y-6'>

                            <div className='flex flex-col '>
                                <label className='font-semibold text-lg mb-1'>E-Mail</label>
                                <input required type="email" name="email" placeholder="example@gmail.com" className='p-3 border border-gray-300 rounded' />
                            </div>

                            <div className='flex flex-col relative'>
                                <label className='font-semibold text-lg mb-1'>Password</label>
                                <input required type={pass} name="password" placeholder="*******" className='p-3 border border-gray-300 rounded' />

                                <button 
                                    onClick={() => (setPass(pass==="password" ? "text" : "password"))}
                                    type="button" 
                                    className='absolute top-11 right-4 w-8 h-8 hover:bg-slate-300 hover:text-blue-600 rounded-full'>
                                     
                                    {
                                        pass === "password" ? <i className="ri-eye-line"></i> : <i className="ri-eye-off-line"></i>
                                    }
                                </button>
                            </div>

                            <button className='mt-16 my-8 bg-blue-600 h-10 w-36 text-white font-semibold rounded-md hover:bg-rose-500'>Sign-in</button>

                        </form>

                        <div className='mt-2 text-blue-800 hover:text-blue-400'>
                            <Link to="/Signup"> Don't have an account ? Register Now</Link>
                        </div>
                    </div>
                </div>

                

            </Layout>
            
        </>
        
    )

}
export default Login