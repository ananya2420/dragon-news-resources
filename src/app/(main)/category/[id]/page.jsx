import LeftSidebar from '@/components/homepage/news/LeftSidebar';
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
     <div className="container mx-auto grid grid-cols-12 gap-4 my-15">

      <div className="col-span-3">
         <LeftSidebar activeId={id}/>
      </div>

      <div className="font-bold text-3xl text-black bg-purple-100 col-span-6">
        <h2 className='font-bold text-lg'>{title}</h2>
        <div className="space-y-4 mt-6">
        {
          newsItems.length > 0 ? newsItems.map(n=>{
            return <div key={n._id} className="p-6 rounded-md border">
              {n.title}
            </div>
          }):<h2 className='font-bold text-4xl text-center my-7'>No News Found</h2>}
        </div>
      </div>

      <div className="bg-yellow-100 col-span-3">
        <RightSidebar />
      </div>

    </div>
  )
}

export default NewsCategoryPage
