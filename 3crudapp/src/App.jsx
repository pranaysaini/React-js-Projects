import { useState } from 'react'
import './App.css'

function App() {

  const model = {
    fullname: '',
    class: '',
    roll: '',
    dob: '',

  }
  
  const [editIndex, setEditIndex] = useState(null)
  const[open, setOpen] = useState(false)
  const [students, setStudents] = useState([])
  const [form, setForm] = useState(model)

  const openDraw = () => {
    setOpen(!open)
  }

  const closeDraw = () => {
    setOpen(false)
  }

  const handleInput = (event) => {
    const value = event.target.value
    const key = event.target.name
    setForm({
      ...form,
      [key]: value
    })
  }

  const submit = (event) => {
    event.preventDefault()
    setStudents([
      ...students,
      form
    ])
    setForm(model)
    
  }

  const deleteStudent = (index) => {
    const backup = [...students]
    backup.splice(index, 1)
    setStudents(backup)
  }

  const editStudent = (index) => {
      setOpen(true)
      setForm(students[index])
      setEditIndex(index)
  }
  
  const saveStudent = (event) => {
        event.preventDefault()
        const backup = [...students]
        backup[editIndex] = form
        setStudents(backup)
        
        setForm(model)
        setEditIndex(null)
        setOpen(false)
  }


  return (
    
        
        <div className="h-screen w-full bg-slate-300 m-0 p-0">

          <div className='h-28 w-2/3 mx-auto mt-16 bg-white'>
            <h1 className="text-3xl font-bold bg-white text-center">CRUD APP</h1>
            <button className="text-white font-bold bg-violet-700 w-40 h-11 rounded-md ml-28 mt-4 hover:bg-violet-600"
                    onClick={openDraw}>

                      New Student
                    </button>
          </div>

          <aside className={`fixed h-full w-1/3 top-0 pl-10 pt-6 shadow-left right-0  box-border bg-white transition-transform duration-300 ${
                              open ? 'transform translate-x-0' : 'transform translate-x-full'
                            }`}>
            
            <button className="text-white bg-violet-700 w-24 h-10 font-bold rounded-md hover:bg-violet-600"
                    onClick={closeDraw}> Close </button>
            <h1 className="text-3xl text-center font-bold mt-4">New Student</h1>

            
            
            <form className="flex flex-col gap-8 mt-8" onSubmit={editIndex === null ? submit : saveStudent}>
              <div className=" flex flex-col gap-1">
                <label htmlFor="fullname" className="font-bold text-2xl">Name</label>
                <input type="text" name="fullname" placeholder='Enter Full Name' className="h-10 w-96 border border-black p-2 "
                        onChange={handleInput} value={form.fullname}/>
              </div>

              <div className=" flex flex-col gap-1">
                <label htmlFor="class" className="font-bold text-2xl">Class</label>
                <input type="number" name="class" placeholder='Enter Class' className="h-10 w-96 border border-black  p-2 "
                       onChange={handleInput} value={form.class}/>
              </div>

              <div className=" flex flex-col gap-1">
                <label htmlFor="roll" className="font-bold text-2xl">Roll Number</label>
                <input type="number" name="roll" placeholder='Enter Roll Number' className="h-10 w-96 border border-black  p-2 "
                        onChange={handleInput} value={form.roll}/>
              </div>

              

              <div className=" flex flex-col gap-1">
                <label htmlFor="dob" className="font-bold text-2xl">Date of Birth</label>
                <input type="date" name="dob"  className="h-10 w-96 border border-black  p-2 " 
                        onChange={handleInput} value={form.dob}/>
              </div>

              <button className="h-12 w-96 mt-5 bg-violet-700 text-white font-bold border rounded-md hover:bg-violet-600">
                    {editIndex === null ? 'SUBMIT' : 'SAVE'}
              </button>

            
            </form>
          </aside>

          <table className="border border-collapse h-auto w-4/6 mx-auto mt-16 text-lg">
            <thead className='border border-collapse'>
              <tr>
                <th className='p-4'>S.No.</th>
                <th className='p-4'>Name</th>
                <th className='p-4'>Class</th>
                <th className='p-4'>Roll No.</th>
                <th className='p-4'>DOB</th>
                <th className='p-4 w-80'>Action</th>

              </tr>
              
            </thead>
            
            <tbody className='border border-collapse'>

              {students.map((student, index) => (
                <tr key={index}>
                  <td className="p-4 text-center">{index + 1}</td>
                  <td className="p-4 text-center">{student.fullname}</td>
                  <td className="p-4 text-center">{student.class}</td>
                  <td className="p-4 text-center">{student.roll}</td>
                  <td className="p-4 text-center">{student.dob}</td>
                  <td className="p-4 flex gap-4 justify-center items-center">

                    <button className='h-9 w-20 bg-indigo-700 rounded-md text-white text-sm font-bold hover:bg-indigo-600'
                            onClick={() => editStudent(index)}>Edit</button>
                    <button className='h-9 w-20 bg-indigo-700 rounded-md text-white text-sm font-bold hover:bg-indigo-600'
                            onClick={() => deleteStudent(index)}>Delete</button>
                  </td>
                </tr>
          ))}

            </tbody>
          </table>
            
              
        </div>

  )
}

export default App
