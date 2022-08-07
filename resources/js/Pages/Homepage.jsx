import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
   console.log(props);
   return (
      <div className='flex justify-center items-center min-h-screen bg-slate-50'>
         <Head title={props.title} />
         <div>
            {props.news ? props.news.map((data, i) => {
               return (
                  <div key={i} className="p-4 m-2 bg-white text-black shadow-md rounded-md">
                     <p className='text-2xl'>{data.title}</p>
                     <p className='text-sm'>{data.description}</p>
                     <p>{data.category}</p>
                     <p>{data.author}</p>
                  </div>
               )
            }) : <p>Saat ini belum ada data</p>}
         </div>
      </div>
   )
}