import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react'




const NewsCategoryPage = async({params}) => {

    const { id } = await params;
    console.log(id, "paramsRes");

    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);
    console.log('news:', JSON.stringify(news, null, 2));
    const newsItems = Array.isArray(news) ? news : [];
    console.log('newsItems length:', newsItems.length);
    const categoryList = Array.isArray(categories) ? categories : [];
    const activeCategory = categoryList.find(category => category.category_id === id);
    const title = activeCategory?.category_name || 'News by category';


  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 my-16">

      {/* Left Sidebar */}
      <div className="col-span-3">
        <LeftSidebar activeId={id} />
      </div>

      {/* Main Content Area */}
      <div className="col-span-6">
        <h2 className="font-bold text-2xl text-gray-800 mb-6">{title}</h2>
        <div className="space-y-6">
          {newsItems.length > 0 ? (
            newsItems.map((n) => (
              <NewsCard key={n._id} news={n} />
            ))
          ) : (
            <h2 className="font-bold text-4xl text-center my-12 text-gray-500">
              No News Found
            </h2>
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="col-span-3">
        <RightSidebar />
      </div>

    </div>
  )
}

export default NewsCategoryPage
