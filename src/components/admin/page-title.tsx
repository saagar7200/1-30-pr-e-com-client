import React from 'react'
import { Link } from 'react-router';

interface IProps {
    title: string;
    link?: string;
    button_label?: string
}

const PageTitle: React.FC<IProps> = ({ title, link, button_label = "Button" }) => {
    return (
        <div className='w-full flex justify-between items-center  border-b border-indigo-200 py-3 shadow px-3 bg-[#f8f8f8]'>
            <h1 className='text-xl font-bold text-blue-600'>{title}</h1>
            {
                link &&
                <Link
                    className='bg-indigo-500 text-white font-bold px-4 rounded-md py-2'
                    to={link}
                >
                    {button_label}
                </Link>
            }

        </div>
    )
}

export default PageTitle