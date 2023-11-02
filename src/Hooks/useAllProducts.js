import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseAllProducts = () => {

 const {sortPrice}=useContext(AuthContext)

    const { data,refetch } = useQuery({
        queryKey: ['allProducts',sortPrice],
        queryFn: () =>
          fetch(`https://dev-town-server.vercel.app/allProducts`).then(
            (res) => res.json(),
          )
          .catch(error=> console.log(error))
      })

      console.log(data)
  return [data, refetch];
};
export default UseAllProducts;