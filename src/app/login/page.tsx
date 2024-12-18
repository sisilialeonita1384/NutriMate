"use client";

import { Chrome, Eye, EyeOff, Facebook, Lock, Mail } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Add your login logic here
      // If login successful:
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section with Improved Image Handling */}
      <div className="w-1/2 relative hidden lg:flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50">
        <div className="absolute inset-0 bg-black/5" />
        <Image
          src="/images/healthy-food.png"
          alt="Healthy food"
          height={1080}
          width={1080}
          className="object-cover opacity-90"
        />
      </div>

      {/* Right Section with Enhanced Styling */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-6 lg:px-20 bg-white">
        <div className="mx-auto w-full max-w-md space-y-8">
          {/* Logo with Animation */}
          <div className="relative h-16 w-full hover:scale-105 transition-transform">
            <Image
              src="/images/logo.png"
              alt="Logo"
              layout="fill"
              className="object-contain"
            />
          </div>

          {/* Enhanced Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Welcome back!
            </h2>
            <p className="mt-2 text-gray-600">
              Please enter your details to access your account
            </p>
          </div>

          {/* Improved Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:shadow-md transition-all duration-200">
              <Chrome size={20} />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:shadow-md transition-all duration-200">
              <Facebook size={20} />
              <span className="text-sm font-medium">Facebook</span>
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Enhanced Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  type="email"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200"
                  placeholder="youraddress@email.com"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200"
                  placeholder="Enter your password"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-orange-500 hover:text-orange-600"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center py-2.5 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg text-center font-medium transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Login to Continue"
              )}
            </button>
          </form>

          {/* Enhanced Footer */}
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="font-medium text-orange-500 hover:text-orange-600 hover:underline transition-all duration-200"
            >
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
