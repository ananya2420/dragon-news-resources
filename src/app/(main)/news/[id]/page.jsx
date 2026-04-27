import React from 'react';
import Link from 'next/link';
import { getNewsDetailsById } from '@/lib/data';
import { IoIosStar } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { BsArrowRight } from 'react-icons/bs';


export const  generateMetadata=async({params})=>{
  const {id}=await params;

     console.log(id,"params");

  const news=await getNewsDetailsById(id);
  console.log(news,"news");

  return {
    title: news.title,
    description: news.details,
  }
}

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
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={news.thumbnail_url} alt={news.title} />
      </figure>

      <div className="card-body text-sm">
        <h2 className="card-title text-sm">{news.title}</h2>
        <p className="truncate text-sm">{news.details}</p>

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
          <Link href={`/category/${news.category_id}`}>
            <button className="btn bg-purple-500 text-white">See other news in this categories <BsArrowRight /></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;