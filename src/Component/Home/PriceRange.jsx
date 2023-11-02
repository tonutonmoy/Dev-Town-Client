import {  useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import UseRange from "../../Hooks/useRange";
import UseAllProducts from "../../Hooks/useAllProducts";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const PriceRange = () => {
    
    const [obj, setObj] = useState({})
    const {range, setRange} = useContext(AuthContext)
    const location = useLocation();
    const currentPath = location.pathname;

    UseRange(obj);

    const [, refetch] = UseAllProducts()

    const rangeHandler = (amount) => {



        setRange(amount)
        if (currentPath === '/') {
            
           
            setObj({ price: amount, category: 'All' })
           

            return
        }
        if (currentPath === '/CategoryPage/Bag') {
            
           
            setObj({ price: amount, category: 'Bag' })
            
            return
        }
        else if (currentPath === '/CategoryPage/Toy') {
           
            
            setObj({ price: amount, category: 'Toy' })
           
            return
        }
        else if (currentPath === '/CategoryPage/Skin') {
            
           
            setObj({ price: amount, category: 'Skin' })
            
            return
        }
        else if (currentPath === '/CategoryPage/Sunglass') {
           
           
            setObj({ price: amount, category: 'Sunglass' })
            
            return
        }
        else if (currentPath === '/CategoryPage/Shoes') {
            
       
            setObj({ price: amount, category: 'Shoes' })
           
            return
        }
    }



    return (
        <div>
            
            <input type="range" min={0} max={500} value={range} className="range range-xs range-secondary w-[100px] md:w-[150px] lg:w-[200px] xl:w-[200px] 2xl:w-[250px] 3xl:w-[250px] " onChange={(e) => rangeHandler(e.target.value)} />
            <span className=" text-gray-400 ml-5"> Price: 0 - {range}</span>
        </div>
    );
};

export default PriceRange;