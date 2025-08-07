import NavLinks from './nav-links'
import { GrFavorite } from "react-icons/gr";
import { LiaCartPlusSolid } from "react-icons/lia";
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <nav className='w-full flex items-center justify-between tracking-wider px-36 py-2'>
            {/* logo */}
            <div>
                <img
                    src={'./logo.png'}
                    alt='logo image'
                    className='object-cover h-20'
                />

            </div>
            {/* nav links */}
            <div>
                <NavLinks />

            </div>

            {/* icons */}
            <div className='flex items-center gap-4'>
                {/* wishlist */}
                <Link
                to={'/wish_list'} 
                className='cursor-pointer w-fit bg-[#F8F8F8] p-3 rounded-full flex items-center justify-center'
                >
                    <GrFavorite size={26} className='text-indigo-600' />
                </Link>
                {/* cart */}

                <Link
                to={'/cart'}
                className='cursor-pointer w-fit bg-[#F8F8F8] p-2 rounded-full flex items-center justify-center'
                
                >
                    <LiaCartPlusSolid size={30} className='mb-1 text-indigo-600'/>
                </Link>

            </div>
        </nav>
    )
}

export default NavBar
