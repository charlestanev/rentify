import { Input } from "../ui/input"
import { Label } from "../ui/label"

type FormInputProps = {
    name: string
    type: string
    label?: string
    default?: string
    placehlder?: string
}

const FormInput = (props: FormInputProps) => {
    const { name, type, label, default: defaultValue, placehlder } = props

    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">{label || name}</Label>
            <Input id={name} name={name} type={type} placeholder={placehlder} defaultValue={defaultValue} required />
        </div>
    )
}

export default FormInput