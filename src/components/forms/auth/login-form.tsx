import { yupResolver } from "@hookform/resolvers/yup"
import type { ILogin } from "../../../types/auth.types"
import Button from "../../common/button"
import Input from "../../common/inputs/input"
import {useForm,FormProvider} from 'react-hook-form'
import { loginSchema } from "../../../schema/auth.schema"
import { login } from "../../../api/auth.api"

const LoginForm = () => {

    const methods = useForm({
        defaultValues:{
            email:'',
            password:''
        },
        resolver:yupResolver(loginSchema),
        mode:'all'
    })


    const onSubmit = async (data:ILogin) =>{
        console.log('form submitted',data)
        const response = await login(data);
        console.log(response)
        
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
                        type={'text'}
                        required

                    />

                    {/* password */}
                    <Input
                        id={"password"}
                        label={"Password"}
                        name={'password'}
                        placeholder={'xxxxxxxxxx'}
                        type={'password'}
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



