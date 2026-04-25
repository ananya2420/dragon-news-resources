import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.data.news_category, "categories");

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">

      <div className="col-span-3">
        <h2 className="font-bold text-lg">All Categories</h2>

        <ul className="flex flex-col gap-3 mt-6">
          {
            categories.data.news_category.map((category) => (
              <li
                key={category.category_id}
                className="bg-slate-100 text-black p-2 rounded-md font-bold text-center"
              >
                {category.category_name}
              </li>
            ))
          }
        </ul>
      </div>

      <div className="font-bold text-3xl text-black bg-purple-100 col-span-6">
        All News
      </div>

      <div className="font-bold text-3xl text-black bg-yellow-100 col-span-3">
        Social icons
      </div>

    </div>
  );
}