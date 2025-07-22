import type { FC } from "react"

interface IProps {
    label:string,
    type:'text' | 'number' | 'email' | 'password',
    name:string,
    id:string,
    placeholder:string
}


const Input:FC<IProps> = ({id,label,name,type,placeholder}) => {
    return (
        <div className="flex flex-col gap-1 ">
            <label
                className="text-xl font-bold text-gray-800"
                htmlFor={id}

            >{label}</label>
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
