import { useEffect, useState } from "react"
import InputWithLabel from "../input-label"
import { TextareaWithLabel } from "../text-area"
import Category from "./category"
import GeographicLocation from "./location"
import { categoryItems } from "@/utils/category"

const DetailStep = ({ step ,setCurrentStep }: { step: number ,setCurrentStep: (step: number) => void }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [formData, setFormData] = useState({
    projectName: '',
    projectTagline: '',
    projectDescription: ''
  });

  const [selectedCategories, setSelectedCategories] = useState<{ id: string, text: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const isFormValid = () => {
    return formData.projectName.trim() !== '' &&
      formData.projectTagline.trim() !== '' && selectedCategories.length > 0;
  };

  const handleNext = () => {
    console.log(formData)
    if (isFormValid()) {
      console.log('Form is valid, proceeding...', formData);
      // Add your navigation logic here
      setCurrentStep(step + 1)
    } else {
      alert('Please fill all required fields');
    }
  };



  const handleSelectedCategories = (item: { id: string, text: string }) => {
    const index = selectedCategories.findIndex(c => c.id === item.id);
    const newList = [...selectedCategories]

    if (index !== -1) {
      newList.splice(index, 1)
      setSelectedCategories(newList);
    } else {
      newList.push(item)
      setSelectedCategories(newList);
    }
  }

  return (
    <main className='text-white'>
        <section className='w-full lg:w-[622px] mx-auto px-4 lg:px-0 py-10 lg:py-20'>
              <h3 className='text-[#F7FDFD] text-[32px] lg:text-[64px] font-marbold font-normal text-center'>Details</h3>
              <p className='text-[#798675] text-sm lg:text-lg font-medium text-center'>Please, fill out the information below as the best you can. Include any relevant extra information. Contact a DeSciWorld member with any questions.</p>
        </section>
        <section className="w-full lg:w-[800px] mx-auto flex flex-col gap-10 px-4">
        <InputWithLabel onChange={handleInputChange} name="projectName" label='project name' type="text" required={true} placeholder="input project name" />
        <InputWithLabel onChange={handleInputChange} name="projectTagline" label='project tagline' type="text" required={true} placeholder="a one liner describing your project" />
        <TextareaWithLabel name="Project description" type="text" required={false} placeholder="What is the project about and what kind of impact does it aim to have?" />
        <main>
          <div className='flex items-center gap-2'>
            <p>
              <span className='text-[#FFFBEF] text-base font-semibold'>Category</span>
              <span className="text-[#FF3236] text-base">*</span>
            </p>
            <span className='text-[#E0DDD9] text-xs font-medium'>(3 for basic plan, 6 for premium)</span>
          </div>
          <div className='flex items-center gap-2 flex-wrap mt-2'>
            {categoryItems.map((item, index) => {
              return <span onClick={() => { handleSelectedCategories(item) }} key={index}
                className={`${selectedCategories.findIndex(c => c.id === item.id) !== -1 ? 'bg-category-tag-active text-[#F7FDFD] shadow-category-tag-active' : 'bg-category-tag text-[#798675]'} py-2 px-4 cursor-pointer  font-semibold text-sm rounded-lg border border-[rgba(255,255,255,0.06)] `}
              >{item.text}</span>
            })}
          </div>
        </main>
        <GeographicLocation />
        <button onClick={handleNext} className="w-ful bg-[#F7FDFD] rounded-lg py-2 text-[#010D01] uppercase font-semibold">Continue</button>
        </section>
    </main>
  )
}

export default DetailStep