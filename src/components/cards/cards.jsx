import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Card({percentage, title}) {
    return (
        <div className="flex flex-col justify-between max-w-sm p-6 h-[70%] text-center  rounded-lg shadow bg-black bg-opacity-60 ">
           <CircularProgressbar value={percentage} text={`${percentage}%`}
           styles={buildStyles(
            {
                pathColor: `#0F9D58`,
                textColor: '#efefef'

            }
           )} />

           <span className='text-[#efefef] uppercase text-2xl mt-5 font-semibold'>
                {title}
           </span>
        </div>

    )
}
