
import React from 'react';
import Layout from '@/components/Layout';
import JewelryPredictionForm from '@/components/JewelryPredictionForm';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gem, Scale, Sparkles, IndianRupee } from 'lucide-react';

const Predict = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Jewelry Price Prediction</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an accurate estimate of your jewelry's value based on material, weight, and design complexity using our ML-powered price prediction tool.
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
                    <IndianRupee className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Price Factors</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our model considers multiple factors including material value, weight, design complexity, and market conditions to deliver an accurate price estimate for your jewelry piece.
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
                    Our predictions take into account the specific material properties, rarity, and current market values of gems, metals, and other jewelry components.
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
                    The weight of your jewelry is a critical factor in determining its value, especially for precious metals and gemstones where weight directly correlates to price.
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
                    Intricate designs, custom work, and craftmanship significantly impact jewelry value. Our model accounts for these design elements in your price prediction.
                  </p>
                  <Link to="/about" className="text-sm text-primary font-medium hover:underline">
                    Learn about our ML model →
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
