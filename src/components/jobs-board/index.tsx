import React, { useState } from "react";
import Slider from "../slider";
import { ISlider, Job, SwiperType } from "@/types";
import thumbnail from "@/images/slider/bg-thumbnail.png";
import avatar from "@/images/slider/avatar1.png";
import Image from "next/image";
import icPara from "@/images/ic-para.svg";
import JobBoardItem from "./item";
const JobBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortValue, setSortValue] = useState("Newest");
  const sortOptions = ["Newest", "Oldest", "A-Z", "Z-A"];

  const array: ISlider[] = [
    {
      thumbnail: thumbnail,
      logo: avatar,
      type: "CoopHive",
      title: "Staff front end engineer",
      desc: `We are seeking a passionate and detail-oriented Front-End Engineer to develop and maintain high-quality user interfaces for DeBio's web applications. You will collaborate closely with our design and backend teams to create responsive, intuitive, and visually appealing web experiences. `,
      category: ["New York, United State", "Employee", "Hybrid"],
    },
    {
      thumbnail: thumbnail,
      logo: avatar,
      type: "CoopHive",
      title: "Staff back end engineer",
      desc: `We are seeking a passionate and detail-oriented Front-End Engineer to develop and maintain high-quality user interfaces for DeBio's web applications. You will collaborate closely with our design and backend teams to create responsive, intuitive, and visually appealing web experiences. `,
      category: ["New York, United State", "Employee", "Hybrid"],
    },
  ];

  const jobListings: Job[] = [
    {
      title: "VIDEO EDITOR",
      date: "18 NOV, 2024",
      description:
        "We are seeking a creative and experienced Video Editor to produce high-quality video content that supports DeBio's branding and marketing campaign...",
      location: "Global, United Kingdom",
      type: "Employee",
      workMode: "Remote",
      company: "DEBIOWORLD",
      createdBy: "Jack",
      applyLink: "#",
    },
    {
      title: "UI/UX DESIGNER",
      date: "19 NOV, 2024",
      description:
        "Looking for an innovative UI/UX Designer to create intuitive and engaging user experiences for our blockchain-based platforms...",
      location: "Global, Singapore",
      type: "Employee",
      workMode: "Remote",
      company: "DEBIOWORLD",
      createdBy: "Sarah",
      applyLink: "#",
    },
    {
      title: "BLOCKCHAIN DEVELOPER",
      date: "20 NOV, 2024",
      description:
        "Seeking an experienced Blockchain Developer to build and maintain decentralized applications and smart contracts...",
      location: "Global, Germany",
      type: "Employee",
      workMode: "Remote",
      company: "DEBIOWORLD",
      createdBy: "Mike",
      applyLink: "#",
    },
  ];

  return (
    <main className="text-white lg:w-[1008px] mx-auto">
      <section className="lg:h-[390px]">
        <Slider data={array} type={2} />
      </section>
      <section className="lg:w-[470px]">
        <div className="flex items-center gap-x-3">
          <figure className="w-8 h-8">
            <Image src={icPara} alt="icon" />
          </figure>
          <span className="text-[#F7FDFD] text-2xl font-normal uppercase font-marbold">
            Job board
          </span>
        </div>
        <p className="text-[#798675] text-sm font-semibold mt-4">
          Find trusted work opportunities and work with the best companies in
          DeBio. Applications for listed jobs are currently facilitated through
          external links.
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
          3 jobs available
        </p>
        <div className="grid grid-cols-3 gap-4">
          {jobListings.map((job, index) => {
            return <JobBoardItem key={index} job={job} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default JobBoard;
