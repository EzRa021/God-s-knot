import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">God's Knot Hospital</h3>
            <p className="text-green-100 mb-6">
              Providing compassionate, high-quality healthcare services to our
              community for over {new Date().getFullYear() - 2014} years.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/GodsknotHospital"
                className="text-green-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/godsknothospitalltd"
                className="text-green-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              
              <li>
                <Link
                  href="/"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-green-300 mt-0.5" />
                <span className="text-green-100">
                  Opposite NIPCO Filling Station, Off Ido/Eruwa Road
                  <br />
                  lyana Ekerin, Ologuneru
                  <br />
                  Ibadan, Oyo State
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-green-300" />
                <span className="text-green-100">08110014978,
                08157041274, 07032451916
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-green-300" />
                <a
                  href="mailto:godsknothospital@gmail.com"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  godsknothospital@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-200">
          <p>
            © {new Date().getFullYear()} God's Knot Hospital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
