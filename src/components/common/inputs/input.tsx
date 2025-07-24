import type { FC } from "react"
import { LuAsterisk } from "react-icons/lu";
interface IProps {
    label: string,
    type?: 'text' | 'number' | 'email' | 'password',
    name: string,
    id: string,
    placeholder: string,
    required?:boolean
}


const Input: FC<IProps> = ({ id, label, name, type = 'text', placeholder ,required=false}) => {
    return (
        <div className="flex flex-col gap-1 w-full ">
            {/* label */}
            <div className="flex">
                <label
                    className="text-lg font-bold text-gray-800"
                    htmlFor={id}
                >{label}</label>
              { required && <LuAsterisk size={12} className="text-red-500 mt-1"/>}
            </div>
            {/* input */}
            <input
                className="border border-blue-500 p-3 rounded-md placeholder:text-lg text-lg focus:outline-blue-500"
                placeholder={placeholder}
                type={type}
                name={name}
                id={id}
            />
        </div>
    )
}

export default Input
