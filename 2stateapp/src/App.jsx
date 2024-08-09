import { useState } from 'react'
import './App.css'



function App() {
  const [image, setImage] = useState(true)
  const [color, setColor] = useState("red")
  const [text, setText] = useState("")
  const[size, setSize] = useState(30)
  const [mycolor, setMyColor] = useState("#ddd")
  const [prod, setProd] = useState("");
  const [write, setWrite] = useState([]);
  const [students, setStudents] = useState("Romeo")


  const toggleFunc = () => {
        setImage(!image)
  }

  const changeBg = () => {
    setColor(color === "red" ? "blue" : "red")
  }

  const displayText = (event) => {
    setText(event.target.value);
  }

  const changeText = (event) => {
    setSize(event.target.value)
  }

  const boxColor = (event) => {
    setMyColor(event.target.value)
  }
  
  const newItem = (event) => {
    setProd(event.target.value)
  }
  
  const addNewProduct = () => {
    setWrite([...write, prod])
    setProd('')
  }



  return (
    <>
      <div className="min-h-screen bg-slate-400">
        <div className="bg-white p-12 w-1/2 mx-auto ">

          <div className=" flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold mb-3">Use State</h1>
            <p>State Management Application</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Show and Hide App</h2>
            {image && <img src="./Images/newImage.jpg" className="w-full" />}

            <button className="bg-slate-500 h-8 w-14 rounded-lg" 
                    onClick={toggleFunc}
                    >
                
              {image ? 'Hide' : 'Show'}
                    
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Show and Hide App</h2>
            <div className="w-full h-28" style={{backgroundColor: color}}>

            </div>

            <button className="bg-slate-500 h-8 w-14 rounded-lg" 
                    onClick={changeBg}
                    >
                
              {color === "red" ? 'Blue' : 'Red'}
                    
            </button>
          </div>

          <div>
            <h2 className='text-2xl font-bold'>Input Text</h2>
            <input type="text" placeholder='Type Text' className='border border-double border-black rounded-lg h-10 w-52 p-2 mt-2'
                    onChange={displayText}/>
            <p>You Typed: {text}</p>

          </div>

          <div>
            <p style={{fontSize: `${size}px`}}>Plain text</p>
            <input type="range" min='30' max='200' step="1" onChange={changeText}/>
          </div>

          <div>
            <p className="text-4xl font-bold">Change Color</p>
            
            <input type="text" className='border border-double border-black rounded-lg h-10 w-52 p-2 mt-2' placeholder="Enter Color" 
                                onChange={boxColor}/>

            <div className='w-56 h-24' style={{backgroundColor: mycolor}}></div>
          </div>



          <div className="mt-10">
            <h1 className="text-4xl font-bold">Add Products</h1>

            <div className='mt-6'>
              <input type="text" placeholder='Product Name' className="h-10 w-80 border border-double border-black p-3 rounded-lg" 
                      onChange={newItem} value={prod}/>

              <button className='w-20 h-10 bg-orange-500 rounded-lg ml-2'
                      onClick={addNewProduct}>Add</button>
            </div>

            <ul className="list-disc">
              {write.map((item, index) => (
                <li key={index}> {item} </li>
              ))}
            </ul>
          </div>
          
          




        </div>
      </div>
         
      
    </>
  )
}

export default App
