import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#333A40] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Electricians <br /> in this area
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Electrician In This Area is the premier online platform connecting
              individuals with qualified and trusted electricians and other pros
              in their local communities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/search"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/global-day"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Global Electrician Day™
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/claim"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Claim your listing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">
              Follow us on
            </h3>
            <div className="flex space-x-4 mb-6">
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 hover:text-yellow-400"
              >
                <i className="fab fa-facebook-f"></i>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 hover:text-yellow-400"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 hover:text-yellow-400"
              >
                <i className="fab fa-youtube"></i>
              </Button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span>hi@electema.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span>+1 (333) 000-0000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-yellow-500 text-center py-3 text-sm font-semibold text-gray-900 max-w-4xl mx-auto">
        Global Electrician Day – July 15 – Celebrating Professional Powering Our
        World
      </div>
    </footer>
  );
}
