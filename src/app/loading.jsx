import React from 'react'

const LoadingPage = () => {
  return (
    <div className='flex h-[85vh] items-center justify-center gap-2'>
      <span>Loading...</span>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  )
}

export default LoadingPage
