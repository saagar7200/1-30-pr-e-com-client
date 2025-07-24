import type { FC } from "react"



interface IProps {
    label:string,
    type?:'submit'|'button'|'reset'
}

const Button:FC<IProps> = ({label,type='button'}) => {
    return (
        <div>
            <button
            // onClick={()=>{console.log('button clicked')}}
                className=" tracking-wider w-full p-3 rounded-md text-lg font-bold text-white cursor-pointer bg-indigo-600 hover:bg-indigo-800  transition-all duration-300"
                type={type}
            > {label} </button>
        </div>
    )
}

export default Button
