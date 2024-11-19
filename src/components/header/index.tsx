import React, { useState } from 'react'
import icHambuger from '@/images/hambuger.svg'
import Image from 'next/image'
import ic_logo from '@/images/logo.svg'
import BtnConnectWallet from '../button/connect-wallet'
import SideBarMobile from '../sidebar/sidebar-mobile'
import icClose from '@/images/close.png'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => { 
        setIsOpen(!isOpen)
    }


    return (
      <>
            <main className=' w-full h-[72px] bg-black p-4 flex lg:hidden items-center gap-x-3 justify-between'>
                <figure onClick={handleOpen} className='cursor-pointer'>
                    <Image src={icHambuger} alt='hamburger' />
                </figure>
                <section className='flex items-center gap-x-3 cursor-pointer'>
                    <figure>
                        <Image src={ic_logo} alt='icon logo' width={32} height={32} />
                    </figure>
                    <span className='lg:text-xl text-[#fff] font-normal font-marbold'>CELL PROTOCOL</span>
                </section>
                <BtnConnectWallet />
            </main>
            <SideBarMobile isOpen={isOpen} />
            {isOpen && <div onClick={handleOpen} className='overlay fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-[8]'></div>}
            {isOpen && <figure onClick={handleOpen} className='fixed h-full top-1/2 right-0 z-20 cursor-pointer'>
            
                <Image src={icClose} alt='close'/>
            
            </figure>}
      </>
    
  )
}

export default Header