import bg from '@/images/bg-detail.png'
import Image from 'next/image'


const WrapBodyContent = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='w-full min-h-screen h-full bg-black pb-20'>
          <Image src={bg} alt='background' className='absolute top-20 left-0 w-full h-[220px] lg:h-[350px]' objectPosition='top'/>
          <section className='relative w-full lg:max-w-[1200px] mx-auto'>
              {children}
          </section>
    </main>
  )
}

export default WrapBodyContent