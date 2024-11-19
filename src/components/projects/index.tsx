import { IProduct, ISlider, SwiperType } from '@/types'
import React from 'react'
import thumbnail from '@/images/slider/bg-thumbnail.png'
import avatar from '@/images/slider/avatar.png'
import icPara from '@/images/ic-para.svg'
import Slider from '../slider'
import Image from 'next/image'
import ProjectItem from './item'
import { products } from '@/utils/project'


const Projects = () => {

    const array: ISlider[] = [
        {
            thumbnail: thumbnail,
            logo: avatar.src,
            type: 'CoopHive',
            title: 'Trading floor for autonomous agents',
            desc: 'DeBio is the next evolution of research; onchain, unstoppable and powered by the most cutting-edge technology.',
            category: ['AI', 'Computer', 'Science Defi']
        },
        {
            thumbnail: thumbnail,
            logo: avatar.src,
            type: 'CoopHive',
            title: 'Trading floor for autonomous agents',
            desc: 'DeBio is the next evolution of research; onchain, unstoppable and powered by the most cutting-edge technology.',
            category: ['AI', 'Computer', 'Science Defi']
        }
    ]

  return (
    <main className='text-white lg:w-[1008px] mx-auto'>
          <section className='lg:h-[390px]'>
            <Slider data={array} type={1}/>
          </section> 
          <section className='lg:w-[470px]'>
              <div className='flex items-center gap-x-3'>
                  <figure className='w-8 h-8'>
                      <Image src={icPara} alt='icon'/>
                  </figure>
                  <span className='text-[#F7FDFD] text-2xl font-normal font-marbold uppercase'>projects</span>
              </div>
              <p className='text-[#798675] text-sm font-semibold mt-4'>Filter and interact with the world of DeBio. All projects are listed by communities and approved by DeBioWorld.</p>
          </section>
          {/* TODO */}
          <div></div>

          <section className='mt-6'>
              <p className='text-[#8CE339] text-sm font-semibold mb-6'>6 projects available</p>
              <div className='grid grid-cols-3 gap-4'>
                  {products.map((product, index) => {
                      return <ProjectItem key={index} product={product} />
                  })}
              </div>
          </section>
    </main>
  )
}

export default Projects