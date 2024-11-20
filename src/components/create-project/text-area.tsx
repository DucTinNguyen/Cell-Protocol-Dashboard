import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithLabel({ name, placeholder, type, required }: { name: string, placeholder: string, type: string, required: boolean }) {
    return (
        <div className="grid w-full gap-1.5">
            <div>
                <Label htmlFor={name} className="capitalize">{name}</Label>
                {required && <span className="text-[#FF3236] text-base">*</span>}
            </div>
            <Textarea className="bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.04)] w-full h-[200px]" placeholder={placeholder} id={name} />
        </div>
    )
}
