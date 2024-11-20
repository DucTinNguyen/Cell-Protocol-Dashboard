import React, { useEffect } from 'react'
import ImageUpload from '../image-upload'
import icVideo from '@/images/video.svg'
import InputSocial from '../input-social'
const MediaStep = ({ step, setCurrentStep }: { step: number, setCurrentStep: (step: number) => void }) => {

    const handleNext = () => {
        setCurrentStep(step + 1)
    }

    const handlePrev = () => {
        setCurrentStep(step - 1)
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



  return (
      <main className='text-white w-full lg:w-[800px] mx-auto px-4 lg:px-0'>
          <section className='px-4 lg:px-0 py-10'>
              <section onClick={handlePrev} className='flex items-center gap-x-2 cursor-pointer relative py-2 lg:py-0'>
                  <figure className='w-12 h-12 rounded-full border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.1)] flex items-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                          <path d="M15 7L1 7M1 7L6.25 0.999999M1 7L6.25 13" stroke="#8CE339" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </figure>
                  <span className='text-[#8CE339] text-base font-normal'>Back</span>
              </section>
              <h3 className='text-[#F7FDFD] text-[32px] lg:text-[64px] font-marbold font-normal text-center'>Media</h3>
              <p className='text-[#798675] text-sm lg:text-lg font-medium text-center'>Please, fill out the information below as the best you can. Include any relevant extra information. Contact a Cell Protocol member with any questions.</p>
          </section>
          <section className='w-full flex flex-col gap-10'>
              <ImageUpload label='Project Logo' maxSizeInMB={2} />
              <ImageUpload label='Cover Logo ' type='cover' subtitle='(Used for when the project is featured)' maxSizeInMB={4} />
              <ImageUpload label='Media gallery' type='media' subtitle=' (3 for basic plan, 6 for premium)' maxSizeInMB={2} />
              <InputSocial name='embed videos' type='text' icon={icVideo} required={false} placeholder=''/>
          </section>
          <button onClick={handleNext} className="w-full mt-8 bg-[#F7FDFD] rounded-lg py-2 text-[#010D01] uppercase font-semibold">Continue</button>
      </main>
  )
}

export default MediaStep