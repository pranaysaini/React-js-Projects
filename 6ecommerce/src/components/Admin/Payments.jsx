import Layout from "./Layout"
import { useState } from 'react';

const Payments = () => {

    const [Myorders, setMyOrders] = useState([
        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        },

        {
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            amount: '₹50000/-',
            date: '12-08-2024 10:15 PM'
            
        }



    ])

    return (
        <Layout>
            <div>
                <h1 className="text-xl font-semibold text-center mt-7">Customers</h1>
                
                <div className="m-6">
                    <table className="w-full">
                        <thead className="bg-rose-500 text-white">

                            <tr>
                                
                                <th className="py-4">Customer Name</th>
                                <th>E-mail</th>
                                <th>Mobile Number</th>
                                <th>Amount</th>
                                <th>Date</th>

                            </tr>
                        </thead>

                        <tbody > 
                            {
                                Myorders.map((items, index) => (
                                    <tr key={index} className="text-center" 
                                        style={{
                                            background:(index+1)%2 === 0 ? '#fcf2f2' : 'white'
                                        }}>
                                        
                                        
                                        <td className="p-4">{items.custName}</td>
                                        <td>{items.email}</td>
                                        <td>{items.mobile}</td>
                                        <td>{items.amount}</td>
                                        <td>{items.date}</td>


                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </Layout>

    )

}
export default Payments