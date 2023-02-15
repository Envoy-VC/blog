import React from "react";
import Image from "next/image";

const PostCard = () => {
  const cover =
    "https://assets.website-files.com/6086f3afee58e6a9bb6c8053/63cf769ff1ef1aba0291266b_txn-sim-blog.jpg";
  const title = "Example Blog Post Title";
  const tags = ["JAVASCRIPT", "REACT", "WEB3"];
  const series = "Beyond Crypto";
  return (
    <div className="bg-white hover:rounded-md hover:shadow-card w-full">
      <div className="relative">
        <Image
          src={cover}
          alt={title}
          width={1000}
          height={420}
          className="object-fill relative w-auto. h-[220px] sm:h-[160px] lg:h-[180px] rounded-[4px] hover:rounded-[8px]"
        />
      </div>
      <div className="p-4 pt-2">
        <div className="flex flex-wrap mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#eaeaea] text-[#363ff9] font-Rubik text-[10px] p-[6px] mt-[8px] mr-[4px] ml-[4px] leading-[10px] font-bold tracking-[1px] rounded-[4px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-medium mt-2 font-Rubik">{title}</h2>
        <p className="text-gray-500 text-sm mt-2 font-Rubik">{series}</p>
      </div>
    </div>
  );
};

export default PostCard;
