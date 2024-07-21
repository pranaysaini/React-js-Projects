const Footer = () => {
    
    return (
        <>

            <div className=" bg-black h-96 gap-8 text-white flex justify-evenly pt-14 px-20">

                <div>
                    <h2 className="text-2xl font-bold">Coder School</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi vero voluptatem consequuntur aliquam cumque </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold">Useful Links</h2>
                    
                    <ul className="flex-col justify-center items-center gap-5 pt-5">
                        <li><a href="#">Home</a></li>
                        <li className="pt-3"><a href="#">Teachers</a></li>
                        <li className="pt-3"><a href="#">Holidays</a></li>
                        <li className="pt-3"><a href="#">Contact Us</a></li>
                        <li className="pt-3"><a href="#">Talk to us</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold">Social Links</h2>
                    
                    <ul className="flex-col justify-center items-center pt-5">
                        <li><a href="#">Facebook</a></li>
                        <li className="pt-3"><a href="#">You Tube</a></li>
                        <li className="pt-3"><a href="#">Instagram</a></li>
                        <li className="pt-3"><a href="#">X.com</a></li>
                        <li className="pt-3"><a href="#">LinkedIn</a></li>
                    </ul>
                </div>

                <div className="flex-col">
                    <h2 className="text-2xl font-bold">Enquiry</h2>

                    
                        <form className="flex flex-col gap-5 pt-5">
                            <input type="text" placeholder="Name" className="border-none rounded-lg h-10 w-60 text-black p-5"/>
                            <input type="text" placeholder="E-mail" className="border-none rounded-lg h-10 w-60 text-black p-5"/>
                            <input type="text" placeholder="Phone No." className="border-none rounded-lg h-10 w-60 text-black p-5"/>
                            <textarea type="text" placeholder="Message" className="border-none rounded-lg h-16 w-60 text-black pl-5 pt-5" />
                        </form>
                        
                        
                    
                </div>

            </div>
            
        
        
        
        </>
    );

}
export default Footer