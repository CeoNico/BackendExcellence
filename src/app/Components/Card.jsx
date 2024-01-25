import Image from 'next/image'
import React from 'react'

const Card = ({children, imgSrc, alt}) => {
  return (
    <div className='relative max-w-lg overflow-hidden rounded-2xl shadow-lg shadow-black max-h-[300px] '>
        <Image src={imgSrc} alt={alt} className='transition transform hover:scale-110 duration-300' />
        <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
            <div className='p-4 text-white'>{children}</div>
        </div>
    </div>
  )
}

export default Card