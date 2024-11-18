import React, { useRef, useState } from 'react'
import './index.css'

export default function Index({addPost}) {

    let title = useRef();

    // let [title, setTitle] = useState("")
    let [status, setStatus] = useState("upcoming");


    let resetForm= () => {
        // setTitle('')
        title.current.value = '';
    } 

    // let onChangeHandler = (e) => {
    //     setTitle(e.target.value)
    // }

    let upload_post = (e) => {
        e.preventDefault(); // prevent refreshing page
        console.log(title.current.value)
        let post = {
            id: Math.floor(Math.random()*10000), // random number
            title: title.current.value,
            status: status
        }
        addPost(post)
        resetForm();
    }

  return (
    <form className='post-form' onSubmit={upload_post}>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            {/* <input type='text' onChange={onChangeHandler} value={title}/> */}
            <input type='text' ref={title}/>
        </div>
        <div className='form-control'>
            <label htmlFor=''>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value='dropped'>Dropped</option>
                <option value='ongoing'>Ongoing</option>
                <option value='upcoming'>Upcoming</option>  
            </select>
        </div>
        <button type='button' onClick={resetForm}>reset form</button>
        <div className='form-control'>
            <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}
