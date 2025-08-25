import { Outlet } from 'react-router'
import AdminHeader from '../components/header/admin'

const AdminLayout = () => {
    return (
        <main className='w-full h-full flex'>
            {/* sidebar  */}
            <div className='h-full w-[300px] border-r border-blue-300 shadow py-6 px-1'>
                sidebar
            </div>
            <div className=' h-full w-full'>

                {/* nav bar */}
                <div className='w-full border-b border-blue-300 shadow'>
                   <AdminHeader/>
                </div>

                {/* page content */}
                <div className='p-6'>
                    <Outlet />
                </div>

            </div>


        </main>
    )
}

export default AdminLayout