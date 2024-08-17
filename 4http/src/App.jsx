import { useState, useEffect } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'

function App() {
  const [newData, setNewData] = useState([])
  const[load, setLoad] = useState(false)
  const [fetchData, setFetchData] = useState(false)
  const [count, setCount] = useState(0)
  

  useEffect(() => {
      getData()
  }, [fetchData])

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount+1)
    }, 500)
    
    // Clear Function
    return () => {
      clearInterval(timer)
    }

  }, [count])

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
  // flex flex-wrap justify-center items-center gap-5 w-full

  return (
    <>
      <div className=' w-full bg-green-400 pt-24 pb-24'>
        <h1 className='text-3xl text-center font-bold'>HTTP Request</h1>
        
        <div className='flex justify-center items-center'>
          <button className="bg-indigo-700 rounded-md text-white text-lg font-bold h-12 w-36 mr-10 mt-10 hover:bg-indigo-500"
                    onClick={getData}>
                      
                      GET DATA
            
            </button>

            <p className='text-2xl text-center font-bold mt-10'>Total Count is:  {count}</p>

            <button className="bg-indigo-700 rounded-md text-white text-lg font-bold h-12 w-36 ml-10 mt-10 hover:bg-indigo-500"
                    onClick={() => setFetchData(!fetchData)}>
                      
                      NEW DATA
            
            </button>

        </div>
          
        
                {
                  load && (
                    <div className='flex justify-center items-center mt-10'>
                      <i className='fa fa-spinner fa-spin text-3xl'></i>
                    </div>
                  )
                }

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-3 gap-x-36 w-1/2 mx-auto'>
                  

                  {
                    newData.map((items, index) => (
                      <div key={index}>

                        <div className="mt-20 w-96 mx-auto shadow-[0px_4px_10px_rgba(0,0,0,0.3)] p-7 bg-rose-400">
                          <h2 className='text-2xl font-bold text-bold'>{items.name}</h2>
                          <p>User Name : {items.username}</p>
                          <p>E-mail : <span className='text-blue-700 underline'>{items.email}</span></p>

                        </div>
                          
                      </div>

                    ))
                  }
                  
                </div>
      </div>
    </>
  )
}

export default App
