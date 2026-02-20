import React from 'react'
import Notify from '../components/Notify'

interface DateItem {
  day: string;
  count: number;
}

const Notification = () => {

  const dates: DateItem[] = [
    { day: "TODAY", count:1 },
    { day: "YESTERDAY", count:2 },
    { day: "16/02/2026", count:3 },
  ]

  return (
    <div className='p-5'>
      {dates.map((item) => (
        <Notify key={item.day} day={item.day} count={item.count} />
      ))}
    </div>
  )
}

export default Notification
