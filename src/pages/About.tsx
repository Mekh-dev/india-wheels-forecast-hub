
import React from 'react';
import Layout from '@/components/Layout';
import AboutModel from '@/components/AboutModel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gem, Code, BarChart3, Users, Crown, BadgeIndianRupee } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Zehvraat</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing how jewelry prices are predicted in the Indian market using advanced machine learning technology.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At Zehvraat, we're committed to providing transparent, accurate jewelry price predictions specifically tailored for the Indian jewelry market. 
              </p>
              <p className="text-muted-foreground mb-4">
                Our platform leverages cutting-edge machine learning algorithms and comprehensive data analysis to help buyers and sellers make informed decisions about jewelry values.
              </p>
              <p className="text-muted-foreground">
                We understand the unique factors that influence jewelry prices in India - from material intricacies to design complexities - and incorporate these variables into our prediction model.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 border-0">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Gem className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold">Indian Market Focus</h3>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-0">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Code className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold">ML Technology</h3>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-0">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <BarChart3 className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold">Data-Driven</h3>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-0">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <Users className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold">User-Friendly</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <AboutModel />

      <section className="py-12 px-4 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Crown className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Accuracy</h3>
              <p className="text-white/80">
                Our prediction model achieves over 90% accuracy compared to actual jewelry values.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <BadgeIndianRupee className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">India-Specific</h3>
              <p className="text-white/80">
                Tailored specifically for the unique conditions of the Indian jewelry market.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <BarChart3 className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Constantly Improving</h3>
              <p className="text-white/80">
                Our algorithm continuously learns from new data to improve prediction quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Try Zehvraat Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Get started with our jewelry price prediction tool and make data-driven decisions.
          </p>
          <Button size="lg" className="text-white" asChild>
            <Link to="/predict">Predict Your Jewelry Price</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
