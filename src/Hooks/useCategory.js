import { useQuery } from "@tanstack/react-query";

const UseCategory = (category) => {

   

    const { data,refetch } = useQuery({
        queryKey: ['category',category],
        queryFn: () =>
          fetch(`https://dev-town-server.vercel.app/category?category=${category}`).then(
            (res) => res.json(),
          )
          .catch(error=> console.log(error))
      })
  return [data, refetch];
};
export default UseCategory;