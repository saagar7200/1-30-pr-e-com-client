import { yupResolver } from '@hookform/resolvers/yup'
import type { IRegister } from '../../../types/auth.types'
import Button from '../../common/button'
import Input from '../../common/inputs/input'
import {useForm,FormProvider} from 'react-hook-form'
import { registerSchema } from '../../../schema/auth.schema'
import { register } from '../../../api/auth.api'
 
const RegisterForm = () => {

    const methods = useForm({
        defaultValues:{
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            confirm_password:'',
            phone:''
        },
        resolver:yupResolver(registerSchema),
        mode:'all'

    })

    // submit handler 
    const onSubmit = async(data:IRegister) =>{
        console.log(data)
        register(data)
    }

  return (
    <div>
        <FormProvider {...methods}>
            <form  onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                {/* input components wrapper */}
                <div className='flex flex-col gap-3'>
                
                <div className='w-full flex flex-col md:flex-row gap-3'>
                    <Input 
                        label={'First Name'}
                        id={'first_name'}
                        name={'first_name'}
                        placeholder={'John'}
                        required={true}
                    />

                    <Input 
                        label={'Last Name'}
                        id={'last_name'}
                        name={'last_name'}
                        placeholder={'Doe'}
                        required

                    />
                </div>

                    <Input 
                        label={'Email'}
                        id={'email'}
                        name={'email'}
                        placeholder={'johndoe@gmail.com'}
                        required

                    />

                    <Input 
                        label={'Password'}
                        id={'password'}
                        name={'password'}
                        type={'password'}
                        placeholder={'XXXXXXXXXX'}
                        required

                    />
                    <Input 
                        label={'Confirm Password'}
                        id={'confirm_password'}
                        name={'confirm_password'}
                        type={'password'}
                        placeholder={'Retype password'}
                        required

                    />

                    <Input 
                        label={'Phone Number'}
                        id={'phone'}
                        name={'phone'}
                        placeholder={'98xxxxxx70'}
                    />

                </div>

                <Button
                    label={"Sign Up"}
                    type="submit"
                />
            </form>
        </FormProvider>  
    </div>
  )
}

export default RegisterForm
