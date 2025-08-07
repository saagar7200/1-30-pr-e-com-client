import WishlistProductCard from "./card"

const List = () => {

    // integrate with backend

    // 1. api / query function
    // 2. use reactQuery useQuery hook to get  data/wishlist


    const arr = Array.from({ length: 15 }, (_, i) => `wishlist-cart-${i + 1}`)


    return (
        <div className="w-full h-full">

            <div className="grid grid-cols-5 gap-6">
                {
                    arr.map((data) => <WishlistProductCard key={data} />)
                }
            </div>


        </div>
    )
}

export default List
