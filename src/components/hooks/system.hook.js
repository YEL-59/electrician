import { axiosPublic } from "@/lib/axios.config";
import { useQuery } from "@tanstack/react-query";


export const usePrivacyPolicies = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["privacy-policies"],
    queryFn: () => axiosPublic.get("/privacy-policies"),
  });
  return { data, isLoading, error };
};
