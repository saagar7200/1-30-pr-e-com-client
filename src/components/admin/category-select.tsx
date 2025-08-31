import { useQuery } from "@tanstack/react-query"
import SelectInput from "../common/inputs/select-input"
import { getAllCategory } from "../../api/category.api"
import type { ICategoryData } from "../../types/category.types"

const CategorySelect = () => {

  const { data, isLoading } = useQuery({
    queryFn: getAllCategory,
    queryKey: ['get_all_category']
  })

  if (isLoading) {
    return <p>Loading....</p>
  }

  const options = data?.data.map((cat: ICategoryData) => ({ label: cat.name, value: cat._id }))

  return (
    <div>
      <SelectInput
        id="category"
        label="Category"
        placeholder="Select Category"
        options={options}
        required
      />

    </div>
  )
}

export default CategorySelect