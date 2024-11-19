'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import ic_logo from '@/images/logo.svg'
import IconHome from './icons/home';
import bgSidebar from '@/images/bg-sidebar.png'
import { useRouter, useSearchParams } from 'next/navigation';
import { menus } from '@/utils/menu';
import BtnCreate from '../button/btn-create';
import { SidebarContext } from '@/providers/side-bar.provider';

const SideBarMobile = ({ isOpen }: { isOpen: boolean }) => {
    
    const { activeTab, setActiveTab } = useContext(SidebarContext)!;
    const router = useRouter();

    const handleActiveTab = (index: number) => {
        const newTab = menus[index].hash;
        setActiveTab(newTab);
        router.push(`?tab=${newTab}`);
    };



  return (
      <main className={`${isOpen ? 'w-[272px] opacity-100 left-0' : 'w-0 opacity-0 left-[-100px]'} transition-all ease-linear duration-150 py-8 px-6 bg-[#090909] z-20 fixed top-0 min-h-screen h-full`}>
          <section className='flex items-center gap-x-3 cursor-pointer'>
              <figure>
                  <Image src={ic_logo} alt='icon logo' width={32} height={32} />
              </figure>
              <span className='lg:text-xl text-[#fff] font-normal font-marbold'>CELL PROTOCOL</span>
          </section>
          <section className='mt-10 relative z-[2]'>
              {menus.map((menu, index) => (
                  <button
                      disabled={index !== 1 && index !== 4}
                      onClick={() => handleActiveTab(index)}
                      key={index}
                      className={`${index !== 1 && index !== 4 ? 'cursor-not-allowed' : ''} 
              ${menu.hash === activeTab ? 'bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.08)]' : 'border-transparent'} 
              w-full flex cursor-pointer py-3 px-4 items-center gap-x-2 rounded-lg border-[2px]`}
                  >
                      <IconHome isActive={menu.hash === activeTab} />
                      <span className={`${menu.hash === activeTab ? 'text-[#8CE339]' : 'text-[#798675]'} text-sm font-semibold capitalize`}>
                          {menu.title}
                      </span>
                  </button>
              ))}
          </section>
          <BtnCreate />
          <figure className='absolute bottom-0 left-0 z-[1]'>
              <Image src={bgSidebar} alt='bg sidebar' />
          </figure>
      </main>
  )
}

export default SideBarMobile