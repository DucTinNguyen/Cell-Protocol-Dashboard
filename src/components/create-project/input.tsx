
import { Input } from "@/components/ui/input"
const InputWithoutLabel = ({ name, placeholder, type, required }: { name: string, placeholder: string, type: string, required: boolean }) => {
    return (
        <Input className="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.04)] w-full" type={type} id={name} placeholder={placeholder} required={required} />
    )
}

export default InputWithoutLabel