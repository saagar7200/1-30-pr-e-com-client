import React from 'react'
import type { IImage } from '../../types/product.types'

interface IProps {
    images:IImage[],
    name:string
}

const ImageSection:React.FC<IProps> = ({images,name}) => {
  return (
    <div className='w-full h-full'>
        <img
        src={images[0].path}
        alt={name}
        className='w-full h-full object-cover'
        />

    </div>
  )
}

export default ImageSection