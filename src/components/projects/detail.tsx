'use client'
import React from 'react'
import bgDetail from '@/images/bg-detail.png'
import Image from 'next/image'
import { products } from '@/utils/project'
import { CarouselProjectDetail } from './gallery'
import { useRouter } from 'next/navigation'
const ProjectDetail = ({ projectId }: { projectId: number }) => {
    
    const project = products.find(product => product.id === projectId);
    const router = useRouter();
    const infor = [
        {
            title: 'City',
            value: 'Worldwide'
        },
        {
            title: 'Created by',
            value: 'pmoncada'
        },
        {
            title: 'Listing date',
            value: '18 Nov 2024'
        }

    ]

    const handleBack = () => { 
        router.push(`?tab=project`)
    }


  return (
      <main className='lg:w-[1100px] mx-auto pb-20 lg:pb-0 px-4 lg:px-0'>
          <Image src={bgDetail} alt='bg detail' className='absolute top-0 left-1/2 -translate-x-1/2 w-full' />
          <section onClick={handleBack} className='flex items-center gap-x-2 cursor-pointer relative py-2 lg:py-0'>
              <figure className='w-12 h-12 rounded-full border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.1)] flex items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                      <path d="M15 7L1 7M1 7L6.25 0.999999M1 7L6.25 13" stroke="#8CE339" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </figure>
              <span className='text-[#8CE339] text-base font-normal'>Back</span>
          </section>
          <section className='relative flex-col lg:flex-row flex gap-x-6'>
              <div className='grow py-3'>
                  <div className='flex items-center gap-x-3'>
                      <figure className='w-[120px] h-[120px] flex items-center justify-center'>
                          <Image src={project?.logo} alt='product'/>
                      </figure>
                      <div>
                          <h3 className='text-2xl font-normal font-marbold uppercase text-[#F7FDFD]'>{project?.title}</h3>
                          <p className='text-base font-medium text-[#E0DDD9] my-3'>{project?.desc}</p>
                          <p className='flex items-center gap-x-2'>
                              {project?.category.map((text, index) => {
                                  return (
                                      <span
                                          style={{
                                              background: 'rgba(255, 255, 255, 0.10)'
                                          }}
                                          className='flex items-center p-1 px-2 justify-center min-w-10 h-[28px] w-fit backdrop-blur-[5px] rounded-[100px] text-sm text-[#F7FDFD]' key={index}>{text}</span>
                                  )
                              })}
                          </p>
                      </div>
                  </div>
                  <div className='flex flex-wrap px-2 justify-center lg:justify-start gap-2 mt-6'>
                      {infor.map((item, index) => { 
                          return (
                              <div key={index} className='rounded-lg border border-[#3C3C3C] bg-[#0C0D0D] px-4 py-3 min-w-[160px]'>
                                  <span className='block text-sm font-medium text-[#798675]'>{item.title}</span>
                                  <span className='text-[#F7FDFD] uppercase text-sm font-bold'>{item.value}</span>
                              </div>
                          )
                      })}
                  </div>
                  <CarouselProjectDetail />
                    
                  <div>
                      <p className='text-[#F7FDFD] text-base font-normal uppercase font-marbold mb-3'>About</p>
                      <p className='text-sm font-medium text-[#798675]'>MoonDAO is accelerating our multiplanetary future with a global network and open platform to fund, collaborate, and compete on challenges that get us closer to a lunar settlement.</p>
                  </div>

              </div>

              <div className='w-full lg:w-[300px] h-fit p-6 z-10 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(25,25,25,0.3)] backdrop-blur-sm'>
                  <p className='text-base font-normal font-marbold uppercase text-[#F7FDFD]'>Support MoonDAO</p>
                  <p className='text-base font-medium text-[#798675] my-3'>Explore and engage with MoonDAO via the provided links.</p>
                  <button
                      className='w-full h-12 rounded-lg flex items-center justify-center gap-x-1'
                      style={{
                          background: 'linear-gradient(0deg, #DFFBBF 0%, #D3FF33 27.6%, #65CF21 110.42%)'
                  }}
                  >
                      <span className='text-[#0C2504] text-sm font-semibold'>Contribute</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M7.37644 1.10776C7.09077 0.807811 6.61604 0.796232 6.31609 1.0819C6.01614 1.36756 6.00457 1.84229 6.29023 2.14224L7.37644 1.10776ZM11 6L11.5431 6.51724C11.819 6.22759 11.819 5.77241 11.5431 5.48276L11 6ZM6.29023 9.85776C6.00457 10.1577 6.01614 10.6324 6.31609 10.9181C6.61604 11.2038 7.09077 11.1922 7.37644 10.8922L6.29023 9.85776ZM1 5.25L0.25 5.25L0.25 6.75L1 6.75L1 5.25ZM6.29023 2.14224L10.4569 6.51724L11.5431 5.48276L7.37644 1.10776L6.29023 2.14224ZM10.4569 5.48276L6.29023 9.85776L7.37644 10.8922L11.5431 6.51724L10.4569 5.48276ZM11 5.25L1 5.25L1 6.75L11 6.75L11 5.25Z" fill="black" />
                      </svg>
                  </button>
              </div>

          </section>
      </main>
  )
}

export default ProjectDetail