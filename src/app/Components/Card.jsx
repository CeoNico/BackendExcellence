import Image from 'next/image'
import React from 'react'

const Card = ({ imgSrc, alt}) => {
  return (
    <div className='flex items-center justify-center max-w-lg overflow-hidden rounded-2xl shadow-lg shadow-black max-h-[600px] transition transform hover:scale-110 duration-300 '>
        <Image  src={imgSrc} alt={alt} />
    </div>
  )
}

export default Card