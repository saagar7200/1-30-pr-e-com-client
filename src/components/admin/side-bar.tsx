


import { LuLayoutDashboard } from "react-icons/lu";
import { SlTag } from "react-icons/sl";
import { Link } from 'react-router';

const sidebarLinks = [
    {
        label: 'Dashboard',
        link: '/admin',
        icon: <LuLayoutDashboard size={24} />
    },
    {
        label: 'Category',
        link: '/admin/category',
        icon: <SlTag size={24} />
    },
    {
        label: 'Brands',
        link: '/admin/category',
        icon: <SlTag size={24} />
    },
    {
        label: 'Products',
        link: '/admin/category',
        icon: <SlTag size={24} />
    },
    {
        label: 'Users',
        link: '/admin/category',
        icon: <SlTag size={24} />
    },
    {
        label: 'Orders',
        link: '/admin/category',
        icon: <SlTag size={24} />
    }
]

const SideBar = () => {
    return (
        <aside>
            {/* logo */}
            <div className='flex items-center gap-4'>
                <div>
                    <img
                        src={"./logo.png"}
                        alt="logo image"
                        className="object-cover h-20"
                    />
                </div>
                <p className='text-xl font-bold italic text-indigo-700'>Shop Kart</p>
            </div>
            {/* sidebar navigation */}
            <div className='flex flex-col gap-1'>
                {
                    sidebarLinks.map((item) => (
                        <Link to={item.link}>
                            <div className='flex items-center gap-2 px-2 hover:bg-blue-600 group py-3 rounded-sm'>
                                <div className='text-blue-600 group-hover:text-white'>{item.icon}</div>
                                <p className='text-lg font-semibold text-blue-700 group-hover:text-white'>{item.label}</p>
                            </div>
                        </Link>
                    ))
                }

            </div>


        </aside>
    )
}

export default SideBar