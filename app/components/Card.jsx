import React from 'react'
import BookmarkIcon from '../assets/BookmarkIcon'

function Card({title,company_name, salary, jobUrl, jobId}) {
  return (
    <div className='border p-6 m-4 rounded-lg shadow-zinc-300 shadow-md'>
        <div className='font-semibold'>{title}</div>
        <div className='flex gap-5'>
            <div className='text-red-500 bg-gray-200 pl-2 pr-2 font-semibold'>Remote</div>
            <div>Salary: <span>$20000</span> - <span>$20000</span></div>
        </div>
        <div className='flex justify-between mt-6 items-center'>
            <div className='flex justify-between'>
            <img className='w-10 h-10 mr-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3yt2UdGKpuLH_WHF0JOKg8cYJHSVarNH5Q&s" alt="Company Logo" />
            <div className='text-sm'>
                <div className='font-semibold'>{company_name}</div>
                <div>Company Location</div>
            </div>
            </div>
            <BookmarkIcon/>
        </div>
    </div>
  )
}

export default Card