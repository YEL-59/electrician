"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { GoogleIcon } from "@/components/icons/SvgIcon";
import { useSignIn } from "@/components/hooks/auth.hook";
import { usePrivacyPolicies } from "@/components/hooks/system.hook";

export default function SignInPage() {
  const { form, mutate, isPending } = useSignIn();
  const { data, isLoading, error } = usePrivacyPolicies();
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("error", error);

  const onSubmit = (values) => {
    mutate(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-xl border border-gray-300 rounded-lg p-8 ">
        {/* Header */}
        <div className="text-start mb-8">
          <h1 className="text-3xl font-medium text-text-primary mb-2">
            Login your account
          </h1>
          <p className="text-text-secondary">Enter your details below</p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email or Phone Number"
                      className="border-0 border-b border-gray-300 rounded-none px-0 py-3 text-text-primary placeholder-text-secondary focus:border-primary-500 focus:ring-0 bg-transparent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Password Input */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="border-0 border-b border-gray-300 rounded-none px-0 py-3 text-text-primary placeholder-text-secondary focus:border-primary-500 focus:ring-0 bg-transparent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Forgot Password Link */}
            <div className="text-left -mt-5">
              <Link
                href="/auth/forgot-password"
                className="text-primary-500 hover:text-primary-600 text-sm font-normal"
              >
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-normal text-sm uppercase tracking-wide rounded-md"
            >
              {isPending ? "SIGNING IN..." : "SIGN IN"}
            </Button>

            {/* Or Divider */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-text-secondary text-sm">Or</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Google Sign In Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border border-gray-300 bg-white  hover:bg-gray-50 text-text-primary font-medium rounded-md hover:text-text-primary flex items-center justify-center space-x-3"
            >
              {/* Google Logo */}
              <div className="flex items-center space-x-1">
                <GoogleIcon />
              </div>
              <span>Sign in with Google</span>
            </Button>

            {/* Footer Link */}
            <div className="text-center text-sm text-text-secondary">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Sign up
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
