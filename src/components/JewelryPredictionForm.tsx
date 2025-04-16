
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
import { IndianRupee, Gem } from 'lucide-react';

// Define options for form fields
const materialTypes = ["Rock", "Soil", "Crystal", "Gold", "Silver", "Platinum", "Diamond", "Emerald", "Ruby", "Sapphire"];
const designComplexities = ["Simple", "Moderate", "Intricate", "Very Intricate", "Custom"];

// Form schema
const formSchema = z.object({
  material: z.string({
    required_error: "Please select a material type.",
  }),
  weight: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid weight in grams.",
  }),
  design: z.string({
    required_error: "Please select design complexity.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const JewelryPredictionForm = () => {
  const [predictionResult, setPredictionResult] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: "",
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
      
      // Basic price calculations based on material
      switch(values.material) {
        case "Gold": basePrice = 5000; break;
        case "Silver": basePrice = 1500; break;
        case "Platinum": basePrice = 8000; break;
        case "Diamond": basePrice = 12000; break;
        case "Emerald": basePrice = 9000; break;
        case "Ruby": basePrice = 7000; break;
        case "Sapphire": basePrice = 6500; break;
        case "Crystal": basePrice = 2000; break;
        case "Rock": basePrice = 1000; break;
        default: basePrice = 800;
      }
      
      // Adjust for weight
      const weightFactor = Number(values.weight) * 0.2;
      basePrice += (weightFactor * basePrice / 100) * 50;
      
      // Adjust for design complexity
      switch(values.design) {
        case "Simple": basePrice *= 1.0; break;
        case "Moderate": basePrice *= 1.5; break;
        case "Intricate": basePrice *= 2.0; break;
        case "Very Intricate": basePrice *= 2.5; break;
        case "Custom": basePrice *= 3.0; break;
        default: basePrice *= 1.0;
      }
      
      // Add some randomness for realistic variation
      const randomFactor = 0.9 + (Math.random() * 0.2);
      basePrice *= randomFactor;
      
      // Round to nearest hundred
      basePrice = Math.round(basePrice / 100) * 100;
      
      setPredictionResult(basePrice);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Jewelry Price Prediction</CardTitle>
          <CardDescription>
            Enter your jewelry details to get an estimated market price
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="material"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Material Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select material type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {materialTypes.map((type) => (
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
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight (grams)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="design"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Design Complexity</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select design complexity" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {designComplexities.map((type) => (
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
              <Gem className="h-4 w-4 text-primary" />
              <AlertTitle>Estimated Price</AlertTitle>
              <AlertDescription>
                <div className="mt-2 text-2xl font-bold">₹ {predictionResult.toLocaleString('en-IN')}</div>
                <p className="text-sm text-muted-foreground mt-1">
                  This is an estimated price based on the provided jewelry details and current market conditions.
                  Actual prices may vary based on additional factors like craftsmanship and brand.
                </p>
              </AlertDescription>
            </Alert>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default JewelryPredictionForm;
