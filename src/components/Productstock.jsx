import React from "react";
import { IoSearch } from "react-icons/io5";
import ProductImageList from "../assets/ProductImageList.png";

const products = Array(8).fill({
  image: ProductImageList,
  name: "Apple Watch Series 4",
  category: "Digital Product",
  price: "$690.00",
  piece: "63",
});

const Productstock = () => {
  return (
    <div className="ml-[240px] mt-[70px] p-6 border min-h-screen">
      <div className="space-y-4">
        <div className="justify-between flex items-center">
          <h1 className="text-[#202224] font-nunito-sans text-[32px] font-bold tracking-[-0.114px]">
            Product Stock
          </h1>
          <div className="relative w-[332px] h-[40px] flex-shrink-0">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <IoSearch className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-12 rounded-[19px] bg-white border-[#D5D5D5] w-full h-[38px] placeholder-gray-500 text-sm"
            />
          </div>
        </div>
        <div className="w-full border overflow-x-auto rounded-lg">
          <table className="w-full bg-white rounded-lg">
            <thead className="h-[48px] bg-[#F1F4F9] rounded-[12px] flex-shrink-0 mb-8">
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-gray-700 border">Image</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700 border">Product Name</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700 border">Category</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700 border">Price</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700 border">Piece</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700 border">Available Color</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-left text-gray-700">
                    <img src={product.image} alt={product.name} />
                  </td>
                  <td className="px-4 py-2 text-left text-gray-700">{product.name}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{product.category}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{product.price}</td>
                  <td className="px-4 py-2 text-left text-gray-700">{product.piece}</td>
                  <td className="px-4 py-2 text-left text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="98" height="20" viewBox="0 0 98 20" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M46 20C51.5228 20 56 15.5228 56 10C56 4.47715 51.5228 0 46 0C40.4772 0 36 4.47715 36 10C36 15.5228 40.4772 20 46 20Z" fill="#9F9F9F" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M82 20C87.5228 20 92 15.5228 92 10C92 4.47715 87.5228 0 82 0C76.4772 0 72 4.47715 72 10C72 15.5228 76.4772 20 82 20Z" fill="#E98F8F" />
                    </svg>
                  </td>
                  <td className="px-4 py-2 text-left text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="33" viewBox="0 0 96 33" fill="none">
                      <rect x="0.3" y="1.3" width="95.4" height="31.4" rx="7.7" fill="#FAFBFD" stroke="#D5D5D5" strokeWidth="0.6" />
                      <g opacity="0.6">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.6973 18.424L22.2227 18.778L22.576 16.3027L28.94 9.93867C29.5258 9.35288 30.4755 9.35288 31.0613 9.93867C31.6471 10.5245 31.6471 11.4742 31.0613 12.06L24.6973 18.424Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.2324 10.646L30.3538 12.7673" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.5 18.5V23.5C28.5 24.0523 28.0523 24.5 27.5 24.5H17.5C16.9477 24.5 16.5 24.0523 16.5 23.5V13.5C16.5 12.9477 16.9477 12.5 17.5 12.5H22.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <path fillRule="evenodd" clipRule="evenodd" d="M76.1996 24.4H67.7996C67.1369 24.4 66.5996 23.8627 66.5996 23.2V12.4H77.3996V23.2C77.3996 23.8627 76.8624 24.4 76.1996 24.4Z" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M70.2008 20.8V16" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M73.8004 20.8V16" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M64.1992 12.4H79.7992" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M73.8 10H70.2C69.5373 10 69 10.5373 69 11.2V12.4H75V11.2C75 10.5373 74.4627 10 73.8 10Z" stroke="#EF3826" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path opacity="0.700544" d="M48.5 32.7641V1" stroke="#979797" strokeWidth="0.4" strokeLinecap="square" />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Productstock;
