import bg from '@/images/bg-detail.png'
import Image from 'next/image'


const WrapBodyContent = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='w-full h-screen bg-black'>
          <Image src={bg} alt='background' className='absolute top-20 left-0 w-full h-[350px]' />
          <section className='relative w-full lg:max-w-[1200px] mx-auto'>
              {children}
          </section>
    </main>
  )
}

export default WrapBodyContent