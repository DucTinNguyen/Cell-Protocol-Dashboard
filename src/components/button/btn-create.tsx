import React from 'react'
import icPlus from '@/images/plus.svg'
import Image from 'next/image'
import { useWallet } from '@solana/wallet-adapter-react'

const BtnCreate = () => {

    const { publicKey } = useWallet()

    return (
      <>
            {publicKey && <button
                style={{
                    boxShadow: '0px 0px 40px 5px rgba(140, 227, 57, 0.40)'
                }}
                className='absolute bottom-[106px] left-6 w-4/5 z-[2] rounded-lg border-[3px] border-[#D3FF33] bg-[#8CE339] flex items-center justify-center h-12 gap-x-2'>
                <Image src={icPlus} alt='ic plus' />
                <span className='text-[#2F590F] text-base font-semibold'>Create</span>
            </button>}
      </>
      
  )
}

export default BtnCreate