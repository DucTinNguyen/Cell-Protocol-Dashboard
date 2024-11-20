import Link from 'next/link'
import React, { useEffect } from 'react'

const ProjectSubmitted = () => {



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

  return (
      <main className='lg:pt-20'>
          <section className='text-white w-full lg:w-[622px] mx-auto'>
              <figure className='w-[60px] h-[60px] bg-[#8CE339] rounded-full flex items-center justify-center mx-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <path d="M10.0132 16.8301C11.3287 17.7868 13.9598 20.4179 15.0361 22.2118C16.3517 19.3415 19.7003 12.8834 23.2881 10.0132" stroke="#010D01" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </figure>
              <h3 className='text-[#F7FDFD] text-[32px] lg:text-[64px] font-marbold font-normal text-center'>Project submitted!</h3>
              <p className='text-lg lg:text-2xl font-semibold text-[#E0DDD9] text-center'>We’re reviewing your listing, it won’t take long</p>
              <p className='text-[#798675] text-lg font-medium text-center'>Please pay attention to your profile notifications for an update. If you have any further queries, contact a Cell Protocol member for help.</p>
              <Link href={`/?tab=project`} className="w-fit block mx-auto mt-8 bg-[#F7FDFD] rounded-lg py-4 px-6 text-[#010D01] uppercase font-semibold">Back to home</Link>
          </section>
          
      </main>
  )
}

export default ProjectSubmitted