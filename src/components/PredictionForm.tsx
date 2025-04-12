
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BadgeIndianRupee } from 'lucide-react';

// Define car brands, models and years
const carBrands = [
  "Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Kia", "Honda", "Toyota", 
  "Volkswagen", "Ford", "Renault", "Skoda", "MG", "Nissan", "Jeep"
];

// Generate years from 2000 to current year
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1999 }, (_, i) => (currentYear - i).toString());

const fuelTypes = ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"];
const transmissionTypes = ["Manual", "Automatic"];
const ownerTypes = ["First Owner", "Second Owner", "Third Owner", "Fourth Owner or More"];

// Form schema
const formSchema = z.object({
  brand: z.string({
    required_error: "Please select a car brand.",
  }),
  model: z.string({
    required_error: "Please specify the car model.",
  }),
  year: z.string({
    required_error: "Please select the car manufacturing year.",
  }),
  kilometers: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Please enter a valid kilometer reading.",
  }),
  fuelType: z.string({
    required_error: "Please select a fuel type.",
  }),
  transmission: z.string({
    required_error: "Please select a transmission type.",
  }),
  owner: z.string({
    required_error: "Please select the ownership status.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const PredictionForm = () => {
  const [predictionResult, setPredictionResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kilometers: "0",
    },
  });

  const onSubmit = (values: FormValues) => {
    setIsLoading(true);

    // Simulate API call for ML prediction
    setTimeout(() => {
      console.log("Form values submitted:", values);
      
      // For demo purposes, generate a "prediction" based on inputs
      // In a real app, this would be a call to your ML model API
      let basePrice = 0;
      
      // Basic price calculations based on brand (just for demo)
      switch(values.brand) {
        case "Maruti Suzuki": basePrice = 600000; break;
        case "Hyundai": basePrice = 800000; break;
        case "Tata": basePrice = 700000; break;
        case "Mahindra": basePrice = 900000; break;
        case "Kia": basePrice = 1000000; break;
        case "Honda": basePrice = 1100000; break;
        case "Toyota": basePrice = 1200000; break;
        default: basePrice = 800000;
      }
      
      // Adjust for year (newer = more expensive)
      const yearFactor = (parseInt(values.year) - 2000) / 20;  // Normalize to ~1 for current year
      basePrice *= (0.5 + yearFactor);
      
      // Adjust for kilometers (more km = cheaper)
      const kmReduction = Math.min(0.4, parseInt(values.kilometers) / 200000);
      basePrice *= (1 - kmReduction);
      
      // Fuel type adjustments
      if (values.fuelType === "Diesel") basePrice *= 1.1;
      if (values.fuelType === "Electric") basePrice *= 1.3;
      if (values.fuelType === "CNG") basePrice *= 0.9;
      
      // Transmission
      if (values.transmission === "Automatic") basePrice *= 1.15;
      
      // Owner history
      if (values.owner !== "First Owner") {
        const ownerDiscount = values.owner === "Second Owner" ? 0.15 : 
                             (values.owner === "Third Owner" ? 0.25 : 0.35);
        basePrice *= (1 - ownerDiscount);
      }
      
      // Add some randomness for realistic variation
      const randomFactor = 0.9 + (Math.random() * 0.2);
      basePrice *= randomFactor;
      
      // Round to nearest thousand
      basePrice = Math.round(basePrice / 1000) * 1000;
      
      setPredictionResult(basePrice);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Car Price Prediction</CardTitle>
          <CardDescription>
            Enter your car details to get an estimated market price
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Brand</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select car brand" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {carBrands.map((brand) => (
                            <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Model</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Swift, i20, Nexon" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select manufacturing year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="kilometers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kilometers Driven</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 45000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fuelType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select fuel type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {fuelTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="transmission"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Transmission</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select transmission type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {transmissionTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="owner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ownership History</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ownership status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ownerTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Calculating..." : "Get Price Prediction"}
              </Button>
            </form>
          </Form>
        </CardContent>

        {predictionResult !== null && (
          <CardFooter className="flex flex-col">
            <Alert className="bg-primary/10 border-primary">
              <BadgeIndianRupee className="h-4 w-4 text-primary" />
              <AlertTitle>Estimated Price</AlertTitle>
              <AlertDescription>
                <div className="mt-2 text-2xl font-bold">₹ {predictionResult.toLocaleString('en-IN')}</div>
                <p className="text-sm text-muted-foreground mt-1">
                  This is an estimated price based on the provided details and current market conditions.
                  Actual prices may vary based on additional factors.
                </p>
              </AlertDescription>
            </Alert>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default PredictionForm;
