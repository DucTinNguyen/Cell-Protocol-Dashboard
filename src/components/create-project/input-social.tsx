import React from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image, { StaticImageData } from 'next/image'

const InputSocial = ({ name, placeholder, type, required, icon }: { name?: string, placeholder: string, type: string, required: boolean, icon: StaticImageData }) => {
  return (
      <div className="grid w-full items-center gap-1.5">
          {name && <div>
              <Label htmlFor={name} className="capitalize">{name}</Label>
              {required && <span className="text-[#FF3236] text-base">*</span>}
          </div>}
          <div className='relative'>
            <Image src={icon} alt='website' className='absolute top-1/2 -translate-y-1/2 left-4'/>
            <Input className="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.04)] w-full pl-12" type={type} id={name} placeholder={placeholder} required={required} />
          </div>
      </div>
  )
}

export default InputSocial