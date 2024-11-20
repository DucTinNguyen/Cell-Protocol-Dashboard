import Image from 'next/image'
import React from 'react'
import ic_logo from '@/images/logo.svg'

const HeadCreateProject = () => {
  return (
      <main className='w-full h-20 py-4 bg-[#000000] flex items-center'>
        <section className='w-full lg:max-w-[1200px] mx-auto flex items-center justify-between'>
              <section className='flex items-center gap-x-3 cursor-pointer'>
                  <figure>
                      <Image src={ic_logo} alt='icon logo' width={32} height={32} />
                  </figure>
                  <span className='lg:text-xl text-[#fff] font-normal font-marbold'>CELL PROTOCOL</span>
              </section>  
        </section>
   </main>
  )
}

export default HeadCreateProject