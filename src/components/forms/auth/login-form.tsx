import { yupResolver } from "@hookform/resolvers/yup"
import type { ILogin } from "../../../types/auth.types"
import Button from "../../common/button"
import Input from "../../common/inputs/input"
import {useForm,FormProvider} from 'react-hook-form'
import { loginSchema } from "../../../schema/auth.schema"
import { login } from "../../../api/auth.api"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"

const LoginForm = () => {

    const navigate = useNavigate();

    const methods = useForm({
        defaultValues:{
            email:'',
            password:''
        },
        resolver:yupResolver(loginSchema),
        mode:'all'
    })

    const { mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            console.log('login success response', data)
            navigate('/')

        },
        onError: (error) => {
            console.log('login error response', error)

        }
    })


    const onSubmit = (data: ILogin) => {
        mutate(data)
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
                      isDisabled={isPending}
                      label={isPending ? 'Logging In..' : "Login"}
                      type="submit"
            />

        </form>

        </FormProvider>
      
    </div>
  )
}

export default LoginForm



