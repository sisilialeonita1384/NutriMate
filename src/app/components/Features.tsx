"use client";

import { motion } from "framer-motion";
import { Activity, Apple, Bell, Book, Calendar, ChartBar } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    icon: <Activity className="w-6 h-6" />,
    text: "Daily Nutritions",
    description:
      "Track your daily intake of proteins, carbs, fats, vitamins and minerals with our comprehensive nutrition database.",
  },
  {
    icon: <ChartBar className="w-6 h-6" />,
    text: "Calories Tracking",
    description:
      "Monitor your calorie intake and burning with detailed charts and insights to help you reach your fitness goals.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    text: "Nutritional Alerts",
    description:
      "Get timely reminders for meals, water intake, and nutrients you might be missing in your diet.",
  },
  {
    icon: <Apple className="w-6 h-6" />,
    text: "Food Recommendation",
    description:
      "Receive personalized food suggestions based on your dietary preferences, restrictions, and nutritional needs.",
  },
  {
    icon: <Book className="w-6 h-6" />,
    text: "Food Journal",
    description:
      "Keep track of your meals with photos, notes, and mood tracking to understand your eating patterns.",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    text: "Daily Progress Overview",
    description:
      "View your daily, weekly, and monthly progress with detailed insights and achievement tracking.",
  },
];

const benefits = [
  {
    title: "Find a diet you love",
    description:
      "Find a nutritious diet that fits your lifestyle and food preferences. Take charge of your daily habits with one of the many ongoing diets including Clean Eating and High protein.",
    image: "/images/salad-bowl.png",
  },
  {
    title: "Start a simplified meal plan",
    description:
      "Follow a 7-21 day Meal Plan and get four pre-planned recipes a day. Depending on your health goals, there are many Meal Plans to choose from including Keto Burn and Vegan for a week.",
    image: "/images/floating-fruits.png",
  },
  {
    title: "Track your way to success",
    description:
      "Track your activities and what you eat with the help of our food-, exercise- and water trackers to maintain a balanced everyday life.",
    image: "/images/smoothies.png",
  },
  {
    title: "Start your own healthy journey",
    description:
      "To help you reach your goals and customize your health journey you can add your favorite meals, food items, recipes and exercises to your favorites.",
    image: "/images/fruits-smoothie.png",
  },
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <div className="text-center text-gray-700 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Discover the Power of{" "}
            <span className="text-orange-500">Nutrimate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Transform your health journey with our comprehensive suite of
            features designed to make nutrition tracking simple and effective.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Left Image (Devices) */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-orange-200 rounded-full blur-3xl opacity-20" />
              <Image
                src="/images/devices.png"
                alt="Nutrimate dashboard on multiple devices"
                width={400}
                height={300}
                className="w-full relative z-10"
                priority
              />
            </motion.div>
          </div>

          {/* Center Features Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                    selectedFeature === index
                      ? "bg-orange-500 text-white"
                      : "bg-white hover:bg-orange-50"
                  }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <div
                    className={`flex items-start gap-4 ${
                      selectedFeature === index ? "text-white" : "text-gray-700"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        selectedFeature === index
                          ? "bg-white text-orange-500"
                          : "bg-orange-100 text-orange-500 group-hover:bg-orange-200"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{feature.text}</h3>
                      <p
                        className={`text-sm ${
                          selectedFeature === index
                            ? "text-orange-50"
                            : "text-gray-500"
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="space-y-16 text-gray-700">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center"
          >
            Your Journey with <span className="text-orange-500">Nutrimate</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 relative">
                    <div className="absolute inset-0 bg-orange-200 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={200}
                      height={200}
                      className="w-full relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="w-full md:w-2/3 space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-orange-500 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
