
import productImage from '../../assets/product.webp'
import type { IProductData } from '../../types/product.types'

// define props type
type IProps = {
    product: IProductData
}


const ProductCard = ({ product }: IProps) => {
    console.log(product)
    return (
        <div className='max-w-[300px] flex flex-col p-4 py-8 bg-[#f8f8f8] rounded-md'>
            {/* image */}
            <div className='max-h-[180px] w-[180px]  mx-auto cursor-pointer'>
                <img
                    // cover_image
                    src={product?.coverImage?.path ?? productImage}
                    alt='Product Image'
                    className='h-full w-full object-contain  hover:scale-110 transition-all duration-300 hover:grayscale-40'
                />

            </div>

            <div className='mt-5'>
                {/* product.name */}
                <h1 className='text-[#A31621] font-bold text-[16px] line-clamp-1'>
                    {product?.name ?? 'ThinkBook 16 Gen 7(16,AMD)'}
                </h1>
                {/* product.description */}
                <p className='text-[12px] mt-2 line-clamp-2'>
                    {product?.description ?? `16" WUXGA | Ryzen 7000 | 16GB RAM
                    | 512GB SSD | Radeon Graphics
                    Intel Xeon E-2336 | 32GB RAM | 1TB NVMe SSD | Remote Management`
                    }</p>
            </div>
            <div className='flex mt-2 justify-between text-lg'>
                {/* price */}
                <p className='text-[14px]'>{new Intl.NumberFormat('en-NP', { style: 'currency', currency: 'NPR' }).format(product?.price ?? 12345)}</p>
                {/* stock */}
                <p>stock: <span className={`${product?.stock > 5 ? 'text-green-600' : 'text-red-500'}  text-[14px]`}>{product?.stock ?? 10}</span></p>

            </div>
            <div className=' flex justify-between mt-5 gap-3'>
                <button className=' bg-[#A31621] w-full p-2 rounded-md text-white text-[16px] font-[500] cursor-pointer'>
                    View Detail
                </button>
                <button className=' border border-[#A31621]  w-full p-2 px-1 rounded-md text-[#A31621] text-[16px] font-[500] cursor-pointer'>
                    Add to wishlist
                </button>
            </div>

        </div>
    )
}

export default ProductCard
