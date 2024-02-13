import React from 'react'

const Footer = () => {
  return (
    <div className='py-12'>
        <div className='max-w-screen-2xl mx-auto p-4 text-gray-400 text-sm'>
            @ {new Date().getFullYear()}
        </div>
    </div>
  )
}

export default Footer