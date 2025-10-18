"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  PinterestIcon,
} from "@/components/icons/SvgIcon";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HeartIcon } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/auth/signin");
  };

  return (
    <nav
      className={`bg-primary shadow-lg fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "shadow-2xl" : ""
      }`}
    >
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
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Currency Selector */}
              <div className="flex items-center space-x-2">
                <Select
                  value={selectedCurrency}
                  onValueChange={setSelectedCurrency}
                >
                  <SelectTrigger className="w-20 h-6 text-xs border-0 shadow-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="BDT">BDT</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                    <SelectItem value="INR">INR</SelectItem>
                    <SelectItem value="CNY">CNY</SelectItem>
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
              <div className="hidden md:flex items-center space-x-6 text-white font-medium">
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors nav-link"
                >
                  Home
                </Link>
                <Link
                  href="/search"
                  className="hover:text-yellow-400 transition-colors nav-link"
                >
                  Search
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition-colors nav-link"
                >
                  Contact
                </Link>
                <Link
                  href="/globalelectricianday"
                  className="hover:text-yellow-400 transition-colors nav-link"
                >
                  Global Electrician Day™
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-yellow-400 transition-colors nav-link"
                >
                  Blog
                </Link>
                <Link
                  href="/wishlist"
                  className="hover:text-yellow-400 transition-colors nav-link"
                >
                  <HeartIcon className="w-7 h-7" />
                </Link>
                {/* Show Login or Avatar */}
                {!user ? (
                  <Link
                    href="/auth/signin"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Login
                  </Link>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar className="cursor-pointer w-8 h-8">
                        <AvatarImage
                          src={user.avatar || "/default-avatar.png"}
                        />
                        <AvatarFallback className="bg-yellow-400 text-black capitalize font-bold">
                          {user.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                      {/* Show user email */}
                      <DropdownMenuItem className="text-sm text-gray-500">
                        {user.email}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => router.push("/profile")}>
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>

              {/* Right: Button */}
              <div>
                <Link href="/claimlistingform" className="inline-block">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                    Claim your listing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </nav>
  );
}
