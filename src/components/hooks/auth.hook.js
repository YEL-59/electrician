import { axiosPrivate, axiosPublic } from "@/lib/axios.config";
import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";

// Define schemas directly since we're not importing them
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    password_confirmation: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

const sendOtpSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const resetPasswordSchema = z
  .object({
    new_password: z.string().min(6, "Password must be at least 6 characters"),
    new_password_confirmation: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.new_password === data.new_password_confirmation, {
    message: "Passwords do not match",
    path: ["new_password_confirmation"],
  });

export const useSignUp = () => {
  const router = useRouter();

  const form = useForm({
    // resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      // Using the endpoint from Postman collection
      const res = await axiosPublic.post("/register", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return res.data;
    },
    onSuccess: (data) => {
      // Always navigate after a successful registration (201),
      // some APIs don't return a token on register
      toast.success(data?.message || "User registered successfully");
      router.push("/auth/signin");
    },

    onError: (error) => {
      const message =
        error?.response?.data?.message || "Failed to register user";
      if (message.includes("email")) {
        form.setError("email", { message });
      } else {
        toast.error(message);
      }
    },
  });

  return { form, mutate, isPending };
};

//sign in
export const useSignIn = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectUrl = searchParams.get("redirect");

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //login route
  const { mutate, isPending } = useMutation({
    mutationFn: async (credentials) => {
      console.log("credentials", credentials);
      const res = await axiosPublic.post("/login", credentials, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(process.env.NEXT_PUBLIC_API_AUTH_HEADER
            ? { Authorization: process.env.NEXT_PUBLIC_API_AUTH_HEADER }
            : {}),
        },
        withCredentials: false,
      });

     // console.log(res.data);
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.token) {
        toast.success("Sign in successfully");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user || {}));

        if (redirectUrl) {
          router.push(redirectUrl);
        } else {
          router.push("/");
        }
      } else {
        toast.error(data?.message || "Failed to sign in");
      }
    },
    onError: (error) => {
      // Extract message from API response
      const message =
        error?.response?.data?.message || "Failed to register user";

      // ✅ Always show toast
      toast.error(message);

      // Optionally also mark the field error
      if (message.toLowerCase().includes("email")) {
        form.setError("email", { message });
      }
    },
  });

  return { form, mutate, isPending };
};

// Logout hook
export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axiosPrivate.post("/logout");
      return res.data;
    },
    onSuccess: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      queryClient.clear();
      router.push("/auth/signin");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Something went wrong. Try again."
      );
    },
  });

  return { mutate, isPending };
};

// Forgot Password hook
export const useForgotPassword = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(sendOtpSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosPublic.post(
        "/password/forgot",
        { email: payload.email },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },
    onSuccess: (data, variables) => {
      toast.success(data?.message || "OTP sent successfully");
      router.push(`/auth/otp-verification?email=${variables.email}`);
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Something went wrong. Try again."
      );
    },
  });

  return { form, mutate, isPending };
};

// Verify OTP hook
export const useVerifyOtp = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosPublic.post("/password/verify-otp", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return res.data;
    },
    onSuccess: (data, variables) => {
      toast.success(data?.message || "OTP verified successfully");
      router.push(`/auth/reset-password?email=${variables.email}`);
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Something went wrong. Try again."
      );
    },
  });

  return { mutate, isPending };
};

// Reset Password hook
export const useResetPassword = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      new_password: "",
      new_password_confirmation: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosPublic.post(
        "/password/reset",
        {
          email: payload.email,
          new_password: payload.new_password,
          new_password_confirmation: payload.new_password_confirmation,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message || "Password reset successfully");
      router.push("/auth/signin");
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || "Something went wrong. Try again."
      );
    },
  });

  return { form, mutate, isPending };
};
