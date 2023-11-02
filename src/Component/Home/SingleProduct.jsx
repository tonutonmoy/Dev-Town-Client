
import { useParams } from "react-router-dom";

import UseSingleProduct from "../../Hooks/useSingleProduct";


const SingleProduct = () => {
    const {id}=useParams()

    
     

   const [data] = UseSingleProduct(id);

   console.log(data,'data')

    return (
    
      <div className="flex flex-col w-[90%] bg-white rounded shadow-lg  md:w-[90%] lg:w-[70%] xl:w-[70%] 3xl:lg:w-[70%] mx-auto my-[150px]">
        <div className="w-full h-[300px] bg-top bg-cover rounded-t" style={{ backgroundImage: `url(${data?.image})` }}></div>
        <div className="flex flex-col w-full md:flex-row ">
          <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-3xl"></div>
            <div className="md:text-6xl">${data?.price}</div>
            <div className="md:text-xl"> </div>
          </div>
          <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">{data?.title}</h1>
            <p className="leading-normal">{data?.description}</p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
              <div className="w-1/2">
              <span className=" font-[500]">Category:</span> {data?.category}
              </div>
              <div className="w-1/2 flex justify-end">
               <button>
               <img src="https://collegefootballplayoff.com/images/section_logo.png" alt="" className="w-8" />
               </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    );
};

export default SingleProduct;