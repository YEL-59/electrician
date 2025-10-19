import { useQuery } from "@tanstack/react-query";

export const useGlobalElectrician = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["global-electrician"],
    queryFn: async () => {
      const res = await axiosPublic.get("/global-electrician-days/");
      return res.data;
    },
  });
  return { data, isLoading };
};
