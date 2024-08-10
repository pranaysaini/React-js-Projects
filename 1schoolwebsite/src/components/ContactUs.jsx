import { useState } from 'react';
import Swal from 'SweetAlert2';
import Navbar from './Navbar'
import Footer from './Footer'

const ContactUs = () => {

    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [mail, setMail] = useState("");

    const newValue = (event) => {
        event.preventDefault();
        console.log(name, num, mail)

        Swal.fire({
            icon: "success",
            title: "Thanks",
            text: "Thank you! We Will Reach You Soon"

        })
        

        
    }
    return (
        <div>
            <Navbar />

            <div className="flex p-6">
                <img src="contact.png" className="h-full w-1/2" />
                
                <form className=" w-full flex flex-col gap-4 mt-4" onSubmit={newValue}>

                    <div className="flex flex-col ml-36 gap-2">
                        <label className='text-xl font-serif font-bold ml-1'>Full Name</label>
                        <input type="text" className="border border-double border-black rounded-xl h-11 w-72 p-2 " 
                                           placeholder="Enter Name Here" 
                                           onChange={(event) => setName(event.target.value)} />
                    </div>

                    <div className="flex flex-col ml-36 gap-2">
                        <label className='text-xl font-bold font-serif ml-1'>Phone Number</label>
                        <input type="text" className="border border-double border-black rounded-xl h-11 w-72 p-2" 
                                           placeholder="Enter Phone Number" 
                                           onChange={(event) => setNum(event.target.value)} />
                    </div>

                    <div className="flex flex-col ml-36 gap-2">
                        <label className='text-xl font-bold font-serif ml-1'>E-Mail</label>
                        <input type="text" className="border border-double border-black rounded-xl h-11 w-72 p-2" 
                                           placeholder="abcd@mail.com" 
                                           onChange={(event) => setMail(event.target.value)} />
                    </div>

                    <button className='bg-indigo-600 h-11 w-28 rounded-xl text-white text-lg font-bold font-mono ml-36 mt-3 hover:bg-indigo-500'>SUBMIT</button>

                </form>

            </div>

            <Footer />

        </div>
    );
}
export default ContactUs