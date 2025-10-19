import { axiosPublic } from "@/lib/axios.config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { contactUsSchemas } from "../schemas/contactus.schemas";
import { useForm } from "react-hook-form";

export const useContactImages = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["contact-images"],
    //add async await here
    queryFn: async () => {
      const res = await axiosPublic.get("/contact-images");
      return res.data;
    },
  });
  return { data, isLoading, error };
};

export const useContact = () => {
  const form = useForm({
    resolver: zodResolver(contactUsSchemas),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosPublic.post("/contacts", payload);
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data.message);
      } else {
        toast.error("Failed to send message");
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Failed to send message");
    },
  });

  return { form, mutate, isLoading };
};
