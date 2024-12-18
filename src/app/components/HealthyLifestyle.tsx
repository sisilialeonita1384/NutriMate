"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { benefits, plans } from "../../data/healthyLifestyle";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HealthyLifestyle() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600"
          >
            Why Choose a Healthy Lifestyle?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Transform your life with our comprehensive approach to health and
            wellness
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-center space-x-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 text-lg">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-8 grid-rows-6 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="col-span-4 row-span-3 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/meditation.png"
                alt="Person meditating"
                width={600}
                height={450}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                priority
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="col-span-4 row-span-6 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/healthy-eating.png"
                alt="Person eating healthy food"
                width={300}
                height={900}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                priority
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="col-span-4 row-span-3 rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/fitness.png"
                alt="Fitness equipment"
                width={600}
                height={450}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-700 lg:text-5xl font-bold mb-4">
              Tailored Plans for Your Goals
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Build healthier habits with personalized lessons designed for your
              unique journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className={`${plan.bgColor} p-8 rounded-2xl shadow-lg transition-all duration-300`}
              >
                <div
                  className={`${plan.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                >
                  <span className="text-4xl" role="img" aria-label={plan.alt}>
                    {plan.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-3 text-center">
                  {plan.title}
                </h3>
                <p className="text-gray-600 text-center">{plan.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 px-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 font-medium text-orange-600 hover:text-orange-700"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
