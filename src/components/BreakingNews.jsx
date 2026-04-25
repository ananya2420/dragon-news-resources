import React from 'react'
import Marquee from 'react-fast-marquee'

const BreakingNews = () => {

    const news = [
  {
    _id: 1,
    title: "Breaking news: major event unfolds in the city"
  },
  {
    _id: 2,
    title: "Breaking news: new policy announced by government"
  },
  {
    _id: 3,
    title: "Breaking news: sports team wins championship"
  }
];

  return (
    <div className='flex justify-between gap-4 items-center bg-gray-200 text-black py-4 px-2 container mx-auto'>
        <button className='btn bg-pink-500 txt-white'>Lattest news</button>
      <Marquee pauseOnHover={true} speed={100}>
        {news.map(n=>{
           return <span key={n._id}>{n.title}</span>
        })}
       

      </Marquee>
    </div>
  )
}

export default BreakingNews
