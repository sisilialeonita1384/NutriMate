"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anshuman Khuranna",
    achievement: "10 kgs in 3 weeks",
    plan: "3 week weight loss meal plan",
    review:
      "This platform is like the best thing that has happened to my health. I was shocked how my cravings went away after only a couple of days and not wanting to eat between meals really helped. Losing 6 kg in only 3 weeks is fantastic, but the best part is the health improvement.",
    image: "/images/testimonial-1.png",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    achievement: "15% body fat reduction",
    plan: "8 week transformation plan",
    review:
      "Nutrimate has completely transformed my relationship with food. The personalized meal plans and constant support made my fitness journey enjoyable and sustainable.",
    image: "/images/testimonial-2.png",
    rating: 5,
  },
  {
    name: "Michael Chen",
    achievement: "Gained muscle mass",
    plan: "12 week bulk meal plan",
    review:
      "As someone who struggled to gain healthy weight, Nutrimate's specialized meal plans helped me achieve my goals. The protein-rich recipes are delicious and easy to prepare.",
    image: "/images/testimonial-3.png",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-gray-700 md:text-5xl font-bold mb-4">
            Nutrimate Reviews
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how Nutrimate has helped transform lives through better
            nutrition
          </p>
        </motion.div>

        <div className="relative">
          {/* Testimonial Cards Carousel */}
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                <div className="space-y-6">
                  {/* Achievement Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block bg-orange-100 text-orange-500 font-semibold px-4 py-2 rounded-full"
                  >
                    {testimonials[currentIndex].achievement}
                  </motion.div>

                  {/* Review Content */}
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                          />
                        )
                      )}
                    </div>
                    <div className="relative">
                      <Quote className="absolute -left-2 -top-2 w-8 h-8 text-orange-200 opacity-50" />
                      <p className="text-gray-700 text-lg pl-6">
                        {testimonials[currentIndex].review}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl text-gray-700 font-semibold">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentIndex].plan}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-orange-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-orange-500" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-orange-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-orange-500" />
            </button>
          </div>

          {/* Pricing Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl md:text-3xl text-gray-600 font-semibold mb-4">
              A whole year of <span className="text-orange-500">Nutrimate</span>{" "}
              costs about <br />
              the same as 1 hour with a nutrition expert
            </h3>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg mt-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              Get Started Now
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
