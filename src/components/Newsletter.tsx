import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-accent font-medium uppercase tracking-wide text-sm">
            Stay Updated
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Get Exclusive Deals
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about special offers, 
            new destinations, and travel tips.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-body"
            />
            <Button variant="gold" size="xl" type="submit">
              <Send className="w-5 h-5 mr-2" />
              Subscribe
            </Button>
          </form>

          <p className="text-primary-foreground/50 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
