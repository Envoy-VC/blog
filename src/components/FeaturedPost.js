import Image from "next/image";

const FeaturedPost = () => {
  const cover =
    "https://assets.website-files.com/6086f3afee58e6a9bb6c8053/63cf769ff1ef1aba0291266b_txn-sim-blog.jpg";
  const title = "Example Blog Post Title";
  const author = "John Doe";
  const avatar =
    "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6a31lff34nyeyq3iahf6.png";
  const date = "February 14, 2023";
  return (
    <div className="max-w-[1200px] min-h-[200px] mx-auto flex flex-row flex-wrap px-[4px] sm:px-[16px] md:px-6 xl:px-0 pb-16 border-solid border-b-2 border-[#DEDEDE] h-auto">
      <div className="md:h-[400px] justify-center">
        <Image
          src={cover}
          alt={title}
          width={700}
          height={400}
          quality={100}
          className="w-[700px] h-[300px] px-[0px] md:px-0 md:w-[700px] md:h-[400px] sm:h-[350px] object-fill relative rounded-md lg:object-none"
        />
      </div>
      <div className="flex flex-col justify-between pl-8 flex-wrap">
        <div>
          <h1 className="text-2xl font-light font-Rubik pt-12 sm:pt-24  text-[32px]">
            {title}
          </h1>
        </div>
        <div className="flex items-center mt-4 pb-4">
          <div className="w-50 h-50 rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt={title}
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-fill"
            />
          </div>
          <div className="flex flex-col ml-3">
            <span className="font-medium">{author}</span>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
