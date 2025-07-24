import type { ILogin } from "../../../types/auth.types"
import Button from "../../common/button"
import Input from "../../common/inputs/input"
import {useForm,FormProvider} from 'react-hook-form'

const LoginForm = () => {

    const methods = useForm({
        defaultValues:{
            email:'',
            password:''
        }
    })


    const onSubmit = (data:ILogin) =>{
        console.log('form submitted',data)
    }



  return (
    <div>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-10 ">
            <div className="flex flex-col gap-4">
                    {/* email */}
                    <Input
                        id={"email"}
                        label={"Email"}
                        name={'email'}
                        placeholder={'example@gmail.com'}
                        type={'email'}
                        rules={{
                            required:'Email is required'
                        }}
                        required

                    />

                    {/* password */}
                    <Input
                        id={"password"}
                        label={"Password"}
                        name={'password'}
                        placeholder={'xxxxxxxxxx'}
                        type={'password'}
                        rules={{
                            required:'Password is required',
                            minLength:6
                        }}
                        required

                    />          
            </div>

            <Button
        
                label={"Login"}
                type="submit"
            />

        </form>

        </FormProvider>
      
    </div>
  )
}

export default LoginForm



