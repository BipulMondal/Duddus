import React from 'react'

const TopCard = () => {
    const cart = [1,2,3]
  return (
    <div className='flex w-full items-center gap-8'>
        {cart.map((item, index) => (
            <div key={index} className='flex-1 h-[201.6px] rounded-3xl bg-purple-300 my-5' style={{aspectRatio: '130/63'}}>
                 
            </div>
        ))}
    </div>
  )
}

export default TopCard