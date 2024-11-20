import { useEffect } from "react"
import InputWithLabel from "../input-label"
import { TextareaWithLabel } from "../text-area"
import Category from "./category"
import GeographicLocation from "./location"

const DetailStep = ({ step ,setCurrentStep }: { step: number ,setCurrentStep: (step: number) => void }) => {
  
  const handleNext = () => {
    setCurrentStep(step + 1)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <main className='text-white'>
        <section className='w-full lg:w-[622px] mx-auto px-4 lg:px-0 py-10 lg:py-20'>
              <h3 className='text-[#F7FDFD] text-[32px] lg:text-[64px] font-marbold font-normal text-center'>Details</h3>
              <p className='text-[#798675] text-sm lg:text-lg font-medium text-center'>Please, fill out the information below as the best you can. Include any relevant extra information. Contact a DeSciWorld member with any questions.</p>
        </section>
        <section className="w-full lg:w-[800px] mx-auto flex flex-col gap-10 px-4">
              <InputWithLabel name="project name" type="text" required={true} placeholder="input project name" />
              <InputWithLabel name="Project tagline" type="text" required={true} placeholder="a one liner describing your project" />
              <TextareaWithLabel name="Project description*" type="text" required={false} placeholder="What is the project about and what kind of impact does it aim to have?" />
          <Category />
        <GeographicLocation />
        <button onClick={handleNext} className="w-ful bg-[#F7FDFD] rounded-lg py-2 text-[#010D01] uppercase font-semibold">Continue</button>
        </section>
    </main>
  )
}

export default DetailStep