'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import rectangle from "../../../assets/Rectangle .png"
import rectangle2 from "../../../assets/Rectangle 2_edited.png"
import rectangle3 from "../../../assets/Rectangle 3_edited.png"

const LeftSidebar = ({ activeId }) => {
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
    return <div className="text-center text-white mt-6">Loading categories...</div>;
  }

  return (
    <>
      <div>
        <ul className="flex flex-col gap-3 mt-6">
          {categories?.data?.news_category?.length ? (
            categories.data.news_category.map((category) => (
              <li
                key={category.category_id}
                className={`${activeId === category.category_id && "bg-purple-500 text-white"} p-2 rounded-md font-bold text-center`}
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

      <div className="bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">
          Q-Zone
        </h2>

        <div className="space-y-4">

          {/* Swimming */}
          <div className="bg-white rounded-md shadow-sm p-2">
            <div className="relative w-full h-40">
              <Image src={rectangle.src} alt="rectangle" width={300} height={200} />
            </div>
            <p className="text-center font-medium mt-2">
              Swimming
            </p>
          </div>

          {/* Class */}
          <div className="bg-white rounded-md shadow-sm p-2">
            <div className="relative w-full h-40">
           
              <Image src={rectangle2.src} alt="rectangle" width={300} height={200} />
            </div>
            <p className="text-center font-medium mt-2">
              Class
            </p>
          </div>

          {/* Playground */}
          <div className="bg-white rounded-md shadow-sm p-2">
            <div className="relative w-full h-40">
             <Image src={rectangle3.src} alt="rectangle" width={300} height={200} />
            </div>
            <p className="text-center font-medium mt-2">
              Play Ground
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
