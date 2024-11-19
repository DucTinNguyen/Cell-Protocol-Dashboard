'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ic_logo from '@/images/logo.svg'
import IconHome from './icons/home';
import bgSidebar from '@/images/bg-sidebar.png'
import BtnConnectWallet from '../button/connect-wallet';
import { useRouter } from 'next/navigation';
import { menus } from '@/utils/menu';
import BtnCreate from '../button/btn-create';

const SideBar = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const router = useRouter();
    const handleActiveTab = (index: number) => { 
        setActiveIndex(index)
    }

    useEffect(() => {
        router.push(`?tab=${menus[activeIndex].split(' ')[0]}`)
    }, [activeIndex, router])
    
  return (
      <main className='py-8 px-6 bg-[#090909] w-[272px] h-svh relative'>
          <section className='flex items-center gap-x-3'>
              <figure>
                  <Image src={ic_logo} alt='icon logo' width={32} height={32}/>
              </figure>
              <span className='lg:text-xl text-[#fff] font-normal font-marbold'>CELL PROTOCOL</span>
          </section>      
          <section className='mt-10 relative z-[2]'>
              {menus.map((menu: string, index: number) => {
                  return <button
                      disabled={index!== 1 && index !==4 }
                      onClick={() => { handleActiveTab(index) }}
                      key={index}
                      className={` ${index!== 1 && index !==4 && 'cursor-not-allowed'} ${index === activeIndex ? 'bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.08)]' : 'border-transparent'} w-full flex cursor-pointer py-3 px-4 items-center gap-x-2 rounded-lg  border-[2px] `}>
                      <IconHome isActive={index === activeIndex} />
                      <span className={`${index === activeIndex ? 'text-[#8CE339]' : 'text-[#798675]'}  text-sm font-semibold capitalize`}>{menu}</span>
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