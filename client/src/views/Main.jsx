import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {
    Link, useNavigate
} from 'react-router-dom'

function Main() {
    const mynav = useNavigate()
    const [authorsList,setAuthorsList] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then((res) => {
                console.log(res.data)
                setAuthorsList(res.data)
            })
            .catch((err) => console.log(err))

    },[])

    function deleteHandler (id) {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                console.log(res)
                setAuthorsList(authorsList.filter((author)=>author._id !== id))
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className='w-[400px] mx-auto mt-4'>
            <h1 className='text-left'>Favorite authors</h1>
            <Link to='/new' ><p className='text-left mb-3'>Add an author</p></Link>
            <div className='border'>
                <div className='flex text-left'>
                    <div className='border flex-1'>Author</div>
                    <div className='border flex-1'>Actions Availbe</div>
                </div>
                {
                    authorsList.map((author) => (
                        <div className='flex text-left' key={author._id}>
                        <div className='border flex-1'>{author.authorName}</div>
                        <div className='border flex flex-1 justify-around'>
                            <Link to={`/edit/${author._id}`}><button className='ounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white rounded'>
                            Edit</button>
                            </Link>
                            <button onClick={() => deleteHandler(author._id)} className='ounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white rounded'>Delete</button></div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Main