import Navbar from './Navbar';
import Footer from './Footer';

const Holidays = () => {

    const holidays = [
        {
            title: 'Summer Vacation 2024',
            duration: '2 Months',
            date: '10/04/2024'
        },
        {
            title: 'Winter Break 2024',
            duration: '1 Month',
            date: '12/12/2024'
        },
        
        {
            title: 'Summer Vacation 2024',
            duration: '2 Months',
            date: '10/04/2024'
        },
        {
            title: 'Winter Break 2024',
            duration: '1 Month',
            date: '12/12/2024'
        },
        {
            title: 'Summer Vacation 2024',
            duration: '2 Months',
            date: '10/04/2024'
        },
        {
            title: 'Winter Break 2024',
            duration: '1 Month',
            date: '12/12/2024'
        },

        {
            title: 'Winter Break 2024',
            duration: '1 Month',
            date: '12/12/2024'
        },

        {
            title: 'Winter Break 2024',
            duration: '1 Month',
            date: '12/12/2024'
        },

        {
            title: 'Winter Break 2024',
            duration: '1 Month',
            date: '12/12/2024'
        },

        {
            title: 'Winter Break 2024',
            duration: '1 Month',
            date: '12/12/2024'
        },

        
        

    ];

    return (
        <div>
            <Navbar />
            
            <div className="mt-16 h-20 w-60 mx-auto">
                <h1 className="text-4xl font-bold">Your Holidays</h1>
            </div>

            <table className="border border-collapse border-black mx-auto mt-5 mb-32   w-2/3 text-center ">
                <thead className="bg-slate-400">
                    <tr className="text-2xl">
                        <th className='border border-collapse p-4'>S.No.</th>
                        <th className='border border-collapse'>Title</th>
                        <th className='border border-collapse'>Duration</th>
                        <th className='border border-collapse'>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {holidays.map((items, index) => (
                        <tr key={index}>
                            <td className='border border-collapse p-6'>{index + 1}</td>
                            <td className='border border-collapse'>{items.title}</td>
                            <td className='border border-collapse'>{items.duration}</td>
                            <td className='border border-collapse'>{items.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Footer />
        </div>
    );
};

export default Holidays;
