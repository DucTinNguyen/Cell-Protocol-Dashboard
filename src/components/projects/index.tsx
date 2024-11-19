import { IProduct, ISlider, SwiperType } from "@/types";
import React, { useState } from "react";
import thumbnail from "@/images/slider/bg-thumbnail.png";
import avatar from "@/images/slider/avatar.png";
import icPara from "@/images/ic-para.svg";
import Slider from "../slider";
import Image from "next/image";
import ProjectItem from "./item";
import { products } from "@/utils/project";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortValue, setSortValue] = useState("Newest");
  const [showCategories, setShowCategories] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const sortOptions = ["Newest", "Oldest", "A-Z", "Z-A"];
  const categoryOptions = [
    "NFT",
    "Neuroscience",
    "Peer Review",
    "Identity",
    "Reputation",
    "AI",
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const array: ISlider[] = [
    {
      thumbnail: thumbnail,
      logo: avatar.src,
      type: "CoopHive",
      title: "Trading floor for autonomous agents",
      desc: "DeBio is the next evolution of research; onchain, unstoppable and powered by the most cutting-edge technology.",
      category: ["AI", "Computer", "Science Defi"],
    },
    {
      thumbnail: thumbnail,
      logo: avatar.src,
      type: "CoopHive",
      title: "Trading floor for autonomous agents",
      desc: "DeBio is the next evolution of research; onchain, unstoppable and powered by the most cutting-edge technology.",
      category: ["AI", "Computer", "Science Defi"],
    },
  ];

  return (
    <main className="text-white lg:w-[1008px] mx-auto">
      <section className="lg:h-[390px]">
        <Slider data={array} type={1} />
      </section>
      <section className="lg:w-[470px]">
        <div className="flex items-center gap-x-3">
          <figure className="w-8 h-8">
            <Image src={icPara} alt="icon" />
          </figure>
          <span className="text-[#F7FDFD] text-2xl font-normal font-marbold uppercase">
            projects
          </span>
        </div>
        <p className="text-[#798675] text-sm font-semibold mt-4">
          Filter and interact with the world of DeBio. All projects are listed
          by communities and approved by DeBioWorld.
        </p>
      </section>
      {/* TODO */}
      {/* search box */}
      <div className="flex gap-4 w-full items-center justify-start mt-6">
        <div
          className="flex items-center bg-[#1A1A1A] rounded-lg p-3 gap-4
         md:w-[389px] md:h-[44px]
        "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(156 163 175)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none text-white outline-none md:w-[300px] placeholder:text-[14px] placeholder:leading-5 placeholder:text-[rgba(121,134,117,1)]"
          />
        </div>

        <div className="relative w-[144px]">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-2.5 bg-[#1A1A1A] rounded-lg px-6 py-2 h-[44px]"
          >
            <span className="text-[#EFF1F4] text-[14px] leading-5 font-bold">
              Categories
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#F4F4F4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {showCategories && (
            <div className="border border-[#3C3C3C] h-[232px] z-20 shadow-[0px_1px_14.2px_0px_rgba(16,24,40,0.12)] absolute top-full left-0 mt-1 bg-[#090909] rounded-lg w-[144px]">
              {categoryOptions.map((category) => (
                <div
                  key={category}
                  className="flex items-center gap-2 px-4 py-2 text-white hover:bg-[#2A2A2A] cursor-pointer"
                  onClick={() => toggleCategory(category)}
                >
                  {selectedCategories.includes(category) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2 6C2 3.79086 3.79086 2 6 2H14C16.2091 2 18 3.79086 18 6V14C18 16.2091 16.2091 18 14 18H6C3.79086 18 2 16.2091 2 14V6Z"
                        fill="#8CE339"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5304 8.03039L9.00006 13.5607L5.46973 10.0304L6.53039 8.96973L9.00006 11.4394L13.4697 6.96973L14.5304 8.03039Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="16"
                        height="16"
                        rx="4"
                        fill="#3C3C3C"
                      />
                      <rect
                        x="3.5"
                        y="3.5"
                        width="13"
                        height="13"
                        rx="2.6"
                        fill="#0C0D0D"
                      />
                    </svg>
                  )}
                  <span className="text-[14px] leading-5 font-medium text-[#798675]">
                    {category}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative flex items-center gap-2.5 bg-[#1A1A1A] rounded-lg px-6 py-2 h-[44px]">
          <span className="text-[#798675] text-[16px] leading-5 font-semibold">
            Sort by
          </span>
          <div className="text-[14px] leading-5 font-bold text-[#EFF1F4]">
            {sortValue}
          </div>

          <button onClick={() => setShowDropdown(!showDropdown)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#F4F4F4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {showDropdown && (
            <div className="absolute top-full right-0 mt-1 bg-[#1A1A1A] rounded-lg overflow-hidden">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  className="w-full px-4 py-2 text-left text-white hover:bg-[#2A2A2A]"
                  onClick={() => {
                    setSortValue(option);
                    setShowDropdown(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="mt-6">
        <p className="text-[#8CE339] text-sm font-semibold mb-6">
          6 projects available
        </p>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product, index) => {
            return <ProjectItem key={index} product={product} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Projects;
