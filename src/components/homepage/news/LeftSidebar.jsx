'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const LeftSidebar = ({activeId}) => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) {
    return <div className="text-center mt-6">Loading categories...</div>;
  }

  return (
    <div>
      <ul className="flex flex-col gap-3 mt-6">
        {categories?.data?.news_category?.length ? (
          categories.data.news_category.map((category) => (
            <li
              key={category.category_id}
              className={` ${activeId === category.category_id && "bg-purple-500 text-white"} p-2 rounded-md font-bold text-center`}
            >
              <Link href={`/category/${category.category_id}`} className="block">
                {category.category_name}
              </Link>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">No categories found</li>
        )}
      </ul>
    </div>
  );
};

export default LeftSidebar;
