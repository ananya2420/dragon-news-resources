import React from 'react';
import Link from 'next/link';
import { getNewsDetailsById } from '@/lib/data';
import { IoIosStar } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { BsArrowRight } from 'react-icons/bs';


export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  

  const news = await getNewsDetailsById(id);

  
  if (!news) {
    return {
      title: "News Not Found",
      description: "The requested news could not be found."
    };
  }

  return {
    title: news.title,
    description: news.details?.slice(0, 160), 
  };
};

const NewsDetailsPage = async ({ params }) => {

  const { id } = await params;

  const news = await getNewsDetailsById(id);

  if (!news) {
    return (
      <div className="text-center my-10">
        <h2 className="text-xl font-semibold">News not found</h2>
      </div>
    );
  }

 return (
    <div className="card bg-base-100 border border-gray-200 rounded-md p-5 shadow-sm max-w-4xl mx-auto">
      
      {/* 1. Header: Author and Actions */}
      <div className="flex items-center justify-between mb-6 bg-gray-50 p-3 rounded-md">
        <div className="flex items-center gap-3">
          <img
            src={news.author?.img}
            alt={news.author?.name}
            className="w-12 h-12 rounded-full object-cover border border-gray-300"
          />
          <div>
            <p className="font-bold text-gray-800">{news.author?.name || "Unknown Author"}</p>
            <p className="text-xs text-gray-500">{news.author?.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-600 text-2xl">
          <CiBookmark className="cursor-pointer hover:text-purple-500" />
          <CiShare2 className="cursor-pointer hover:text-purple-500" />
        </div>
      </div>

      {/* 2. Main Content: Title and Large Image */}
      <div className="space-y-5">
        <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
          {news.title}
        </h2>

          <figure className="w-full px-4 flex justify-center"> {/* flex এবং justify-center যোগ করা হয়েছে */}
  <img 
    src={news.thumbnail_url} 
    alt={news.title} 
    className="w-1/2 h-32 object-cover rounded-md" // h-32 (উচ্চতা) এবং w-1/2 (উইডথ) করা হয়েছে
  />
</figure>

        {/* Full Details Text */}
        <p className="text-gray-700 text-base leading-relaxed text-justify mt-6">
          {news.details}
        </p>

        <hr className="border-gray-200 my-6" />

        {/* 3. Footer: Ratings, Views, and Back Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex text-orange-400 text-xl">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
              </div>
              <span className="font-bold text-gray-700">{news.rating?.number}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500">
              <FaEye className="text-xl" />
              <span className="font-medium">{news.total_view}</span>
            </div>
          </div>

          <Link href={`/category/${news.category_id}`}>
           <button 
  style={{ backgroundColor: '#9333ea', color: 'white' }} 
  className="btn border-none flex items-center gap-2 px-6"
>
  All news in this category <BsArrowRight className="text-lg" />
</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;