
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for charts
const trendData = [
  { month: 'Jan', "Gold Price": 120000, "Silver Price": 25000, "Diamond Price": 350000 },
  { month: 'Feb', "Gold Price": 125000, "Silver Price": 23000, "Diamond Price": 360000 },
  { month: 'Mar', "Gold Price": 128000, "Silver Price": 24000, "Diamond Price": 365000 },
  { month: 'Apr', "Gold Price": 132000, "Silver Price": 26000, "Diamond Price": 370000 },
  { month: 'May', "Gold Price": 135000, "Silver Price": 27000, "Diamond Price": 375000 },
  { month: 'Jun', "Gold Price": 137000, "Silver Price": 28000, "Diamond Price": 380000 },
  { month: 'Jul', "Gold Price": 140000, "Silver Price": 29000, "Diamond Price": 385000 },
  { month: 'Aug', "Gold Price": 142000, "Silver Price": 30000, "Diamond Price": 390000 },
  { month: 'Sep', "Gold Price": 145000, "Silver Price": 31000, "Diamond Price": 395000 },
];

const materialValueData = [
  { name: 'Gold', value: 92 },
  { name: 'Silver', value: 78 },
  { name: 'Platinum', value: 90 },
  { name: 'Diamond', value: 95 },
  { name: 'Ruby', value: 88 },
  { name: 'Emerald', value: 89 },
  { name: 'Crystal', value: 65 },
  { name: 'Pearl', value: 82 },
  { name: 'Sapphire', value: 87 },
];

const designEffectData = [
  { name: 'Simple', "Price Multiplier": 1.0 },
  { name: 'Moderate', "Price Multiplier": 1.5 },
  { name: 'Intricate', "Price Multiplier": 2.0 },
  { name: 'Very Intricate', "Price Multiplier": 2.5 },
  { name: 'Custom', "Price Multiplier": 3.0 },
];

// Mock prediction statistics
const recentPredictions = [
  { id: 1, jewelry: "Gold Necklace", weight: "12g", prediction: 72000 },
  { id: 2, jewelry: "Silver Bracelet", weight: "18g", prediction: 8500 },
  { id: 3, jewelry: "Diamond Ring", weight: "4g", prediction: 94000 },
  { id: 4, jewelry: "Platinum Earrings", weight: "6g", prediction: 58000 },
  { id: 5, jewelry: "Ruby Pendant", weight: "8g", prediction: 36000 },
];

const popularMaterials = [
  { name: "Gold", predictions: 2345 },
  { name: "Silver", predictions: 2120 },
  { name: "Diamond", predictions: 1987 },
  { name: "Platinum", predictions: 1765 },
  { name: "Ruby", predictions: 1543 },
  { name: "Emerald", predictions: 1432 },
  { name: "Crystal", predictions: 1321 },
  { name: "Pearl", predictions: 1210 },
];

const Predictions = () => {
  const [activeTab, setActiveTab] = useState("trends");
  
  return (
    <Layout>
      <div className="bg-gray-50 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Market Insights & Predictions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore trends, patterns and insights from our jewelry price predictions across the Indian market.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="trends" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="trends" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                <span>Price Trends</span>
              </TabsTrigger>
              <TabsTrigger value="factors" className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                <span>Market Factors</span>
              </TabsTrigger>
              <TabsTrigger value="statistics" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                <span>Prediction Statistics</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="trends">
              <Card>
                <CardHeader>
                  <CardTitle>Jewelry Price Trends in India (2023)</CardTitle>
                  <CardDescription>
                    Average price trends for different jewelry materials in the Indian market over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={trendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
                      <Legend />
                      <Line type="monotone" dataKey="Gold Price" stroke="#FFD700" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="Silver Price" stroke="#C0C0C0" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="Diamond Price" stroke="#3b82f6" activeDot={{ r: 8 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="factors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Material Value Impact</CardTitle>
                    <CardDescription>
                      Material quality score and its effect on jewelry resale values
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={materialValueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[60, 100]} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3b82f6" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Design Complexity and Price</CardTitle>
                    <CardDescription>
                      How different design complexities affect the price multiplier of jewelry
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={designEffectData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 3.5]} />
                        <Tooltip />
                        <Bar dataKey="Price Multiplier" fill="#0ea5e9" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="statistics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Price Predictions</CardTitle>
                    <CardDescription>
                      Latest jewelry price predictions from our system
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPredictions.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-3">
                          <div>
                            <p className="font-medium">{item.jewelry}</p>
                            <p className="text-sm text-muted-foreground">{item.weight}</p>
                          </div>
                          <p className="font-semibold">₹{item.prediction.toLocaleString('en-IN')}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Most Popular Materials</CardTitle>
                    <CardDescription>
                      Materials with the highest number of price prediction requests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularMaterials.map((material, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-3">
                          <p className="font-medium">{material.name}</p>
                          <p className="text-sm text-muted-foreground">{material.predictions} predictions</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Predictions;
