import { GrDocumentMissing } from "react-icons/gr";


const NotFoundComponent = ({ message = 'Data Not Found' }: { message?: string }) => {
    return (
        <div className='w-full flex items-center justify-center'>

            <div className="flex flex-col items-center">
                <GrDocumentMissing size={30} className='text-[#A31621]'/>
                <p className='mt-6 text-xl'>{message}</p>
            </div>
        </div>
    )
}

export default NotFoundComponent
