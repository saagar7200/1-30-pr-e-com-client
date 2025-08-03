import { VscGroupByRefType } from "react-icons/vsc";

const CategoryCard = () => {
  return (
    <div className="p-4 flex items-center gap-2 bg-[#f8f8f8] rounded-md">
      {/* icon */}
      <div>
        <VscGroupByRefType size={30} className="text-[#A31621]"/>
      </div>
      {/* title & sub title */}
      <div>
        <p className="text-lg text-gray-900 font-bold">Electronics</p>
        <p className="text-[12px] line-clamp-2 text-gray-600">Surveillance cameras for security and monitoring.</p>
      </div>
    </div>
  );
};

export default CategoryCard;
