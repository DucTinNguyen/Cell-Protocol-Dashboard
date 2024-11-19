import { ISlider, SwiperType } from '@/types'
import Image from 'next/image';
import React from 'react'
// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = ({data , type }: {data: ISlider[] , type: number}) => {
  return (
      <>
          <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
              }}
              pagination={{
                  clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper h-full"
          >
              
              {data.map((item, index) => {
                  return (
                      <SwiperSlide key={index}>
                          {type === 2 ? <SwiperSlideJobBoard item={item} /> : <SwiperSlideProject item={item} />}
                      </SwiperSlide>
                  )
              })}
          </Swiper>
    </>
  )
}

export default Slider


const SwiperSlideProject = ({item}: {item: ISlider}) => {
    return <section className='h-[320px] lg:rounded-[32px] overflow-hidden relative p-6 lg:p-10'>
        <Image src={item.thumbnail} alt='thumbnail' fill objectFit='cover' objectPosition='center' />
        <div className='relative pt-6 lg:pt-0'>
            <figure className='w-10 h-10 lg:w-[100px] lg:h-[100px] rounded-full overflow-hidden'>
                <Image src={item.logo} alt='thumbnail' className='w-full h-full' />
            </figure>
            <p className='text-[#8CE339] text-base font-semibold mt-2'>{item.type}</p>
            <p className='text-2xl text-[#F7FDFD] font-semibold uppercase my-2'>{item.title}</p>
            <p className='text-sm text-[#F7FDFD] font-medium mt-2 mb-2 lg:mb-6 line-clamp-2'>{item.desc}</p>
            <p className='flex items-center gap-x-2'>
                {item.category.map((text, index) => {
                    return (
                        <span style={{
                            background: 'linear-gradient(90deg, rgba(140, 227, 57, 0.40) -5.56%, rgba(140, 227, 57, 0.00) 100%), rgba(255, 255, 255, 0.20)'
                        }} className='bg-gradient-radial flex items-center p-1 px-2 justify-center min-w-10 h-[28px] w-fit backdrop-blur-[5px] rounded-[100px] text-sm text-[#F7FDFD]' key={index}>{text}</span>
                    )
                })}
            </p>
        </div>
    </section>
}

const SwiperSlideJobBoard = ({ item }: { item: ISlider }) => {
    return <main className='h-[320px] rounded-[32px] overflow-hidden relative p-10'>
        <Image src={item.thumbnail} alt='thumbnail' fill />
        <section className='relative flex items-center gap-x-8'>
            <figure className='min-w-[160px] w-[160px] h-[160px] rounded-lg'>
                <Image src={item.logo} alt='thumbnail' width={160} height={160} />
            </figure>
            <div>
                <p className='text-[#8CE339] text-base font-semibold mt-2'>{item.type}</p>
                <p className='text-2xl text-[#F7FDFD] font-semibold uppercase my-2'>{item.title}</p>
                <p className='text-sm text-[#F7FDFD] font-medium mt-2 mb-6'>{item.desc}</p>
                <p className='flex items-center gap-x-2'>
                    {item.category.map((text, index) => {
                        return (
                            <span style={{
                                background: 'linear-gradient(90deg, rgba(140, 227, 57, 0.40) -5.56%, rgba(140, 227, 57, 0.00) 100%), rgba(255, 255, 255, 0.20)'
                            }} className='bg-gradient-radial flex items-center p-1 px-2 justify-center min-w-10 h-[28px] w-fit backdrop-blur-[5px] rounded-[100px] text-sm text-[#F7FDFD]' key={index}>{text}</span>
                        )
                    })}
                </p>
            </div>
            
        </section>
    </main>
}