import React, { useState, useEffect } from 'react';
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
import { Gem, Braces, AlertCircle } from 'lucide-react';
import { jewelryPricePredictor } from '@/services/jewelryPredictionModel';
import { toast } from "@/components/ui/use-toast";

const materialTypes = ["Rock", "Soil", "Crystal", "Gold", "Silver", "Platinum", "Diamond", "Emerald", "Ruby", "Sapphire"];
const designComplexities = ["Simple", "Moderate", "Intricate", "Very Intricate", "Custom"];

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
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    const initModel = async () => {
      try {
        await jewelryPricePredictor.loadModel();
        setModelReady(true);
      } catch (error) {
        console.error("Failed to initialize model:", error);
        toast({
          title: "Model Initialization Failed",
          description: "Could not load the prediction model. Please try again later.",
          variant: "destructive",
        });
      }
    };

    initModel();
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);

    try {
      const modelInput = {
        material: values.material,
        weight: Number(values.weight),
        design: values.design
      };

      console.log("Sending to ML model:", modelInput);
      
      const prediction = await jewelryPricePredictor.predict(modelInput);
      
      console.log("ML model prediction:", prediction);
      setPredictionResult(prediction);
      
      toast({
        title: "Prediction Complete",
        description: "ML model successfully generated a price prediction.",
      });
    } catch (error) {
      console.error("Prediction error:", error);
      toast({
        title: "Prediction Error",
        description: "Failed to generate a prediction. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Jewelry Price Prediction</CardTitle>
          <CardDescription>
            Enter your jewelry details to get an ML-powered price estimate
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!modelReady && (
            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <Braces className="h-4 w-4 text-blue-500" />
              <AlertTitle>ML Model Loading</AlertTitle>
              <AlertDescription>
                Initializing the machine learning model. This may take a moment...
              </AlertDescription>
            </Alert>
          )}
          
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

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading || !modelReady}
              >
                {isLoading ? "AI Model Processing..." : "Get AI Price Prediction"}
              </Button>
            </form>
          </Form>
        </CardContent>

        {predictionResult !== null && (
          <CardFooter className="flex flex-col">
            <Alert className="bg-primary/10 border-primary">
              <Gem className="h-4 w-4 text-primary" />
              <AlertTitle>ML Model Estimate</AlertTitle>
              <AlertDescription>
                <div className="mt-2 text-2xl font-bold">₹ {predictionResult.toLocaleString('en-IN')}</div>
                <p className="text-sm text-muted-foreground mt-1">
                  This AI prediction is based on our trained ML model using thousands of market data points,
                  taking into account material value, weight, craftsmanship and current Indian market conditions.
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
