import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectComponent({ placeholder, data }: { placeholder: string, data: {value: string, text: string}[]}) {
    return (
        <Select >
            <SelectTrigger>
                <SelectValue className="text-[#798675]" placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{data[0].text}</SelectLabel>
                    {data.map((item, index) => {
                        return <SelectItem key={index} value={item.value}>{item.text}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
