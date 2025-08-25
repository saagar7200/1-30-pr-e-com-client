import { LoggedInUsersection } from '..'
import { useAuth } from '../../../hooks/auth.hooks'

const AdminHeader = () => {
    const {user} = useAuth()
  return (
    <nav className='w-full pl-6 pr-10 py-2  flex justify-between items-center'>
        <div>
            <p className='font-bold italic text-lg text-blue-600'>Welcome Back ,</p>
        </div>
        <LoggedInUsersection user={user} logout={()=>{}}/>
    </nav>
  )
}

export default AdminHeader