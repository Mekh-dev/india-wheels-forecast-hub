
import React from 'react';
import Layout from '@/components/Layout';
import JewelryPredictionForm from '@/components/JewelryPredictionForm';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gem, Scale, Sparkles, Brain } from 'lucide-react';

const Predict = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Jewelry Price Prediction</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an accurate estimate of your jewelry's value based on material, weight, and design complexity using our advanced machine learning model trained on Indian market data.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <JewelryPredictionForm />
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">ML Model</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our machine learning model has been trained on thousands of jewelry price data points from the Indian market, using TensorFlow.js for real-time inference in your browser.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Gem className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Material Expertise</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our AI predictions account for the specific material properties, rarity, and current market values of gems, metals, and other jewelry components in the Indian market.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Weight Analysis</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our ML algorithm precisely calculates how weight affects value across different materials, applying non-linear scaling factors based on market data analysis.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Design Complexity</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    The ML model has learned to recognize how design complexity affects pricing based on real market data from Indian jewelry retailers and artisans.
                  </p>
                  <Link to="/predictions" className="text-sm text-primary font-medium hover:underline">
                    See market trends and predictions →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Predict;
