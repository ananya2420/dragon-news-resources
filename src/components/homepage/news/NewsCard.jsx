import Link from 'next/link'
import React from 'react'
import { CiBookmark, CiShare2 } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'
import { IoIosStar } from 'react-icons/io'

const NewsCard = ({ news, className }) => {
  return (
    <div className={`card bg-base-100 shadow-sm ${className}`}>
      <figure>
        <img src={news.thumbnail_url} alt={news.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <p className="truncate">{news.details}</p>

        <div className="flex items-center gap-2 mt-4">
          <img
            src={news.author?.img}
            alt={news.author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{news.author?.name}</p>
            <p className="text-sm text-gray-500">
              {news.author?.published_date}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <IoIosStar className="text-lg text-yellow-500" />
              <span>{news.rating?.number}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEye className="text-lg" />
              <span>{news.total_view}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <CiShare2 className="text-xl cursor-pointer" />
            <CiBookmark className="text-xl cursor-pointer" />
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link href={`/news/${news._id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsCard