import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const model = {
    firstName:'',
    lastName:'',
    email:'',
    userName:'',
    password:'',
    number:''
  }

  const errModel = {
    firstName: null,
    lastName: null,
    email: null,
    userName: null,
    password: null,
    number: null
  }
  
  const [form, setForm] = useState(model);
  const [formError, setFormError] = useState(errModel)

  const validator = (key, value) => {
      
    if(value.length == 0){
      setFormError( (prev) => ({
        ...prev,
        [key]: `${key} is required field`
      }))
    }
    else{
      setFormError((prev) => ({
        ...prev,
        [key]: null
      }))
    }
  }

           
    const assignValue = (event) => {

      event.preventDefault()
      const value = event.target.value;
      const key = event.target.name;
      
      setForm((prev) => ({
        ...prev,
        [key]: value
      }))

      validator(key, value)
    }
    
  
  const submitForm = (event) => {
      event.preventDefault()
      const keys = Object.keys(form)

      for(let key of keys){
        let value = form[key]
        validator(key, value)
      }
  }

  
  return (
    <>
    
      <div className=' min-h-screen w-full flex justify-center items-center bg-blue-500 pt-10 pb-10'>
   
            <form className='h-[800px] w-[500px] bg-white pt-7 flex flex-col gap-5 rounded-lg items-center shadow-2xl transition-all duration-300 ease-in-out'
                            onSubmit={submitForm} 
                            style={{
                              minHeight: '500px',
                              height: 'auto',
                              paddingBottom: '50px',
                              width: '500px'

                            }}>
                    
                      
                <h1 className='text-3xl font-bold text-center underline mt-4'>Sign Up</h1>
 
                <div className='flex flex-col  gap-1'>
                  <label htmlFor="firstName" className='text-2xl font-bold'>First Name</label>

                  <input type="text" name='firstName' className='h-10 w-96 rounded-lg border-2 border-black p-2' placeholder='Enter First Name'
                                                      onChange={((event) => assignValue(event))} />

                  {formError.firstName &&  <p className='text-rose-600 font-bold'>{formError.firstName}</p>}
                </div>



                <div className='flex flex-col gap-1'>
                  <label htmlFor="lastName" className='text-2xl font-bold'>Last Name</label>
                  <input type="text" name='lastName' className='h-10 w-96 rounded-lg border-2 border-black p-2' placeholder='Enter Last Name' 
                                                      onChange={((event) => assignValue(event))}/>

                  {formError.lastName &&  <p className='text-rose-600 font-bold'>{formError.lastName}</p>}
                </div>



                <div className='flex flex-col  gap-1'>
                  <label htmlFor="email" className='text-2xl font-bold'>E-mail</label>
                  <input type="text" name='email' className='h-10 w-96 rounded-lg border-2 border-black p-2' placeholder='Enter E-mail Address'
                                                  onChange={((event) => assignValue(event))} />

                  {formError.email &&  <p className='text-rose-600 font-bold'>{formError.email}</p>}
                </div>



                <div className='flex flex-col gap-1'>
                  <label htmlFor="userName" className='text-2xl font-bold'>Username</label>
                  <input type="text" name='userName' className='h-10 w-96 rounded-lg border-2 border-black p-2' placeholder='Enter User Name'
                                                      onChange={((event) => assignValue(event))} />

                 {formError.userName &&  <p className='text-rose-600 font-bold'>{formError.userName}</p>}
                </div>



                <div className='flex flex-col  gap-1'>
                  <label htmlFor="password" className='text-2xl font-bold'>Password</label>
                  <input type="password" name='password' className='h-10 w-96 rounded-lg border-2 border-black p-2' placeholder='Enter Password' 
                                                          onChange={((event) => assignValue(event))}/>

                  {formError.password &&  <p className='text-rose-600 font-bold'>{formError.password}</p>}
                </div>



                <div className='flex flex-col gap-1'>
                  <label htmlFor="number" className='text-2xl font-bold'>Contact Number</label>
                  <input type="number" name='number' className='h-10 w-96 rounded-lg border-2 border-black p-2' placeholder='Enter Phone Number'
                                                      onChange={((event) => assignValue(event))}/>

                  {formError.number &&  <p className='text-rose-600 font-bold'>{formError.number}</p>}
                </div>



                <button className='h-12 w-96 text-white text-center text-xl font-bold rounded-lg bg-blue-600 mt-6 hover:bg-blue-400 hover:text-black'>Submit</button>



            </form>

      </div>
    </>
  )
}

export default App
