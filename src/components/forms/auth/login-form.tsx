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
                    />

                    {/* password */}
                    <Input
                        id={"password"}
                        label={"Password"}
                        name={'password'}
                        placeholder={'xxxxxxxxxx'}
                        type={'password'}
                    />          
            </div>
            <button 
                className="w-full p-3 rounded-md text-lg font-bold text-white cursor-pointer bg-indigo-600 hover:bg-indigo-800  transition-all duration-300"
                type="submit"
            > Login </button>

        </form>

      
    </div>
  )
}

export default LoginForm



