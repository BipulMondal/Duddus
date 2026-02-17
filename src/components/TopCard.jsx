import React from 'react'

const TopCard = () => {
    const cart = [1,2,3]
  return (
    <div className='top-card-main'>
        {cart.map((item, index) => (
            <div key={index} className='top-card-item'>
                 {item}
            </div>
        ))}
    </div>
  )
}

export default TopCard