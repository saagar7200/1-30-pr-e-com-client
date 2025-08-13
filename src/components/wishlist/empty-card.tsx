import { Link } from "react-router"

const EmptyWishlist = () => {
  return (
    <div>
        <p>
            You have&apos;t added any items to your wishlist yet. Start exploring and add your favorite products!
        </p>
        <div className="w-[150px]">
            <Link 
             to={'/'}
             className="tracking-wider w-full p-3 rounded-md text-lg font-bold text-white cursor-pointer bg-indigo-600 hover:bg-indigo-800  transition-all duration-300"
             >
                    Shop Now
            </Link>

            
        </div>
    </div>
  )
}

export default EmptyWishlist