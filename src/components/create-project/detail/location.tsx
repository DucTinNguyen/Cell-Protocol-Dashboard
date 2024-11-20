import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { SelectComponent } from '../select';
import InputWithoutLabel from '../input';

const GeographicLocation = () => {
    const countries = [
        { value: "US", text: "United States" },
        { value: "GB", text: "United Kingdom" },
        { value: "JP", text: "Japan" },
        { value: "FR", text: "France" },
        { value: "DE", text: "Germany" },
        { value: "CA", text: "Canada" },
        { value: "AU", text: "Australia" },
        { value: "IT", text: "Italy" },
        { value: "ES", text: "Spain" },
        { value: "BR", text: "Brazil" }
    ];
  return (
      <main>
          <h4>Geographic location</h4>
          <div className='grid grid-cols-2 gap-5 mt-3'>
              <div className='w-full'>
                  <SelectComponent placeholder='Choose country' data={countries} />
              </div>
              <div>
                  <InputWithoutLabel name='city' placeholder='City' required={false} type='text' />
              </div>
          </div>
      </main>
  )
}

export default GeographicLocation