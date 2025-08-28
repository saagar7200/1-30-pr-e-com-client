import PageTitle from '../../../components/admin/page-title'

function CategoryList() {
  return (
    <div>
      <PageTitle 
        title="Categories"
        link="/admin/add/category"
        button_label='Add Category'
      />
    </div>
  )
}

export default CategoryList