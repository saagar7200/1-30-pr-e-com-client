import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Input from '../../common/inputs/input'
import TextArea from '../../common/inputs/text-area'
import Button from '../../common/button'
import CategorySelect from '../category-select'

const ProductForm = () => {

    const methods = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: '',
            stock: '',
            category: '',
            isFeatured: false,
        }
    })

    return (
        <div className='py-10 px-14 w-[800px] mx-auto border border-gray-300 rounded-md '>
            <FormProvider {...methods}>
                <form className='flex flex-col gap-4 '>
                    <Input
                        id='name'
                        label='Product Name'
                        name='name'
                        placeholder='iPhone 15'
                        required
                    />

                    <CategorySelect/>

                    <Input
                        id='price'
                        label='Price'
                        name='price'
                        placeholder='150000'
                        required
                    />

                    <Input
                        id='stock'
                        label='Total available items'
                        name='stock'
                        placeholder='15'
                        required
                    />

                    <TextArea
                        id='description'
                        name='description'
                        label='Description'
                        placeholder='Start typing here....'

                    />

                    <div className='flex gap-2 items-center mb-1 w-fit cursor-pointer'>
                        <input type='checkbox' id={'featured'} className='h-4 w-4 cursor-pointer'/>
                        <label className='font-semibold text-sm cursor-pointer' htmlFor='featured'>Save Featured product</label>
                    </div>

                    <div className='w-full'>
                        <Button
                            type='submit'
                            label='Create'
                        />

                    </div>

                </form>
            </FormProvider>

        </div>
    )
}

export default ProductForm