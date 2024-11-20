import React from 'react'
import ImageUpload from '../image-upload'
import InputWithoutLabel from '../input'
import InputSocial from '../input-social'
import ic_website from '@/images/website.svg'
import ic_twitter from '@/images/twitter.svg'
import ic_discord from '@/images/discord.svg'
import ic_farcater from '@/images/farcaster.svg'
import ic_linkedin from '@/images/linkedin.svg'
import ic_blog from '@/images/blog.svg'
import ic_document from '@/images/document.svg'
import ic_github from '@/images/github.svg'
import ic_cloud from '@/images/ic_cloud.svg'
const Member = () => {
  return (
      <main className='text-white w-full lg:w-[800px] mx-auto px-4 lg:px-0'>
          <section className='px-4 lg:px-0 py-10'>
              <section className='flex items-center gap-x-2 cursor-pointer relative py-2 lg:py-0'>
                  <figure className='w-12 h-12 rounded-full border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.1)] flex items-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                          <path d="M15 7L1 7M1 7L6.25 0.999999M1 7L6.25 13" stroke="#8CE339" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                  </figure>
                  <span className='text-[#8CE339] text-base font-normal'>Back</span>
              </section>
              <h3 className='text-[#F7FDFD] text-[32px] lg:text-[64px] font-marbold font-normal text-center'>Members</h3>
              <p className='text-[#798675] text-sm lg:text-lg font-medium text-center'>Please, fill out the information below as the best you can. Include any relevant extra information. Contact a Cell Protocol member with any questions.</p>
          </section>
          <section className='w-full flex flex-col gap-6'>
              <ImageUpload label='Member' type='member' />
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                  <InputWithoutLabel defaultValue='Worker' name='name' placeholder='' type='text' required={false} />
                  <InputWithoutLabel defaultValue='CTO' name='job' placeholder='' type='text' required={false} />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  <InputSocial placeholder='' type='text' required={false} icon={ic_twitter} />
                  <InputSocial placeholder='' type='text' required={false} icon={ic_linkedin} />
                  <InputSocial placeholder='' type='text' required={false} icon={ic_cloud} />
              </div>
          </section>
          <button className="w-full mt-8 bg-[#F7FDFD] rounded-lg py-2 text-[#010D01] uppercase font-semibold">Continue</button>
      </main>
  )
}

export default Member