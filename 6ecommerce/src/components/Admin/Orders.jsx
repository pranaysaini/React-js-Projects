import { useState } from 'react';
import Layout from "./Layout"

const Orders = () => {

    const [Myorders, setMyOrders] = useState([
        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        },

        {
            orderId: '#sff502',
            custName: 'Putter Bike',
            email: 'email@gmail.com',
            mobile: '9876543210',
            product: 'Levono Idea-pad',
            amount: '52000',
            date: '12-08-2024 10:15 PM',
            status: 'Pending'
        }



    ])

    return (
        <Layout>
            <div>
                <h1 className="text-xl font-semibold text-center mt-7">Orders</h1>
                
                <div className="m-6">
                    <table className="w-full">
                        <thead className="bg-rose-500 text-white">

                            <tr>
                                <th className="py-4">Order Id</th>
                                <th>Customer Name</th>
                                <th>E-mail</th>
                                <th>Mobile Number</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>

                            </tr>
                        </thead>

                        <tbody > 
                            {
                                Myorders.map((items, index) => (
                                    <tr key={index} className="text-center" 
                                        style={{
                                            background:(index+1)%2 === 0 ? '#fcf2f2' : 'white'
                                        }}>
                                        
                                        <td className="p-4">{items.orderId}</td>
                                        <td>{items.custName}</td>
                                        <td>{items.email}</td>
                                        <td>{items.mobile}</td>
                                        <td>{items.product}</td>
                                        <td>{items.amount}</td>
                                        <td>{items.date}</td>

                                        <td>
                                            <select name="status" id="status"
                                                    className="border border-gray-400 bg-slate-100 rounded-md h-7 text-sm font-semibold text-center">
                                                
                                                <option value="pending" className="bg-white">Order Received</option>
                                                <option value="processing" className="bg-white" >Processing</option>
                                                <option value="dispatched" className="bg-white">Dispatched</option>
                                            </select>
                                        </td>

                                        
                                        
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
export default Orders