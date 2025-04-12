
import React from 'react';
import Layout from '@/components/Layout';
import PredictionForm from '@/components/PredictionForm';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Car, BarChart, FileBarChart, IndianRupee } from 'lucide-react';

const Predict = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Car Price Prediction</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an accurate estimate of your car's value in the Indian market using our ML-powered price prediction tool.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <PredictionForm />
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <IndianRupee className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Price Factors</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our model considers multiple factors including brand value, model popularity, year of manufacture, kilometers driven, and market conditions to deliver an accurate price estimate.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Indian Market Expertise</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our predictions are specifically calibrated for the Indian automotive market, accounting for local preferences, brand perception, and regional price variations.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Data-Driven Results</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All predictions are based on analysis of thousands of actual car listings and sales from across India, ensuring realistic and market-relevant results.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FileBarChart className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">How It Works</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Want to understand more about our prediction methodology?
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
