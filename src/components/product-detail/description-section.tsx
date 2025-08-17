import React, { useState } from 'react'
import type { IProductData } from '../../types/product.types'
import { MdOutlineStar } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
interface IProps {
    product: IProductData
}

const DescriptionSection: React.FC<IProps> = ({ product }) => {

    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity(Number(quantity) + 1)
    }

    const decreaseQuantity = () => {
        if (Number(quantity) > 1) {
            setQuantity(Number(quantity) - 1)
        }
    }
    const isPending = false
    return (
        <div className='tracking-wider'>
            {/* name ,price , stock */}
            <div>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold text-2xl text-gray-700'>{product.name}</h1>
                    <div className='flex items-center'>
                        <p className='text-[16px]'> 4.5</p> 
                        <MdOutlineStar size={20} className='mb-1 text-yellow-500'/>
                    </div>
                </div>
                <div className='flex items-center gap-6 mt-2'>
                    <p className='text-[#A31621]  text-[16px]'>{new Intl.NumberFormat('en-NP', { style: 'currency', currency: 'NPR' }).format(product?.price ?? 12345)}</p>
                    <p>

                        <span className={`${product?.stock > 5 ? 'text-green-600' : 'text-red-500'}  text-[16px]`}>{product?.stock} </span>left
                    </p>

                </div>
                <p>Brand</p>
                <div className='flex gap-2 items-center mt-2'>
                    <CiShoppingTag size={20}/>
                    <span>{product.category.name}</span>
                </div>
            </div>

            {/* quantity input */}

            <div className=' mt-6'>
                <p>Quantity:</p>
                <div className='flex items-center h-[50px] rounded-md border border-gray-200 w-fit overflow-clip mt-2'>
                    <button disabled={Number(quantity) === 1} onClick={decreaseQuantity} className='disabled:cursor-not-allowed text-2xl  h-full px-3 cursor-pointer bg-[#F8F8F8] aspect-square'>-</button>
                    <input
                        className='h-full px-1 outile-none border-none focus:outline-none text-center'
                        defaultValue={1}
                        value={quantity}

                    />
                    <button onClick={increaseQuantity} className='text-2xl h-full px-3 cursor-pointer bg-[#F8F8F8] aspect-square'>+</button>

                </div>
            </div>


            {/* button section */}
            <div className=' flex justify-between mt-6 gap-10'>
                <button className=' bg-[#A31621] w-full p-3 rounded-md text-white text-[16px] font-[500] cursor-pointer'>
                    Add to Cart
                </button>
                <button
                    disabled={isPending}
                    // onClick={handleClick}
                    className=' disabled:cursor-not-allowed border border-[#A31621]  w-full p-3 px-1 rounded-md text-[#A31621] text-[16px] font-[500] cursor-pointer'>
                    {isPending ? "Adding to list.." : "Add to wishlist"}
                </button>
            </div>



            {/* description */}
            <div>
                <p className='text-[16px] mt-10 text-gray-700'>{product.description}</p>
            </div>
        </div>
    )
}

export default DescriptionSection