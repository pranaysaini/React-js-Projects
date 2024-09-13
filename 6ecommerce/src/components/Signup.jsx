import {useState} from 'react'
import Layout from './Layout.jsx'
import {Link} from 'react-router-dom'

const Signup = () => {

    const [pass, setPass] = useState("password")

    return (
        <>
            <Layout>
                <div className="grid md:grid-cols-2 md:overflow-hidden">
                    <img src="./images/signup.jpg" className='md:max-h-screen w-full' />
                    <div className='flex flex-col md:p-16 p-8'>
                        <h1 className='text-4xl font-bold'>New User</h1>
                        <h1 className='text-lg text-gray-600'>Create New Account</h1>

                        <form className='mt-8 space-y-6'>

                            <div className='flex flex-col'>
                                <label className='font-semibold text-lg mb-1'>Full Name</label>
                                <input required type="text" name="fullname" placeholder="Enter Full Name" className='p-3 border border-gray-300 rounded' />
                            </div>

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

                            <button className='mt-16 my-8 bg-blue-600 h-10 w-36 text-white font-semibold rounded-md hover:bg-rose-500'>Sign-up</button>


                            
                        </form>

                        <div className='mt-2 text-blue-800 hover:text-blue-400'>
                            <Link to="/Login"> Already Have an Account? Sign in</Link>
                        </div>
                    </div>
                </div>

            </Layout>
            
        </>
        
    )

}
export default Signup