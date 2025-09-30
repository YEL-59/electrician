"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import SvgIcon, {
  SearchIcon,
  UserIcon,
  HeartIcon,
  CartIcon,
  MenuIcon,
  CloseIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  TelegramIcon,
  ChevronDownIcon,
  PinterestIcon,
  LogoIcon,
} from "@/components/icons/SvgIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Settings, LogOut, Store, Package, BarChart3 } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  return (
    <nav className="bg-primary shadow-lg">
      {/* Top Bar with Social Icons */}
      <div className="bg-primary text-black py-0 text-sm border-b border-[#3688ff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-pink-300 transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-blue-300 transition-colors">
                  <PinterestIcon className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-red-300 transition-colors">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                {/* <a href="#" className="hover:text-blue-300 transition-colors">
                  <TelegramIcon className="w-4 h-4" />
                </a> */}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Currency Selector */}
              <div className="flex items-center space-x-2">
                <Select
                  value={selectedCurrency}
                  onValueChange={setSelectedCurrency}
                >
                  <SelectTrigger className="w-20 h-6 text-xs  border-0 shadow-none ">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD </SelectItem>
                    <SelectItem value="BDT">BDT </SelectItem>
                    <SelectItem value="EUR">EUR </SelectItem>
                    <SelectItem value="GBP">GBP </SelectItem>
                    <SelectItem value="INR">INR </SelectItem>
                    <SelectItem value="CNY">CNY </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <header className="bg-transparent">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            {/* Left: Logo + Title */}
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold text-xl leading-tight">
                Electricians
                <br />
                <span className="font-normal">in this area</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Center: Nav Links */}
              <nav className="hidden md:flex items-center space-x-6 text-white font-medium">
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/search"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Search
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/global-electrician-day"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Global Electrician Day™
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/login"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Login
                </Link>
              </nav>

              {/* Right: Button */}
              <div>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  Claim your listing
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/products"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/stores"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Stores
              </Link>
              <Link
                href="/categories"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </Link>

              {session ? (
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={session.user.image}
                        alt={session.user.name}
                      />
                      <AvatarFallback>
                        {session.user.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {session.user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {session.user.email}
                      </div>
                    </div>
                    <Badge
                      className={`ml-auto ${getRoleColor(session.user.role)}`}
                    >
                      {session.user.role}
                    </Badge>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <Link
                      href={getDashboardLink(session.user.role)}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Orders
                    </Link>
                    <Button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      variant="ghost"
                      className="w-full justify-start text-red-600 hover:text-red-600"
                    >
                      Sign out
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="pt-4 pb-3 border-t border-gray-200 space-y-1 px-2">
                  <Link
                    href="/auth/signin"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
