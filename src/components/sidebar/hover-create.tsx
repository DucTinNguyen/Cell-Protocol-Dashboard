import React from 'react'
import icRocket from '@/images/rocket.svg'
import icEvent from '@/images/event.svg'
import icJob from '@/images/job.svg'
import Image from 'next/image'


const list = [
    {
        icon: icRocket,
        title: 'Project',
        desc: 'Create a listing for Desci project',
        isComing: false,
    },
    {
        icon: icEvent,
        title: 'Events',
        desc: 'Add your  Desci event to the  Calendar',
        isComing: true,
    },
    {
        icon: icJob,
        title: 'Jobs',
        desc: 'List your DeSci job on  our Board',
        isComing: true,
    },
]

const PopHoverCreate = ({ isCreating }: { isCreating: boolean}) => {
  return (
      <main className={`${isCreating ? 'opacity-100 w-full md:w-[435px] h-[290px] md:h-[238px]' : 'opacity-0 w-0 h-0'} z-10 transition-all ease-linear duration-200   bg-[rgba(255,255,255,0.05)] border-[2px] border-[rgba(255,255,255,0.08)] backdrop-blur-lg rounded-lg absolute bottom-[115px] lg:bottom-[170px] left-6`}>
        <section className='py-6 px-4 flex flex-col gap-y-6'>
              {list.map((item, index) => {
                  return (
                    <div key={index} className='flex items-center justify-between'>
                          <div className='flex items-center gap-x-4'>
                              <Image src={item.icon} alt='icon' />
                              <p>
                                  <span className='block mb-1 text-[#F7FDFD] text-base font-semibold'>{item.title}</span>
                                  <span className='text-[#798675] text-sm font-semibold'>{item.desc}</span>
                              </p>
                          </div>
                          {item.isComing && <span className='inline-block bg-[#8CE339] text-center shadow-[0px_4px_32px_0px_rgba(204,255,123,0.7)] text-xs text-[#2F590F] font-semibold px-2 py-1 rounded-full' >Coming soon</span>}
                    </div>
                )
            })}
        </section>
    </main>
  )
}

export default PopHoverCreate