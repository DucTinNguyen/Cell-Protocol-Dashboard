'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ic_logo from '@/images/logo.svg'
import IconHome from './icons/home';
import bgSidebar from '@/images/bg-sidebar.png'
import BtnConnectWallet from '../button/connect-wallet';
import { useRouter, useSearchParams } from 'next/navigation';
import { menus } from '@/utils/menu';
import BtnCreate from '../button/btn-create';

const SideBar = () => {
   const params = useSearchParams().get('tab');  
    const [activeIndex, setActiveIndex] = useState(params || menus[1].hash );
    const router = useRouter();
    const handleActiveTab = (index: number) => { 
        setActiveIndex(menus[index].hash)
    }

    useEffect(() => {
        if (!params) {
            router.push(`?tab=${menus[1].hash}`)
        }
        router.push(`?tab=${activeIndex}`)
    }, [params, activeIndex])
    
  return (
      <main className='py-8 px-6 bg-[#090909] w-[272px] h-svh relative'>
          <section className='flex items-center gap-x-3'>
              <figure>
                  <Image src={ic_logo} alt='icon logo' width={32} height={32}/>
              </figure>
              <span className='lg:text-xl text-[#fff] font-normal font-marbold'>CELL PROTOCOL</span>
          </section>      
          <section className='mt-10 relative z-[2]'>
              {menus.map((menu, index: number) => {
                  return <button
                      disabled={index!== 1 && index !==4 }
                      onClick={() => { handleActiveTab(index) }}
                      key={index}
                      className={` ${index!== 1 && index !==4 && 'cursor-not-allowed'} ${menu.hash === activeIndex ? 'bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.08)]' : 'border-transparent'} w-full flex cursor-pointer py-3 px-4 items-center gap-x-2 rounded-lg  border-[2px] `}>
                      <IconHome isActive={menu.hash === activeIndex} />
                      <span className={`${menu.hash === activeIndex ? 'text-[#8CE339]' : 'text-[#798675]'}  text-sm font-semibold capitalize`}>{menu.title}</span>
                  </button>
              })}
          </section>
          <BtnCreate />
          <BtnConnectWallet className='absolute bottom-10 left-6 w-4/5 z-[2]'/>
          <figure className='absolute bottom-0 left-0 z-[1]'>
              <Image src={bgSidebar} alt='bg sidebar'/>
          </figure>
    </main>
  )
}

export default SideBar;