import Link from 'next/link'
import React from 'react'
import { CiBookmark, CiShare2 } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'

const NewsCard = ({ news, className }) => {
  return (
    <div className={`card bg-base-100 border border-gray-200 rounded-md mb-6 ${className}`}>
      
      {/* 1. Author & Action Header (Top Part) */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-t-md">
        <div className="flex items-center gap-3">
          <img
            src={news.author?.img}
            alt={news.author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-bold text-gray-800 text-sm">{news.author?.name || "Unknown Author"}</p>
            <p className="text-xs text-gray-500">{news.author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600">
          <CiBookmark className="text-2xl cursor-pointer" />
          <CiShare2 className="text-2xl cursor-pointer" />
        </div>
      </div>

      {/* 2. Title & Image (Body Part) */}
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold text-gray-800 leading-tight">
          {news.title}
        </h2>

        <figure className="w-full px-4 flex justify-center"> {/* flex এবং justify-center যোগ করা হয়েছে */}
  <img 
    src={news.thumbnail_url} 
    alt={news.title} 
    className="w-1/2 h-32 object-cover rounded-md" // h-32 (উচ্চতা) এবং w-1/2 (উইডথ) করা হয়েছে
  />
</figure>

        <p className="text-gray-600 text-sm leading-6">
          {news.details.slice(0, 250)}...
          <Link href={`/news/${news._id}`} className="text-orange-500 font-bold ml-1">
            Read More
          </Link>
        </p>

        <hr className="border-gray-200" />

        {/* 3. Rating & Views (Footer Part) */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <span className="text-gray-600 font-medium">{news.rating?.number}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaEye className="text-lg" />
            <span className="font-medium">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard