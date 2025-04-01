import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

// Social Link Component - simplified for better spacing
const SocialLink = ({ href, icon, bgColor }: { href: string; icon: React.ReactNode; bgColor: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center justify-center w-8 h-8 rounded-full ${bgColor} text-white hover:opacity-80 transition-opacity duration-200 mr-2`}
    >
      {icon}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer className="py-6 text-gray-200 bg-gray-800">
      <Container>
        {/* Main Footer Content - Reduced padding and simplified structure */}
        <div className="grid grid-cols-1 gap-6 mb-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Column - Reduced text content */}
          <div>
            <h4 className="pl-2 mb-3 text-lg font-semibold text-white border-l-2 border-green-400">
              About Us
            </h4>
            <p className="mb-3 text-sm text-gray-300">
              We help you unlock your potential with AI-powered interview tools and resources.
            </p>
            <div className="flex mt-2">
              <SocialLink href="https://facebook.com" icon={<Facebook size={14} />} bgColor="bg-blue-600" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={14} />} bgColor="bg-blue-400" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={14} />} bgColor="bg-pink-600" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={14} />} bgColor="bg-blue-700" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="pl-2 mb-3 text-lg font-semibold text-white border-l-2 border-green-400">
              Quick Links
            </h4>
            <nav className="grid grid-cols-1 gap-1">
              {MainRoutes.map((route) => (
                <Link 
                  key={route.href} 
                  to={route.href}
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="pl-2 mb-3 text-lg font-semibold text-white border-l-2 border-green-400">
              Services
            </h4>
            <ul className="grid grid-cols-1 gap-1">
              {["Interview Preparation", "Career Coaching", "Resume Building", "Mock Interviews", "Skills Assessment"].map((service) => (
                <li key={service} className="text-sm text-gray-300 transition-colors hover:text-white">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="pl-2 mb-3 text-lg font-semibold text-white border-l-2 border-green-400">
              Contact Us
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300">
                <MapPin size={14} className="flex-shrink-0 mr-2 text-green-400" />
                <span>123 AI Street, Tech City</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone size={14} className="flex-shrink-0 mr-2 text-green-400" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={14} className="flex-shrink-0 mr-2 text-green-400" />
                <span>intelliView@example.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section - Simplified */}
        <div className="pt-4 mt-4 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between text-xs sm:flex-row">
            <p className="mb-2 text-gray-400 sm:mb-0">
              © {new Date().getFullYear()} IntelliView. All rights reserved.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <Link to="/privacy" className="transition-colors hover:text-white">Privacy</Link>
              <Link to="/terms" className="transition-colors hover:text-white">Terms</Link>
              <Link to="/cookies" className="transition-colors hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};