import Navbar from './Navbar'
import Footer from './Footer'

const teacher = [
    {
        image: './TeachersImages/a.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/b.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/c.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/d.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/e.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/f.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/g.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/h.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/i.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/j.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/k.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './TeachersImages/l.webp',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

]


const Teachers = () => {

    return (
        <>
            <Navbar /> 

            <header className="h-32 flex justify-center items-center bg-gradient-to-l from-indigo-500 ...">
                <h1 className="text-4xl font-bold">Teachers</h1>
            </header> 

            <section className='max-w-6xl m-auto flex flex-wrap gap-x-20 gap-y-20 pt-16 pb-24 '>

                {teacher.map(function (items, index) {
                    return (

                        <div key={index}>
                            <img src={items.image} className='w-56 h-96' alt={items.image} />

                            <div className="w-56 flex flex-col justify-center items-center mt-7">
                                <h2 className='text-xl font-bold'>{items.name}</h2>
                                <p className="text-gray-500 font-bold">{items.qua}</p>
                            </div>
                            
                        </div>
                    )
                })}

            </section>
                
            <Footer />

        </>
    );
}
export default Teachers