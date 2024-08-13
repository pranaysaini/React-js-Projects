import { useState, useEffect } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'

function App() {
  const [newData, setNewData] = useState([])
  const[load, setLoad] = useState(false)

  // useEffect(() => {
  //     getData()
  // }, [])

  const getData = () => {

    setLoad(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json() )
    
    .then((userData) => {
            setNewData(userData)
            setLoad(false)

          }
    )
    
    .catch((error) => {
      console.log(error)
      setLoad(false)
    })
  }

  return (
    <>
      <div className='h-screen w-full'>
        <h1 className='text-3xl text-center font-bold mt-20'>HTTP Request</h1>

        <button className="bg-indigo-700 rounded-md text-white text-lg font-bold h-12 w-36 ml-96 mt-10 hover:bg-indigo-500"
                onClick={getData}>
                  
                  GET DATA
        
        </button>
                {
                  load && (
                    <div className='flex justify-center items-center mt-10'>
                      <i className='fa fa-spinner fa-spin text-3xl'></i>
                    </div>
                  )
                }

                <div className="mt-20 w-auto mx-auto shadow-[0px_4px_10px_rgba(0,0,0,0.3)] p-7">

                  {
                    newData.map((items, index) => (
                      <div key={index}>
                          <h2 className='text-2xl font-bold'>{items.name}</h2>
                          <p>User Name: {items.username}</p>
                          <p>E-mail: {items.email}</p>
                      </div>

                    ))
                  }


                  
                </div>
      
      </div>
    </>
  )
}

export default App
