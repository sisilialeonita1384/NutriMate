"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaBars,
  FaBook,
  FaChartBar,
  FaHome,
  FaSignOutAlt,
  FaThumbsUp,
  FaTimes,
  FaUtensils,
} from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", icon: <FaHome size={20} />, label: "Home" },
    {
      href: "/dashboard/input-meal",
      icon: <FaUtensils size={20} />,
      label: "Input Daily Meal",
    },
    {
      href: "/dashboard/recommendations",
      icon: <FaThumbsUp size={20} />,
      label: "See Recommendations",
    },
    {
      href: "/dashboard/journal",
      icon: <FaBook size={20} />,
      label: "My Journal",
    },
    {
      href: "/dashboard/progress-overview",
      icon: <FaChartBar size={20} />,
      label: "Progress Overview",
    },
  ];

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-orange-500 text-white"
      >
        {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
        />
      )}

      <aside
        className={`sticky top-0 h-screen bg-white shadow-xl z-40 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="hidden lg:flex absolute -right-3 top-8 bg-orange-500 text-white p-1 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
        >
          <FaBars size={16} />
        </button>

        <div className="p-4 flex justify-center items-center border-b border-gray-100">
          <img
            src="/images/logo.png"
            alt="Nutrimate Logo"
            className={`transition-all duration-300 ${
              isCollapsed ? "w-12 h-12" : "w-32 h-20"
            } hover:scale-105`}
          />
        </div>

        <nav className="mt-6 px-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center ${
                  isCollapsed ? "justify-center" : "justify-start"
                } p-3 mb-3 rounded-xl transition-all duration-200 group hover:bg-orange-50 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-600"
                }`}
              >
                <span
                  className={`transition-colors duration-200 ${
                    isActive ? "text-white" : "text-orange-500"
                  } ${isCollapsed ? "mr-0" : "mr-3"} group-hover:scale-110`}
                >
                  {link.icon}
                </span>
                {!isCollapsed && (
                  <span
                    className={`font-medium whitespace-nowrap ${
                      isActive ? "text-white" : "text-orange-500"
                    }`}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
          <button
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "justify-start"
            } w-full p-3 rounded-xl transition-all duration-200 text-gray-600 hover:bg-red-50 hover:text-red-500 group`}
          >
            <FaSignOutAlt
              size={20}
              className="text-red-500 group-hover:scale-110 transition-transform"
            />
            {!isCollapsed && <span className="ml-3 font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
