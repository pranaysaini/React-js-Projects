import {Link} from 'react-router-dom'

const Navbar = () => {
    
    return (
        <>

            <nav className='bg-white flex justify-between items-center px-14 py-3 shadow-md'>
                <div className="flex justify-center items-center gap-8">
                    <img 
                        src="/images.png"
                        width="60" className="flex justify-center items-center" 
                        />

                    <h1 className="text-2xl font-bold">Coding School</h1>
                </div>

                <ul className="flex justify-center items-center gap-10">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/teachers">Teachers</Link></li>
                    <li><Link to="/holidays">Holidays</Link></li>
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li className="bg-blue-700 text-white w-32 h-10 flex justify-center items-center border rounded-lg hover:bg-blue-500 cursor-pointer"><a href="#">Talk to us</a></li>
                </ul>
                
            </nav>
        
        </>
    );
}
export default Navbar