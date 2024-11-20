'use client'
import React from 'react'
import item1 from '@/images/projects/Main Image.png'
import icon1 from '@/images/projects/image.png'
import Image from 'next/image'
import { IProduct } from '@/types'
import { useRouter } from 'next/navigation'
const ProjectItem = ({ product }: { product: IProduct }) => {
    
    const router = useRouter();

  return (
      <main
          onClick={()=>{router.push(`?tab=projects&id=${product.id}`)}}
          className='h-[312px] flex flex-col rounded-lg overflow-hidden cursor-pointer'>
          <figure className='w-full h-[120px]'>
              <Image src={product.thumbnail} className='w-full h-full' alt='item'/>
          </figure>   
          <section className='px-4 bg-[#0C0D0D] pb-6 grow relative'>
              <div className='flex items-center gap-x-3'>
                  <Image className='w-[64px] h-[64px] rounded-full' src={product.logo} alt='icon1' />
                  <div>
                      <span className='block text-[#8CE339] text-base font-semibold '>{product.type}</span>
                      <span className='block text-sm font-bold text-white uppercase'>{product.title}</span>
                  </div>
              </div>
              <p className='text-sm font-medium text-[#798675] line-clamp-2 my-4'>{product.desc}</p>
              <p className='flex items-center gap-x-2 absolute bottom-6 left-4'>
                  {product.category.map((text, index) => {
                      return (
                          <span
                              style={{
                                  background: 'rgba(255, 255, 255, 0.10)'
                              }}    
                              className='flex items-center p-1 px-2 justify-center min-w-10 h-[28px] w-fit backdrop-blur-[5px] rounded-[100px] text-sm text-[#F7FDFD]' key={index}>{text}</span>
                      )
                  })}
              </p>
          </section>
          
    </main>
  )
}

export default ProjectItem