import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

import detail1 from '@/images/projects/detail1.png'
import detail2 from '@/images/projects/detail2.png'
import detail3 from '@/images/projects/detail3.png'
import detail4 from '@/images/projects/detail4.png'
import Image from "next/image"


const arrayImages = [ detail1, detail2, detail3, detail4]

export function CarouselProjectDetail() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <main className="my-6 mx-auto relative z-10">
            <section
                className="w-full lg:w-[684px] h-[277px] lg:h-[384px] relative flex items-center justify-center rounded-3xl overflow-hidden">
                <Image src={arrayImages[0]} alt="image" fill />
                <div style={{
                    background: 'rgba(56, 56, 56, 0.20)'
                }} className="backdrop-blur-[50px] absolute w-full h-full left-0 top-0"></div>
                <Carousel setApi={setApi} className="w-[250px] h-[277px] flex items-center lg:w-[552px] lg:h-[384px] mx-auto relative">
                    <CarouselContent>
                        {arrayImages.map((_, index) => (
                            <CarouselItem key={index}>
                                <Image className="w-full h-full"  src={arrayImages[current-1]} alt="image" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            
            <div className="flex items-center gap-x-2 mt-6">
                {arrayImages.map((item, index) => {
                    return (
                        <section onClick={()=>{setCurrent(index +1)}} key={index} className={`${index === current - 1 ? 'border-[#D3FF33]' : 'border-transparent'} border w-[127px] h-[88px] rounded-lg overflow-hidden relative flex items-center justify-center`}>
                            <Image src={item} alt="image" fill />
                            <div style={{
                                background: 'rgba(56, 56, 56, 0.20)'
                            }} className="backdrop-blur-[50px] absolute w-full h-full left-0 top-0"></div>
                            <figure className="relative w-[88px] h-full flex items-center justify-center p-1 rounded-lg">
                                <Image src={item} alt="image"/>
                            </figure>
                        </section>
                    )
                })}
            </div>
        </main>
    )
}
