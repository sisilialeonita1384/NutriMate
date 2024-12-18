"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Meal Plans", href: "#meal-plans" },
    { name: "Pricing", href: "#pricing" },
    { name: "Success Stories", href: "#stories" },
    { name: "Mobile App", href: "#app" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Press Kit", href: "#press" },
    { name: "Partners", href: "#partners" },
  ],
  support: [
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
};

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    text: "support@nutrimate.com",
    href: "mailto:support@nutrimate.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    text: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "123 Nutrition Street, Health City, HC 12345",
    href: "#location",
  },
];

const socialLinks = [
  {
    icon: <Instagram className="w-6 h-6" />,
    href: "#instagram",
    name: "Instagram",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    href: "#twitter",
    name: "Twitter",
  },
  {
    icon: <Facebook className="w-6 h-6" />,
    href: "#facebook",
    name: "Facebook",
  },
  {
    icon: <Youtube className="w-6 h-6" />,
    href: "#youtube",
    name: "Youtube",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-600 to-orange-400 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-orange-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-bold">
                Join our newsletter
              </h3>
              <p className="text-orange-100 text-lg">
                Get nutrition tips, recipes, and updates about Nutrimate
                delivered to your inbox.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-orange-700/30 border border-orange-300/30 focus:outline-none focus:border-white transition-colors placeholder-orange-200 text-white"
              />
              <button className="px-6 py-3 bg-white text-orange-600 hover:bg-orange-100 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 hover:gap-3">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={itemVariants}
          >
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Nutrimate Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-orange-100 max-w-md text-lg">
              Your personal nutrition assistant powered by AI. We help you
              achieve your health goals through personalized meal plans and
              nutrition tracking.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-orange-100 hover:text-white transition-colors transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              className="space-y-6"
              variants={itemVariants}
            >
              <h4 className="text-xl font-semibold capitalize">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-orange-100 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="mt-16 pt-8 border-t border-orange-300/30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={info.href}
                  className="flex items-center gap-3 text-orange-100 hover:text-white transition-colors group"
                >
                  <span className="text-white group-hover:scale-110 transition-transform">
                    {info.icon}
                  </span>
                  <span>{info.text}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-orange-300/30 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="text-orange-100 text-sm" variants={itemVariants}>
            © {new Date().getFullYear()} Nutrimate. All rights reserved.
          </motion.p>
          <motion.div className="flex gap-6" variants={itemVariants}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-orange-100 hover:text-white text-sm transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
