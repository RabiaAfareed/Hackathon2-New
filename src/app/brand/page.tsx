import React from "react";
import { Truck, CheckCircle, CreditCard, Recycle } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: CheckCircle,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: CreditCard,
      title: "Unbeatable prices",
      description: "For our materials and quality, you won't find better prices anywhere",
    },
    {
      icon: Recycle,
      title: "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mt-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-light mb-12">
        What makes our brand different
      </h2>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            {/* Icon */}
            <feature.icon className="w-12 h-12 mb-4 text-gray-800" />
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-medium mb-2">{feature.title}</h3>
            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
