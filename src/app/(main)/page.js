
import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">

      <div className="col-span-3">
         <LeftSidebar activeId={null}/>
      </div>

      <div className="font-bold text-3xl text-black bg-purple-100 col-span-6">
        All News
      </div>

      <div className="bg-yellow-100 col-span-3">
        <RightSidebar />
      </div>

    </div>
  );
}