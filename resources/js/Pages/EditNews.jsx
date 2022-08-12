import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';

export default function EditNews(props) {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [category, setCategory] = useState('');
   const [isNotif, setIsNotif] = useState(false)

   const handleSubmit = () => {
      const data = { id: props.myNews.id, title, description, category }
      Inertia.post('/news/update', data)
      setTitle('')
      setDescription('')
      setCategory('')
   }

   return (
      <div className='min-h-screen bg-slate-50'>
         <Head title={props.title} />
         <Navbar user={props.auth.user} />
         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 m-2">
            <div className='p-4 text-2xl'>Update Berita</div>
            <div className="card-body">
               <input type="text" placeholder="Title" className="m-2 input input-bordered w-full" onChange={(title) => setTitle(title.target.value)} defaultValue={props.myNews.title} />
               <input type="text" placeholder="Description" className="m-2 input input-bordered w-full" onChange={(description) => setDescription(description.target.value)} defaultValue={props.myNews.description} />
               <input type="text" placeholder="Category" className="m-2 input input-bordered w-full" onChange={(category) => setCategory(category.target.value)} defaultValue={props.myNews.category} />
               <button className='btn btn-outline m-2' onClick={() => handleSubmit()}>Update</button>
            </div>
         </div>
      </div>
   )
}