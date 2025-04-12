
import React from 'react';
import { FormInput, LineChart, IndianRupee } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Enter Car Details",
    description: "Provide information about the car including brand, model, year, fuel type, and other specifications.",
    icon: FormInput
  },
  {
    number: "02",
    title: "ML Analysis",
    description: "Our advanced machine learning model analyzes your input against our comprehensive dataset of Indian cars.",
    icon: LineChart
  },
  {
    number: "03",
    title: "Get Price Prediction",
    description: "Receive an accurate price prediction along with a range and confidence score based on current market conditions.",
    icon: IndianRupee
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get accurate predictions in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gray-200 z-0" />
              )}
              <div className="bg-white rounded-lg p-8 relative z-10 h-full flex flex-col">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
