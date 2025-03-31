import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

// Social Link Component with hover effects and animation
const SocialLink = ({ href, icon, hoverColor, bgColor }: { href: string; icon: React.ReactNode; hoverColor: string; bgColor: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white hover:${bgColor} hover:${hoverColor} transform hover:scale-110 transition-all duration-300 mr-3`}
    >
      {icon}
    </a>
  );
};

// Footer Link Component with hover effects and icon
const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="flex items-center mb-3 text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-2"
    >
      <span className="mr-2 text-green-400 transition-opacity duration-300 opacity-0 group-hover:opacity-100">→</span>
      {children}
    </Link>
  );
};

// Contact Info component with icon
const ContactInfo = ({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="flex-shrink-0 mt-1 mr-3 text-green-400">
        {icon}
      </div>
      <div className="text-gray-300">
        {children}
      </div>
    </div>
  );
};

// Service Item component
const ServiceItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-center mb-3 group">
      <div className="w-2 h-2 mr-3 transition-all duration-300 bg-green-400 rounded-full group-hover:w-3"></div>
      <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">{children}</span>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer className="relative pt-10 pb-6 overflow-hidden text-gray-200 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>
      <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full opacity-5"></div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 bg-green-500 rounded-full w-96 h-96 opacity-5"></div>
      
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* First Column: About Us */}
          <div className="lg:pr-6">
            <h3 className="pb-3 mb-6 text-2xl font-bold text-white after:content-[''] after:block after:w-16 after:h-1 after:mt-3 after:bg-green-400">
              About Us
            </h3>
            <p className="mb-6 leading-relaxed text-gray-300">
              We are committed to helping you unlock your full potential with 
              AI-powered tools. Our platform offers a wide range of resources to 
              improve your interview skills and chances of success.
            </p>
            <div className="flex mt-4">
              <SocialLink 
                href="https://facebook.com" 
                icon={<Facebook size={16} />} 
                hoverColor="text-white" 
                bgColor="bg-blue-600"
              />
              <SocialLink 
                href="https://twitter.com" 
                icon={<Twitter size={16} />} 
                hoverColor="text-white" 
                bgColor="bg-blue-400"
              />
              <SocialLink 
                href="https://instagram.com" 
                icon={<Instagram size={16} />} 
                hoverColor="text-white" 
                bgColor="bg-pink-600"
              />
              <SocialLink 
                href="https://linkedin.com" 
                icon={<Linkedin size={16} />} 
                hoverColor="text-white" 
                bgColor="bg-blue-700"
              />
            </div>
          </div>

          {/* Second Column: Quick Links */}
          <div>
            <h3 className="pb-3 mb-6 text-2xl font-bold text-white after:content-[''] after:block after:w-16 after:h-1 after:mt-3 after:bg-green-400">
              Quick Links
            </h3>
            <nav className="flex flex-col">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Third Column: Services */}
          <div>
            <h3 className="pb-3 mb-6 text-2xl font-bold text-white after:content-[''] after:block after:w-16 after:h-1 after:mt-3 after:bg-green-400">
              Services
            </h3>
            <ul className="space-y-1">
              <ServiceItem>Interview Preparation</ServiceItem>
              <ServiceItem>Career Coaching</ServiceItem>
              <ServiceItem>Resume Building</ServiceItem>
              <ServiceItem>Mock Interviews</ServiceItem>
              <ServiceItem>Skills Assessment</ServiceItem>
            </ul>
          </div>

          {/* Fourth Column: Contact */}
          <div>
            <h3 className="pb-3 mb-6 text-2xl font-bold text-white after:content-[''] after:block after:w-16 after:h-1 after:mt-3 after:bg-green-400">
              Contact Us
            </h3>
            <ContactInfo icon={<MapPin size={18} />}>
              123 AI Street, Tech City, 12345
            </ContactInfo>
            <ContactInfo icon={<Phone size={18} />}>
              +91 123 456 7890
            </ContactInfo>
            <ContactInfo icon={<Mail size={18} />}>
              intelliView@example.com
            </ContactInfo>
            <div className="p-2 mt-4 bg-gray-700 border border-gray-700 rounded-lg bg-opacity-30">
              <p className="text-sm text-gray-300">Subscribe to our newsletter</p>
              <div className="flex mt-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-400"
                />
                <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-green-500 rounded-r-md hover:bg-green-600">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-68 pt-">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-400 md:mb-0">
              © {new Date().getFullYear()} IntelliView . All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy" className="transition-colors duration-300 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="transition-colors duration-300 hover:text-white">Terms of Service</Link>
              <Link to="/cookies" className="transition-colors duration-300 hover:text-white">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};