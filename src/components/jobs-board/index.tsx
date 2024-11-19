import React from 'react'
import Slider from '../slider'
import { ISlider, Job, SwiperType } from '@/types'
import thumbnail from '@/images/slider/bg-thumbnail.png'
import avatar from '@/images/slider/avatar1.png'
import Image from 'next/image'
import icPara from '@/images/ic-para.svg'
import JobBoardItem from './item'
const JobBoard = () => {


  const array: ISlider[] = [
    {
      thumbnail: thumbnail,
      logo: avatar,
      type: 'CoopHive',
      title: 'Staff front end engineer',
      desc: `We are seeking a passionate and detail-oriented Front-End Engineer to develop and maintain high-quality user interfaces for DeBio's web applications. You will collaborate closely with our design and backend teams to create responsive, intuitive, and visually appealing web experiences. `,
      category: ['New York, United State', 'Employee', 'Hybrid']
    },
    {
      thumbnail: thumbnail,
      logo: avatar,
      type: 'CoopHive',
      title: 'Staff back end engineer',
      desc: `We are seeking a passionate and detail-oriented Front-End Engineer to develop and maintain high-quality user interfaces for DeBio's web applications. You will collaborate closely with our design and backend teams to create responsive, intuitive, and visually appealing web experiences. `,
      category: ['New York, United State', 'Employee', 'Hybrid']
    }
  ]

  const jobListings: Job[] = [
    {
      title: "VIDEO EDITOR",
      date: "18 NOV, 2024",
      description: "We are seeking a creative and experienced Video Editor to produce high-quality video content that supports DeBio's branding and marketing campaign...",
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
      description: "Looking for an innovative UI/UX Designer to create intuitive and engaging user experiences for our blockchain-based platforms...",
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
      description: "Seeking an experienced Blockchain Developer to build and maintain decentralized applications and smart contracts...",
      location: "Global, Germany",
      type: "Employee",
      workMode: "Remote",
      company: "DEBIOWORLD",
      createdBy: "Mike",
      applyLink: "#",
    }
  ];



  return (
    <main className='text-white lg:w-[1008px] mx-auto'>
      <section className='lg:h-[390px]'>
        <Slider data={array} type={2}/>
      </section>
      <section className='lg:w-[470px]'>
        <div className='flex items-center gap-x-3'>
          <figure className='w-8 h-8'>
            <Image src={icPara} alt='icon' />
          </figure>
          <span className='text-[#F7FDFD] text-2xl font-normal uppercase font-marbold'>Job board</span>
        </div>
        <p className='text-[#798675] text-sm font-semibold mt-4'>Find trusted work opportunities and work with the best companies in DeBio. Applications for listed jobs are currently facilitated through external links.</p>
      </section>
      {/* TODO */}
      <div></div>

      <section className='mt-6'>
        <p className='text-[#8CE339] text-sm font-semibold mb-6'>3 jobs available</p>
        <div className='grid grid-cols-3 gap-4'>
          {jobListings.map((job, index) => {
            return <JobBoardItem key={index} job={job} />
          })}
        </div>
      </section>
    </main>
  )
}

export default JobBoard