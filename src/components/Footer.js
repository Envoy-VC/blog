import twitter from "../assets/logos/twitter.png";
import dev from "../assets/logos/dev.png";
import email from "../assets/logos/email.png";
import github from "../assets/logos/github.png";
import linkedin from "../assets/logos/linkedin.png";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const popularPosts = [
    {
      id: 1,
      title: "Hellow Web3",
      url: "/post/1",
    },
    {
      id: 2,
      title:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url: "/post/2",
    },
    {
      id: 3,
      title:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      url: "/post/3",
    },
  ];
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-16 flex flex-wrap justify-between items-center px-4 sm:px-2 lg:px-0 max-w-[1200px] whitespace-normal">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Vedant Chainani</h3>
          <p className="text-gray-500">Junior Web3 Developer</p>
          <div className="mt-4 flex flex-wrap">
            <div className="min-w-[45px] min-h-[45px] bg-[#505050] flex justify-center items-center rounded-[4px] mr-2">
              <a href="#">
                <Image
                  src={twitter}
                  width={25}
                  height={25}
                  alt="Example Image"
                />
              </a>
            </div>
            <div className="min-w-[45px] min-h-[45px] bg-[#505050] flex justify-center items-center rounded-[4px] mx-2">
              <a href="#">
                <Image
                  src={linkedin}
                  width={25}
                  height={25}
                  alt="Example Image"
                />
              </a>
            </div>
            <div className="min-w-[45px] min-h-[45px] bg-[#505050] flex justify-center items-center rounded-[4px] mx-2">
              <a href="#">
                <Image src={dev} width={30} height={30} alt="Example Image" />
              </a>
            </div>
            <div className="min-w-[45px] min-h-[45px] bg-[#505050] flex justify-center items-center rounded-[4px] ml-2">
              <a href="#">
                <Image
                  src={github}
                  width={25}
                  height={25}
                  alt="Example Image"
                />
              </a>
            </div>
            <div className="min-w-[45px] min-h-[45px] bg-[#505050] flex justify-center items-center rounded-[4px] mx-2">
              <a href="#">
                <Image src={email} width={25} height={25} alt="Example Image" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0 mt-8">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-gray-500">Subscribe for the latest updates</p>
            <div className="mt-4 flex flex-wrap">
              <input
                type="email"
                placeholder="Enter your email address"
                className=" bg-[#222222] py-2 px-3 rounded-l-md w-[200px] md:w-56 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#222222] text-white py-2 px-4 rounded-r-md font-medium hover:bg-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#414348"
                >
                  <path d="M10.95 4.95l7.07 7.07-7.07 7.07-1.41-1.41 5.66-5.66-5.66-5.66z" />
                  <path d="M0-.5h24v24h-24z" fill="none" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-col w-full sm:w-1/2 lg:w-1/4 mb-8">
          <h2 className="text-lg font-bold mb-4">Popular Posts</h2>
          <ul>
            {popularPosts.map((post) => (
              <li key={post.id} className="flex flex-wrap mb-2">
                <Link href={post.url}>
                  <div className="text-gray-400 hover:text-gray-200">
                    {post.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="text-gray-500 mt-4">
            Get in touch with me for collaborations or any queries
          </p>
          <ul className="mt-4 text-[#b8b8b8]">
            <li className="flex items-center mb-1">
              <span>Maharashtra, India</span>
            </li>
            <li className="flex items-center mb-1">
              <span>+91 70200-84608</span>
            </li>
            <li className="flex items-center mb-1">
              <a href="mailto:vedantchainani1084@gmail.com">
                <span>vedantchainani1084@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto py-4 border-solid border-t-2 border-[#333]">
        <div className="container mx-auto text-white text-sm">
          <p>© 2023 Vedant Chainani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
