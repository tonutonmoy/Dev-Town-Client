import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseRange = (obj) => {
    const {setSortPrice,sortPrice}=useContext(AuthContext)

   
const {price,category}=obj;

    const { data,refetch } = useQuery({
        queryKey: ['price',category,price],
        queryFn: () =>
        fetch(`https://dev-town-server.vercel.app/price`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ category, price }), 
          })
            .then((res) => {
             
                return res.json()})
            .catch((error) => {
              console.error(error);
              throw error; 
            })
      })
      setSortPrice(data)
  return [data, refetch];
};
export default UseRange;