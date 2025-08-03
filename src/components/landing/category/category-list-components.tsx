import ComponentTitle from '../conponent-title-with-button'
import CategoryCard from './category-card'

const CategoryList = () => {


    return (
        <div className='mt-10 px-36'>
            <ComponentTitle
                title='Browse Our Best Selling Product Categories'
                subTitle='Discover top-rated products by category loved by our customers.'
            />
            <div className='grid grid-cols-4 gap-6'>

                {
                    [1, 2, 3, 4, 5, 5,7,8].map((_, index) => <CategoryCard />)
                }
            </div>

        </div>
    )
}

export default CategoryList
