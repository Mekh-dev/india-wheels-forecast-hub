
import React from 'react';
import { ArrowRight, BarChart, Car, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="gradient-bg py-16 px-4 md:py-24 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Predict Indian Car Prices with ML Precision
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Get accurate price predictions based on real market data and advanced machine learning algorithms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="text-primary font-medium" asChild>
                <Link to="/predict">
                  Get Price Prediction <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block lg:relative">
            <div className="absolute z-10 top-5 right-5 bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-lg animate-float">
              <IndianRupee className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-black font-bold text-lg">Accurate Pricing</h3>
              <p className="text-gray-600 text-sm">Predictions based on latest market data</p>
            </div>
            <div className="absolute z-10 bottom-5 left-5 bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-lg animate-float" style={{ animationDelay: "2s" }}>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-black font-bold text-lg">Data-Driven</h3>
              <p className="text-gray-600 text-sm">ML models trained on thousands of cars</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl h-[400px] w-full border border-white/20 shadow-xl flex items-center justify-center">
              <Car className="h-32 w-32 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
