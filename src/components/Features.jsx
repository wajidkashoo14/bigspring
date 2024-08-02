import React from 'react';
import { featuresData } from '../data/featuresData';

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Something You Need to Know</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="p-4 sm:p-6 lg:p-4 border rounded-lg flex flex-col items-center max-w-xs lg:max-w-sm mx-auto">
              <div className="mb-4 text-blue-500 text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
