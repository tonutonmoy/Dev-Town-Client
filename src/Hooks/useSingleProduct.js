import { useQuery } from "@tanstack/react-query";


const UseSingleProduct = (id) => {


    const { data,refetch } = useQuery({
        queryKey: ['singleProduct',id],
        queryFn: () =>
          fetch(`https://dev-town-server.vercel.app/singleProduct/${id}`)
          .then(
            (res) => res.json(),
          )
          .catch(error=> console.log(error))
      })

      console.log(data)
  return [data, refetch];
};
export default UseSingleProduct;