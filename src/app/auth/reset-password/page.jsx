"use client";

import { useState, Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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

import { Eye, EyeOff, ArrowLeft, AlertCircle } from "lucide-react";
import { useResetPassword } from "@/components/hooks/auth.hook";

function ResetPasswordContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const { form, mutate, isPending } = useResetPassword();

  useEffect(() => {
    if (searchParams) {
      const emailParam = searchParams.get("email");
      if (emailParam) {
        setEmail(emailParam);
      }
    }
  }, [searchParams]);

  const onSubmit = (values) => {
    setError("");
    mutate({
      email,
      new_password: values.new_password,
      new_password_confirmation: values.new_password_confirmation,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-xl border border-gray-300 rounded-lg p-8">
        {/* Header */}
        <div className="text-start mb-8">
          <h1 className="text-3xl font-normal text-text-primary mb-2">
            Update Password
          </h1>
          <p className="text-text-secondary">
            Set the new password for your account so you can login and access
            all features.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </div>
            )}

            {/* New Password Input */}
            <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="New password"
                        className="border-0 border-b border-gray-300 rounded-none px-0 py-3 text-text-primary placeholder-text-secondary focus:border-primary-500 focus:ring-0 bg-transparent pr-10"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-3 text-text-secondary hover:text-text-primary"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Confirm Password Input */}
            <FormField
              control={form.control}
              name="new_password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="border-0 border-b border-gray-300 rounded-none px-0 py-3 text-text-primary placeholder-text-secondary focus:border-primary-500 focus:ring-0 bg-transparent pr-10"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-0 top-3 text-text-secondary hover:text-text-primary"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

            {/* Update Password Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-12 bg-yellow-500 hover:bg-yellow-600 text-white font-normal text-sm uppercase tracking-wide rounded-md"
            >
              {isPending ? "RESETTING..." : "RESET PASSWORD"}
            </Button>

            {/* Back to Sign In */}
            <div className="text-center">
              <Link
                href="/auth/signin"
                className="inline-flex items-center text-sm text-primary-500 hover:text-primary-600 font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sign In
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
          <div className="w-full max-w-xl border border-gray-300 rounded-lg p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
              <p className="text-text-secondary">Loading...</p>
            </div>
          </div>
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
