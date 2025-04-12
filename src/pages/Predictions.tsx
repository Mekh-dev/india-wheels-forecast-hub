
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for charts
const trendData = [
  { month: 'Jan', "SUV Price": 1200000, "Sedan Price": 950000, "Hatchback Price": 600000 },
  { month: 'Feb', "SUV Price": 1250000, "Sedan Price": 920000, "Hatchback Price": 620000 },
  { month: 'Mar', "SUV Price": 1280000, "Sedan Price": 900000, "Hatchback Price": 610000 },
  { month: 'Apr', "SUV Price": 1320000, "Sedan Price": 930000, "Hatchback Price": 630000 },
  { month: 'May', "SUV Price": 1350000, "Sedan Price": 940000, "Hatchback Price": 650000 },
  { month: 'Jun', "SUV Price": 1370000, "Sedan Price": 960000, "Hatchback Price": 670000 },
  { month: 'Jul', "SUV Price": 1400000, "Sedan Price": 980000, "Hatchback Price": 680000 },
  { month: 'Aug', "SUV Price": 1420000, "Sedan Price": 1000000, "Hatchback Price": 690000 },
  { month: 'Sep', "SUV Price": 1450000, "Sedan Price": 1020000, "Hatchback Price": 700000 },
];

const brandValueData = [
  { name: 'Maruti Suzuki', value: 85 },
  { name: 'Hyundai', value: 82 },
  { name: 'Tata', value: 79 },
  { name: 'Mahindra', value: 77 },
  { name: 'Kia', value: 76 },
  { name: 'Honda', value: 81 },
  { name: 'Toyota', value: 84 },
  { name: 'Volkswagen', value: 75 },
  { name: 'MG', value: 72 },
];

const fuelEffectData = [
  { name: 'Petrol', "Depreciation": -25 },
  { name: 'Diesel', "Depreciation": -30 },
  { name: 'CNG', "Depreciation": -20 },
  { name: 'Electric', "Depreciation": -15 },
  { name: 'Hybrid', "Depreciation": -22 },
];

// Mock prediction statistics
const recentPredictions = [
  { id: 1, car: "Maruti Suzuki Swift", year: 2020, prediction: 720000 },
  { id: 2, car: "Hyundai Creta", year: 2019, prediction: 1050000 },
  { id: 3, car: "Tata Nexon", year: 2021, prediction: 940000 },
  { id: 4, car: "Mahindra XUV700", year: 2022, prediction: 1820000 },
  { id: 5, car: "Honda City", year: 2018, prediction: 820000 },
];

const popularModels = [
  { name: "Maruti Suzuki Swift", predictions: 2345 },
  { name: "Hyundai Creta", predictions: 2120 },
  { name: "Tata Nexon", predictions: 1987 },
  { name: "Maruti Suzuki Baleno", predictions: 1765 },
  { name: "Hyundai i20", predictions: 1543 },
  { name: "Kia Seltos", predictions: 1432 },
  { name: "Mahindra Scorpio", predictions: 1321 },
  { name: "Toyota Fortuner", predictions: 1210 },
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
              Explore trends, patterns and insights from our car price predictions across the Indian market.
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
                  <CardTitle>Car Price Trends in India (2023)</CardTitle>
                  <CardDescription>
                    Average price trends for different car categories in the Indian market over time
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
                      <Line type="monotone" dataKey="SUV Price" stroke="#3b82f6" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="Sedan Price" stroke="#0ea5e9" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="Hatchback Price" stroke="#0284c7" activeDot={{ r: 8 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="factors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Brand Value Impact</CardTitle>
                    <CardDescription>
                      Brand reputation score and its effect on car resale values
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={brandValueData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[60, 90]} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3b82f6" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Fuel Type and Depreciation</CardTitle>
                    <CardDescription>
                      How different fuel types affect the depreciation rate of cars
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={fuelEffectData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Depreciation" fill="#0ea5e9" />
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
                      Latest car price predictions from our system
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPredictions.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-3">
                          <div>
                            <p className="font-medium">{item.car}</p>
                            <p className="text-sm text-muted-foreground">{item.year}</p>
                          </div>
                          <p className="font-semibold">₹{item.prediction.toLocaleString('en-IN')}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Most Popular Models</CardTitle>
                    <CardDescription>
                      Car models with the highest number of price prediction requests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularModels.map((model, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-3">
                          <p className="font-medium">{model.name}</p>
                          <p className="text-sm text-muted-foreground">{model.predictions} predictions</p>
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
