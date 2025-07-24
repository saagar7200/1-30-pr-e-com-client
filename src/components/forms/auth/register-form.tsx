import Button from '../../common/button'
import Input from '../../common/inputs/input'

const RegisterForm = () => {
  return (
    <div>
        <form className='flex flex-col gap-6'>
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
                    placeholder={'XXXXXXXXXX'}
                    required

                />
                <Input 
                    label={'Confirm Password'}
                    id={'confirm_password'}
                    name={'confirm_password'}
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
      
    </div>
  )
}

export default RegisterForm
