/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from "react"
import { LuAsterisk } from "react-icons/lu";
import {useFormContext} from 'react-hook-form'
interface IProps {
    label: string,
    type?: 'text' | 'number' | 'email' | 'password',
    name: string,
    id: string,
    placeholder: string,
    required?:boolean,
    rules?:any
}


const Input: FC<IProps> = ({ id, label, name, type = 'text', placeholder ,required=false,rules}) => {
   
    const {register,watch,formState:{errors}} = useFormContext();

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
                {...register(name,rules)}
                value={watch(name)}
                className={
                    `border ${errors[name] ? 'border-red-500 focus:outline-red-500' :'border-blue-500 focus:outline-blue-500'}
                     p-3 rounded-md placeholder:text-lg text-lg `
                    }
                placeholder={placeholder}
                type={type}
                id={id}
            />
            <p className=" text-[12px] text-red-500 h-[8px] mt-0.5">{errors[name] ? errors[name]?.message as string : ' ' }</p>
        </div>
    )
}

export default Input
