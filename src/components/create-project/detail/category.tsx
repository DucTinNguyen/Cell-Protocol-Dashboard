'use client'
import { categoryItems } from '@/utils/category'
import React, { useState } from 'react'
import { IoEllipseSharp } from 'react-icons/io5';

const Category = () => {

    const [selectedCategories, setSelectedCategories] = useState<{ id: string, text: string }[]>([]);


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
  )
}

export default Category