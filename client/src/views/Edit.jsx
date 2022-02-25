import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom'

function Edit() {
    const {id} = useParams()
    const mynav = useNavigate()
    const [author,setAuthor] = useState("")
    const [err,setErr] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then((res) => {
                console.log(res.data)
                setAuthor(res.data.authorName)
            })
            .catch((err) => console.log(err))
    },[id])
    function submitHandler(e) {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`,{
            authorName:author
        })
        .then((res) => {
            console.log(res)
            mynav('/')
        })
        .catch((err) => {
            console.log(err)
            setErr(err.response.data.errors)
        })
        console.log(err)
    }
    return (
        <div className=' w-[350px] mx-auto mt-4 text-left'>
            <h1>Favorite authors</h1>
            <Link to='/'> Home </Link>
            <p className='mb-3'>Add a new author:</p>
            <div className='flex flex-col text-left border pt-3 pb-3 pl-2' >
                <form onSubmit={submitHandler}>
                    <label>Name:</label>
                    <input value={author} className='w-[150px] border-2 mb-3' type={'text'} onChange={(e) => setAuthor(e.target.value)} />
                    {err.authorName ? <div>{err.authorName.message}</div> : null}

                    <div>
                        <Link to='/'><button  className='mr-3 ounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white rounded'>Cancel</button></Link>
                        <button className='ounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white rounded' >Submit</button>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit