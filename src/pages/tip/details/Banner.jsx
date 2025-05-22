import React from 'react'

const Banner = ({src}) => {
  return (
    <div className='my-8'>
        <img src={src} alt="" className='max-h-[450px] w-full object-cover rounded-xl' />
    </div>
  )
}

export default Banner