"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, Calendar, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  const metrics = [
    { name: "Weight", value: 45, unit: "kg", icon: Activity },
    { name: "Height", value: 168, unit: "cm", icon: Ruler },
    { name: "Age", value: 20, unit: "years", icon: Calendar },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-br from-orange-50 to-orange-100 min-h-screen">
      {/* Greeting Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900">Hi, Putra!</h1>
        <p className="mt-2 text-xl text-gray-600">
          Welcome back to your health dashboard.
        </p>
      </motion.div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <metric.icon className="w-6 h-6 text-orange-500" />
                  <p className="text-lg font-medium text-gray-700">
                    {metric.name}
                  </p>
                </div>
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-3">
                {metric.value}
                <span className="text-2xl ml-1 text-gray-500">
                  {metric.unit}
                </span>
              </p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-sm text-gray-500">Last updated: Today</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col lg:flex-row items-center gap-10 bg-white p-8 rounded-3xl shadow-xl"
      >
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/images/homepage.png"
            alt="Healthy Food"
            width={400}
            height={300}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
        {/* Text and Button Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            What have you eaten today?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's fill in your daily journal and track your nutrition goals!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/dashboard/journal"
              className="px-8 py-4 bg-orange-500 text-white font-medium text-lg rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>MY JOURNAL</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
