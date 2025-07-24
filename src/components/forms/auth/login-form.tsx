import Button from "../../common/button"
import Input from "../../common/inputs/input"

const LoginForm = () => {
  return (
    <div>
        <form className="flex flex-col gap-10 ">
            <div className="flex flex-col gap-4">
                    {/* email */}
                    <Input
                        id={"email"}
                        label={"Email"}
                        name={'email'}
                        placeholder={'example@gmail.com'}
                        type={'email'}
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

      
    </div>
  )
}

export default LoginForm



