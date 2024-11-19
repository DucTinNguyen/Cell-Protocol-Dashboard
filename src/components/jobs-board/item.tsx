import { Job } from '@/types'
import React from 'react'
import icBriefcase from '@/images/jobs/ic-bag.svg'
import icCalendar from '@/images/ic-calendar.svg'
import icLocation from '@/images/location.svg'
import icEmployee from '@/images/employee.svg'
import icRemote from '@/images/remote.svg'
import icDebio from '@/images/debio.svg'
import icApply from '@/images/apply.svg'
import Image from 'next/image'



const JobBoardItem = ({ job }: { job: Job }) => {
  return (
      <main className='border border-[#3c3c3c] bg-[#0C0D0D] rounded-lg p-4 hover:border-[#8CE339] hover:bg-[#0C2504] transition-all ease-linear duration-200'>
          <figure className='w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center'>
              <Image src={icBriefcase} alt='briefcase' width={20} height={20}/>
          </figure>      
          <h2 className='text-sm font-bold uppercase text-white mb-2 mt-3'>{job.title}</h2>
          <div className='flex items-center gap-x-1'>
              <Image src={icCalendar} alt='calendar' />
              <span className='text-xs font-semibold text-[#798675]'>{job.date}</span>
          </div>
          <p className='text-sm font-medium text-[#798675] line-clamp-3 my-3'>{job.description}</p>
          <section className='flex flex-col gap-3'>
              <div className='flex items-center gap-x-2'>
                  <Image src={icLocation} alt='location' />
                  <span className='text-sm font-bold text-white'>{job.location}</span>
              </div>
              <div className='flex items-center gap-x-2'>
                  <Image src={icEmployee} alt='location' />
                  <span className='text-sm font-bold text-white'>{job.type}</span>
              </div>
              <div className='flex items-center gap-x-2'>
                  <Image src={icRemote} alt='location' />
                  <span className='text-sm font-bold text-white'>{job.workMode}</span>
              </div>
              <div className='flex items-center gap-x-2'>
                  <Image src={icDebio} alt='location' />
                  <p className=''>
                      <span className='text-sm font-bold block text-white'>{job.company}</span>
                      <span className='text-xs font-semibold text-[#798675]'>Created by <span className='text-xs underline font-semibold text-[#8CE339]'>{job.createdBy}</span></span>
                  </p>
              </div>
          </section>
          <button
              style={{
                  boxShadow: '0px 0px 40px 5px rgba(140, 227, 57, 0.40)'
              }}
              className='w-full bg-[#F7FDFD] rounded-lg flex items-center justify-center py-3 mt-4'>
              <span className='text-[#010D01] text-sm font-semibold uppercase'>Apply</span>
              <Image src={icApply} alt='icon apply'/>
          </button>
   </main>
  )
}

export default JobBoardItem