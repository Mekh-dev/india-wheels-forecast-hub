
import React from 'react';
import { BarChart2, BrainCircuit, Database, PieChart, ScrollText, BadgeCheck } from 'lucide-react';

const AboutModel = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our ML Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding how our prediction model works to provide you with accurate car price estimates
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 bg-primary/10 rounded-full p-2">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Comprehensive Dataset</h3>
                  <p className="text-muted-foreground">
                    Our model is trained on a vast dataset of over 100,000 car listings from across India, 
                    covering various makes, models, years, and conditions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 bg-primary/10 rounded-full p-2">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Advanced Algorithms</h3>
                  <p className="text-muted-foreground">
                    We employ ensemble machine learning techniques combining gradient boosting and 
                    random forests to achieve higher prediction accuracy.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 bg-primary/10 rounded-full p-2">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Feature Engineering</h3>
                  <p className="text-muted-foreground">
                    Our model analyzes over 20 different car attributes including brand value, 
                    depreciation rates, market demand, and regional price variations.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 bg-primary/10 rounded-full p-2">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Continuous Improvement</h3>
                  <p className="text-muted-foreground">
                    The model self-improves with new data, ensuring predictions remain accurate 
                    as market conditions evolve.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 bg-primary/10 rounded-full p-2">
                  <BadgeCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Validation & Testing</h3>
                  <p className="text-muted-foreground">
                    Our predictions achieve over 90% accuracy when tested against actual selling prices 
                    in various Indian markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <ScrollText className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Input Variables We Consider</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Make and Model</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Manufacturing Year</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Kilometers Driven</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Fuel Type</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Transmission Type</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Ownership History</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Regional Market Trends</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Engine Capacity</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Vehicle Condition</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Service History</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Insurance Status</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Available Features</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Body Type</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Safety Ratings</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Color Preference</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Market Demand</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutModel;
