"use client";

import { motion } from "framer-motion";
import { Apple, ArrowRight, Heart, Leaf, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden">

      {/* Curved bottom shape with enhanced gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 42.3C840 37 960 33 1080 36.7C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-fit"
              aria-label="Nutrimate Logo"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full blur-2xl opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <Image
                src="/images/logo.png"
                width={180}
                height={180}
                alt="Nutrimate Logo"
                className="relative z-10 drop-shadow-xl"
              />
            </motion.div>

            {/* Enhanced Heading Section */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-orange-500">Health</span>{" "}
                <span className="text-gray-700">
                  Begins with <br className="hidden md:inline" /> the Right{" "}
                </span>
                <span className="text-orange-500">Nutrition</span>
              </h1>
              <p className="text-gray-700 text-lg sm:text-xl md:text-2xl max-w-xl leading-relaxed">
                Discover personalized meal plans and expert nutrition advice
                tailored just for you.
              </p>
            </div>

            {/* Enhanced CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gap-2 w-full sm:w-auto"
                  >
                    <span>Get Started</span>
                    <Heart className="w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/learn-more"
                    className="inline-flex items-center justify-center bg-white text-orange-600 border-2 border-orange-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 gap-2 w-full sm:w-auto"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Apple className="w-5 h-5 text-orange-500" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600">
                  Join{" "}
                  <span className="font-semibold text-orange-600">5,000+</span>{" "}
                  healthy individuals
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main image with enhanced shadow and gradient border */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-orange-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/hero.png"
                  alt="Healthy meal bowl with avocado and vegetables"
                  width={700}
                  height={700}
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Enhanced floating elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -top-10 right-10"
              >
                <motion.div
                  className="bg-white p-4 rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Utensils className="w-8 h-8 text-orange-500" />
                </motion.div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -bottom-6 left-10"
              >
                <motion.div
                  className="bg-white p-4 rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Leaf className="w-8 h-8 text-green-500" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
