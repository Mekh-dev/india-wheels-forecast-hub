
import React from 'react';
import { Car, BarChart3, BadgeIndianRupee, Award, Database, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Indian Market Expertise",
    description: "Our model is specifically trained on the Indian automotive market, considering local factors and preferences.",
    icon: BadgeIndianRupee
  },
  {
    title: "Comprehensive Analysis",
    description: "We analyze multiple factors including brand value, features, condition, and market trends for accurate predictions.",
    icon: BarChart3
  },
  {
    title: "ML-Powered Forecasting",
    description: "Leveraging advanced machine learning algorithms trained on thousands of real-world car listings.",
    icon: Database
  },
  {
    title: "Up-to-Date Valuations",
    description: "Our price predictions are constantly updated with the latest market trends and economic factors.",
    icon: TrendingUp
  },
  {
    title: "Make & Model Specific",
    description: "Get tailored predictions for specific makes and models popular in the Indian automotive market.",
    icon: Car
  },
  {
    title: "Trusted Methodology",
    description: "Our prediction methodology is transparent and backed by data science best practices.",
    icon: Award
  }
];

const Features = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Prediction Platform?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our car price prediction model is specifically designed for the Indian market, using advanced ML techniques to deliver accurate valuations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="prediction-card border-0">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
