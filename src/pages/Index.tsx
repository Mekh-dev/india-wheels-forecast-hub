
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Price Your Jewelry?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Try our prediction tool now and get an accurate estimate of your jewelry's price based on material, weight, and design complexity.
          </p>
          <Button size="lg" className="text-white" asChild>
            <Link to="/predict">Predict Your Jewelry Price</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
