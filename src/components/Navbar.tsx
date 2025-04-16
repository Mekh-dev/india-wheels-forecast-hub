
import React from 'react';
import { Link } from 'react-router-dom';
import { Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Gem className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Zehvraat</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link to="/predictions" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Predictions
          </Link>
          <Button size="sm" variant="default" asChild>
            <Link to="/predict">Predict Price</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
