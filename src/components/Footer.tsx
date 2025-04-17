
import React from 'react';
import { Gem, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Gem className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">Zehvraat</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Accurately predict the price of your jewelry using our advanced machine learning model.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="/predictions" className="text-muted-foreground hover:text-foreground">
                  Predictions
                </a>
              </li>
              <li>
                <a href="/predict" className="text-muted-foreground hover:text-foreground">
                  Predict Price
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Connect</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Mail className="h-4 w-4" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zehvraat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
