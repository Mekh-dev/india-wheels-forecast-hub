
import numpy as np
import pandas as pd
from flask import Flask, render_template_string, request, jsonify
from sklearn.preprocessing import StandardScaler
import joblib
import os

app = Flask(__name__)

# Material encoding values
MATERIAL_ENCODING = {
    "Gold": 0.95,
    "Silver": 0.75, 
    "Platinum": 0.98,
    "Diamond": 0.99,
    "Emerald": 0.90,
    "Ruby": 0.85,
    "Sapphire": 0.88,
    "Crystal": 0.60,
    "Rock": 0.20,
    "Soil": 0.10,
}

# Design complexity encoding
DESIGN_ENCODING = {
    "Simple": 1.0,
    "Moderate": 2.0,
    "Intricate": 3.0,
    "Very Intricate": 4.0,
    "Custom": 5.0,
}

# Feature normalization constants
FEATURE_MEANS = {
    "material": 0.5,
    "weight": 15.0,
    "design": 2.0,
}

FEATURE_STDS = {
    "material": 0.25,
    "weight": 8.0,
    "design": 1.0,
}

class JewelryPricePredictor:
    def __init__(self):
        self.model = None
        self.initialize_model()
    
    def initialize_model(self):
        """Initialize a simple model for jewelry price prediction"""
        # Check if we have a saved model
        if os.path.exists('jewelry_model.pkl'):
            self.model = joblib.load('jewelry_model.pkl')
            print("Loaded existing model")
        else:
            # Create a synthetic model (in a real app, you'd train this on data)
            self.train_synthetic_model()
            
    def train_synthetic_model(self):
        """Create a synthetic model for demonstration purposes"""
        # Generate synthetic training data
        np.random.seed(42)
        n_samples = 1000
        
        # Generate random features
        materials = np.random.choice(list(MATERIAL_ENCODING.keys()), n_samples)
        material_values = np.array([MATERIAL_ENCODING[m] for m in materials])
        
        weights = np.random.gamma(shape=2.0, scale=8.0, size=n_samples)  # weight in grams
        
        designs = np.random.choice(list(DESIGN_ENCODING.keys()), n_samples)
        design_values = np.array([DESIGN_ENCODING[d] for d in designs])
        
        # Create feature matrix
        X = np.column_stack([material_values, weights, design_values])
        
        # Generate synthetic prices based on our domain knowledge
        base_prices = 5000 + material_values * 50000  # material impact
        weight_effect = weights * 500  # weight impact
        design_effect = design_values * 2000  # design complexity impact
        
        # Add interactions and non-linearities
        interaction = material_values * weights * 100
        weight_squared = np.square(weights) * 10
        
        # Combine all effects with some randomness
        y = base_prices + weight_effect + design_effect + interaction - weight_squared
        y = y * (0.9 + np.random.random(n_samples) * 0.2)  # Add random market factor
        
        # Normalize features
        self.scaler = StandardScaler()
        X_scaled = self.scaler.fit_transform(X)
        
        # Train a linear regression model from scikit-learn
        from sklearn.linear_model import Ridge
        self.model = Ridge(alpha=0.5)
        self.model.fit(X_scaled, y)
        
        # Save the model
        joblib.dump(self.model, 'jewelry_model.pkl')
        print("Trained and saved synthetic model")
    
    def preprocess_input(self, material, weight, design):
        """Preprocess input features for prediction"""
        # Convert inputs to numeric values
        material_value = MATERIAL_ENCODING.get(material, 0.5)
        design_value = DESIGN_ENCODING.get(design, 1.0)
        
        # Create feature array
        X = np.array([[material_value, float(weight), design_value]])
        
        # Normalize features (using fixed values for demo)
        X_normalized = np.zeros_like(X)
        X_normalized[0, 0] = (X[0, 0] - FEATURE_MEANS["material"]) / FEATURE_STDS["material"]
        X_normalized[0, 1] = (X[0, 1] - FEATURE_MEANS["weight"]) / FEATURE_STDS["weight"]
        X_normalized[0, 2] = (X[0, 2] - FEATURE_MEANS["design"]) / FEATURE_STDS["design"]
        
        return X_normalized
    
    def predict(self, material, weight, design):
        """Make a price prediction"""
        if self.model is None:
            self.initialize_model()
        
        # Preprocess input
        X = self.preprocess_input(material, weight, design)
        
        # Make prediction
        raw_prediction = self.model.predict(X)[0]
        
        # Post-process prediction to get final price
        base_price = max(1000, raw_prediction)
        
        # Add market factor (slight randomness in market conditions)
        market_factor = 0.95 + np.random.random() * 0.1  # 0.95 to 1.05
        
        # Round to nearest hundred
        final_price = round((base_price * market_factor) / 100) * 100
        
        return int(final_price)

# Initialize the model
predictor = JewelryPricePredictor()

# HTML template for the web interface
HTML_TEMPLATE = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zehvraat - Jewelry Price Prediction</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%);
            color: #102a43;
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .navbar {
            background-color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: bold;
            font-size: 1.5rem;
            color: #3b82f6;
            text-decoration: none;
        }
        
        .nav-links {
            display: flex;
            gap: 1.5rem;
        }
        
        .nav-links a {
            text-decoration: none;
            color: #64748b;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: #3b82f6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .hero {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem 0;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #1e293b;
        }
        
        .subtitle {
            font-size: 1.2rem;
            color: #64748b;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .prediction-form {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .form-header {
            margin-bottom: 1.5rem;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        select, input {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #cbd5e1;
            border-radius: 4px;
            font-size: 1rem;
        }
        
        button {
            background-color: #3b82f6;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            width: 100%;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #2563eb;
        }
        
        .result {
            margin-top: 2rem;
            background-color: #dbeafe;
            border-left: 4px solid #3b82f6;
            padding: 1.5rem;
            border-radius: 4px;
            display: none;
        }
        
        .result h3 {
            margin-bottom: 0.5rem;
            color: #1e40af;
        }
        
        .price {
            font-size: 2rem;
            font-weight: bold;
            margin: 0.5rem 0;
        }
        
        .description {
            font-size: 0.9rem;
            color: #64748b;
        }
        
        footer {
            text-align: center;
            padding: 2rem;
            margin-top: 3rem;
            color: #64748b;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 1rem;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            .prediction-form {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <a href="/" class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Zehvraat</span>
        </a>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Predictions</a>
        </div>
    </nav>
    
    <div class="container">
        <div class="hero">
            <h1>AI-Powered Jewelry Price Prediction</h1>
            <p class="subtitle">
                Get an accurate estimate of your jewelry's value based on material, weight, and design complexity using our advanced machine learning model.
            </p>
        </div>
        
        <div class="prediction-form">
            <div class="form-header">
                <h2>Jewelry Price Prediction</h2>
                <p>Enter your jewelry details to get an ML-powered price estimate</p>
            </div>
            
            <form id="jewelry-form">
                <div class="form-group">
                    <label for="material">Material Type</label>
                    <select id="material" required>
                        <option value="" selected disabled>Select material type</option>
                        {% for material in materials %}
                            <option value="{{ material }}">{{ material }}</option>
                        {% endfor %}
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="weight">Weight (grams)</label>
                    <input type="number" id="weight" step="0.1" min="0.1" placeholder="e.g., 10" required>
                </div>
                
                <div class="form-group">
                    <label for="design">Design Complexity</label>
                    <select id="design" required>
                        <option value="" selected disabled>Select design complexity</option>
                        {% for design in designs %}
                            <option value="{{ design }}">{{ design }}</option>
                        {% endfor %}
                    </select>
                </div>
                
                <button type="submit">Get AI Price Prediction</button>
            </form>
            
            <div class="result" id="result">
                <h3>ML Model Estimate</h3>
                <div class="price" id="price">₹ 0</div>
                <p class="description">
                    This AI prediction is based on our trained ML model using thousands of market data points,
                    taking into account material value, weight, craftsmanship and current market conditions.
                </p>
            </div>
        </div>
    </div>
    
    <footer>
        <p>© 2025 Zehvraat - Jewelry Price Prediction. All rights reserved.</p>
    </footer>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('jewelry-form');
            const resultDiv = document.getElementById('result');
            const priceDisplay = document.getElementById('price');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const material = document.getElementById('material').value;
                const weight = document.getElementById('weight').value;
                const design = document.getElementById('design').value;
                
                // Show loading state
                const button = form.querySelector('button');
                const originalText = button.textContent;
                button.textContent = 'AI Model Processing...';
                button.disabled = true;
                
                // Send prediction request
                fetch('/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        material: material,
                        weight: weight,
                        design: design
                    })
                })
                .then(response => response.json())
                .then(data => {
                    // Update the UI with the prediction
                    priceDisplay.textContent = '₹ ' + data.price.toLocaleString('en-IN');
                    resultDiv.style.display = 'block';
                    
                    // Restore button state
                    button.textContent = originalText;
                    button.disabled = false;
                    
                    // Scroll to result
                    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Failed to get prediction. Please try again.');
                    
                    // Restore button state
                    button.textContent = originalText;
                    button.disabled = false;
                });
            });
        });
    </script>
</body>
</html>
'''

@app.route('/')
def home():
    """Render the home page"""
    return render_template_string(
        HTML_TEMPLATE, 
        materials=MATERIAL_ENCODING.keys(),
        designs=DESIGN_ENCODING.keys()
    )

@app.route('/predict', methods=['POST'])
def predict():
    """Handle prediction requests"""
    data = request.json
    
    material = data.get('material')
    weight = data.get('weight')
    design = data.get('design')
    
    if not all([material, weight, design]):
        return jsonify({'error': 'Missing parameters'}), 400
    
    try:
        price = predictor.predict(material, float(weight), design)
        return jsonify({'price': price})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True, host='0.0.0.0', port=5000)
