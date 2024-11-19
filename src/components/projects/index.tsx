import { IProduct, ISlider, SwiperType } from '@/types'
import React from 'react'
import thumbnail from '@/images/slider/bg-thumbnail.png'
import avatar from '@/images/slider/avatar.png'
import icPara from '@/images/ic-para.svg'
import Slider from '../slider'
import Image from 'next/image'
import ProjectItem from './item'
import item1 from '@/images/image.png'
import item2 from '@/images/image (1).png'
import item3 from '@/images/image (2).png'
import item4 from '@/images/image (3).png'
import item5 from '@/images/image (4).png'
import item6 from '@/images/image (5).png'
import ic1 from '@/images/projects/image.png'
import ic2 from '@/images/projects/image (1).png'
import ic3 from '@/images/projects/image (2).png'
import ic4 from '@/images/projects/image (3).png'
import ic5 from '@/images/projects/image (4).png'
import ic6 from '@/images/projects/image (5).png'

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

    const products: IProduct[] = [
        {
            thumbnail: item1,
            logo: ic1,
            type: "Online",
            title: "GeneFlow",
            desc: "Revolutionizing Healthcare with Blockchain-Backed Genetic Data",
            category: ["Blockchain", "Genomics", "Data Privacy"]
        },
        {
            thumbnail: item2,
            logo: ic2,
            type: "Online",
            title: "OpenSpace",
            desc: "Building a Transparent Food Supply with Blockchain for Agriculture",
            category: ["Blockchain", "Data", "Agriculture"]
        },
        {
            thumbnail: item3,
            logo: ic3,
            type: "Worldwide",
            title: "NeuroLedger",
            desc: "Using Blockchain to Secure and Share Neuroscience Data Globally",
            category: ["Neuroscience", "Data Sharing", "NFT"]
        },
        {
            thumbnail: item4,
            logo: ic4,
            type: "Worldwide",
            title: "HelixDAO",
            desc: "Decentralized healthcare platform",
            category: ["Health", "Blockchain", "DeFi"]
        },
        {
            thumbnail: item5,
            logo: ic5,
            type: "Decentralized",
            title: "Preprints",
            desc: "BioVerse",
            category: ["Publication", "Research", "Decentralized"]
        },
        {
            thumbnail: item6,
            logo: ic6,
            type: "Ras Al-Khaimah",
            title: "CellBlock",
            desc: "An AI Health App that Saves Lives",
            category: ["AI", "Healthcare", "Technology"]
        }
    ];

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