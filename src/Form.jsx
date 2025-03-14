import React from 'react'
import books from './booksData'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Form = () => {
    const navigateto=useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        coverImage: '',
        
    })
    const handlechange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
   const handleSubmit=(e)=>{
        e.preventDefault();
        books.push(formData);
        navigateto('/')
    }
  return (
    <div className='bg-black h-screen w-full flex justify-center gap-3 '>
      <form action="submit" className='flex flex-col gap-2 border-2 h-96 w-96 mt-40 bg-white'>
        <label htmlFor="title"className='font-bold'>Title</label>
        <input type="text" id="title" name="title" onChange={handlechange} className='border-1 w-80'/>
        <label htmlFor="author" className='font-bold'>Author</label>
        <input type="text" id="author" name="author" onChange={handlechange} className='border-1 w-80' />
        <label htmlFor="description"className='font-bold'>Description</label>
        <textarea id="description" name="description" onChange={handlechange} className='border-1 w-80' />
        <label htmlFor="coverImage" className='font-bold'>Cover Image URL</label>
        <input type="text" id="coverImage" name="coverImage" onChange={handlechange} className='border-1 w-80' />
        <button type="submit" onClick={handleSubmit} className='border-1 w-20 bg-blue-400 rounded-xs'>Submit</button>
      </form>
    </div>
  )
}

export default Form
