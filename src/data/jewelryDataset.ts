// This file represents a sample dataset that would be used to train the ML model
// In a real application, this would be fetched from a server or database

export interface JewelryDataPoint {
  material: string;
  weight: number;
  designComplexity: string;
  price: number;
}

// Sample dataset that would be used to train the ML model
export const jewelryTrainingData: JewelryDataPoint[] = [
  // Gold items
  { material: "Gold", weight: 10, designComplexity: "Simple", price: 50000 },
  { material: "Gold", weight: 15, designComplexity: "Moderate", price: 80000 },
  { material: "Gold", weight: 20, designComplexity: "Intricate", price: 120000 },
  { material: "Gold", weight: 25, designComplexity: "Very Intricate", price: 175000 },
  { material: "Gold", weight: 30, designComplexity: "Custom", price: 220000 },
  
  // Silver items
  { material: "Silver", weight: 15, designComplexity: "Simple", price: 8000 },
  { material: "Silver", weight: 20, designComplexity: "Moderate", price: 12000 },
  { material: "Silver", weight: 25, designComplexity: "Intricate", price: 18000 },
  { material: "Silver", weight: 30, designComplexity: "Very Intricate", price: 25000 },
  { material: "Silver", weight: 35, designComplexity: "Custom", price: 32000 },
  
  // Platinum items
  { material: "Platinum", weight: 8, designComplexity: "Simple", price: 70000 },
  { material: "Platinum", weight: 10, designComplexity: "Moderate", price: 90000 },
  { material: "Platinum", weight: 12, designComplexity: "Intricate", price: 120000 },
  { material: "Platinum", weight: 15, designComplexity: "Very Intricate", price: 160000 },
  { material: "Platinum", weight: 18, designComplexity: "Custom", price: 200000 },
  
  // Diamond items
  { material: "Diamond", weight: 2, designComplexity: "Simple", price: 100000 },
  { material: "Diamond", weight: 3, designComplexity: "Moderate", price: 150000 },
  { material: "Diamond", weight: 4, designComplexity: "Intricate", price: 220000 },
  { material: "Diamond", weight: 5, designComplexity: "Very Intricate", price: 300000 },
  { material: "Diamond", weight: 6, designComplexity: "Custom", price: 400000 },
  
  // Other gems
  { material: "Emerald", weight: 3, designComplexity: "Moderate", price: 80000 },
  { material: "Ruby", weight: 4, designComplexity: "Intricate", price: 70000 },
  { material: "Sapphire", weight: 4, designComplexity: "Moderate", price: 65000 },
  { material: "Crystal", weight: 8, designComplexity: "Simple", price: 12000 },
  
  // Lower value items
  { material: "Rock", weight: 10, designComplexity: "Simple", price: 2000 },
  { material: "Soil", weight: 12, designComplexity: "Simple", price: 1000 },
];

// This function would typically be used to process and prepare the data for training
export const prepareTrainingData = () => {
  // In a real application, this function would:
  // 1. Clean the data
  // 2. Normalize features
  // 3. Split into training and validation sets
  // 4. Convert to tensors
  
  console.log("Training data prepared with", jewelryTrainingData.length, "samples");
  
  // Return some statistics about the dataset that might be useful
  return {
    count: jewelryTrainingData.length,
    materials: [...new Set(jewelryTrainingData.map(item => item.material))],
    avgPrice: jewelryTrainingData.reduce((sum, item) => sum + item.price, 0) / jewelryTrainingData.length
  };
};
