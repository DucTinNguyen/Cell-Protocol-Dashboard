
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const InputWithLabel = ({ name, placeholder, type, required, onChange, label }: { label?: string ,name: string, placeholder: string, type: string, required: boolean, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
      <div className="grid w-full items-center gap-1.5">
          <div>
              <Label htmlFor={name} className="capitalize">{label}</Label>
              {required && <span className="text-[#FF3236] text-base">*</span>}
          </div>
          <Input onChange={onChange} className="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.04)] w-full" type={type} id={name} placeholder={placeholder} required={required} />
      </div>
  )
}

export default InputWithLabel