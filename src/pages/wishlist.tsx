import ComponentTitle from "../components/landing/conponent-title-with-button"
import List from "../components/wishlist/list"

const Wishlist = () => {
    return (
        <main className="px-36 mt-5">
            <ComponentTitle
                title={"Your Dream List"}
                subTitle={"Easily find and shop the products you have saved"}
            />
            {/* wishlisted products */}
            <div>
                <List />
            </div>

        </main>
    )
}

export default Wishlist
