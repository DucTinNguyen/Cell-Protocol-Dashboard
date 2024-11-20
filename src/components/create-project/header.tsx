import Image from 'next/image'
import React from 'react'
import ic_logo from '@/images/logo.svg'
import ProgressNav from './progess'

const HeadCreateProject = ({ currentStep, setCurrentStep }: { currentStep: number, setCurrentStep: (value: number)=> void }) => {
  return (
      <main className='w-full h-20 py-4 bg-[#000000] flex items-center'>
        <section className='w-full lg:max-w-[1200px] mx-auto flex items-center justify-between'>
              <section className='flex items-center gap-x-3 cursor-pointer'>
                  <figure>
                      <Image src={ic_logo} alt='icon logo' width={32} height={32} />
                  </figure>
                  <span className='lg:text-xl text-[#fff] font-normal font-marbold'>CELL PROTOCOL</span>
              </section>  
              <div>
                  <ProgressNav currentStep={currentStep} setCurrentStep={setCurrentStep}/>
              </div>
              <figure className='cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <rect width="40" height="40" rx="10" fill="url(#paint0_linear_51_1850)" fill-opacity="0.2" />
                      <rect x="1" y="1" width="38" height="38" rx="9" stroke="white" stroke-opacity="0.2" stroke-width="2" />
                      <g opacity="0.3">
                          <path d="M15.7574 24.2431L24.2427 15.7578" stroke="#E0DDD9" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M15.7574 15.7579L24.2427 24.2432" stroke="#E0DDD9" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                          <linearGradient id="paint0_linear_51_1850" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                              <stop offset="0.354974" stop-color="#737373" />
                              <stop offset="1" stop-color="#D9D9D9" />
                          </linearGradient>
                      </defs>
                  </svg>
              </figure>
        </section>
          
   </main>
  )
}

export default HeadCreateProject
