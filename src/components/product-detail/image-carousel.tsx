import React from 'react'
import type { IImage } from '../../types/product.types'
import Carousel from '../common/slider'

interface IProps {
    images:IImage[],
    name:string
}


const ProductImageSlider:React.FC<IProps> = ({images}) => {
  return (
    <div className='w-full h-[600px] rounded-md  overflow-clip'>
        <Carousel data={images} Children={Images}/>
    </div>
  )
}




const Images = ({data}:{data:IImage}) =>{
return (
        <div className='w-full max-h-[500px] rounded-md  overflow-clip'>
        <img
        src={data.path}
        alt={'product iamge'}
        className='w-full h-full object-contain'
        />

    </div>
)
}

export default ProductImageSlider