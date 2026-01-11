import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 animate-fade-in">
            Discover Your Perfect{" "}
            <span className="text-gradient-gold">Escape</span>
          </h1>
          <p className="text-lg md:text-xl text-card/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience luxury accommodations at the world's finest destinations. 
            Your dream vacation awaits.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-card/95 backdrop-blur-lg rounded-2xl shadow-elevated p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="relative">
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-body"
                  />
                </div>
              </div>

              {/* Check In */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  Check In
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-body"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  Check Out
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-body"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all font-body appearance-none cursor-pointer"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="gold" size="xl" className="w-full md:w-auto min-w-[200px]">
                <Search className="w-5 h-5 mr-2" />
                Search Hotels
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-3xl mx-auto mt-12 grid grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div>
            <p className="text-3xl md:text-4xl font-display font-bold text-card">500+</p>
            <p className="text-card/70 text-sm mt-1">Luxury Hotels</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-display font-bold text-card">50+</p>
            <p className="text-card/70 text-sm mt-1">Destinations</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-display font-bold text-card">100K+</p>
            <p className="text-card/70 text-sm mt-1">Happy Guests</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
