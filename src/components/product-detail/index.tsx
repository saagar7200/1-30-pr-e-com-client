import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProductById } from "../../api/product.api";
import ComponentTitle from "../landing/conponent-title-with-button";
import ImageSection from "./image-section";
import DescriptionSection from "./description-section";
import RecomendedSection from "./recomended-poroducts";

interface IProps {
  id: string;
}

const ProductDetail: React.FC<IProps> = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getProductById(id),
    queryKey: ["get_product_by_id", id],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div>
      <ComponentTitle
        title={data?.data?.name}
        subTitle={data?.data?.description}
      />
      <div className="grid grid-cols-2 gap-6">
        <div className="max-h-[550px]">
          <ImageSection name={data?.data?.name} images={data?.data?.images} />
        </div>
        {/* desc section */}
        <div className="">
          <DescriptionSection product={data?.data} />
        </div>
      </div>

      {/* recomended */}

      <RecomendedSection />
    </div>
  );
};

export default ProductDetail;
