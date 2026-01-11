import { Star, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import hotelBeach from "@/assets/hotel-beach.jpg";
import hotelCity from "@/assets/hotel-city.jpg";
import hotelMountain from "@/assets/hotel-mountain.jpg";

const hotels = [
  {
    id: 1,
    name: "Azure Beach Resort",
    location: "Maldives",
    price: 450,
    rating: 4.9,
    reviews: 328,
    image: hotelBeach,
    tag: "Beachfront",
  },
  {
    id: 2,
    name: "Metropolitan Grand",
    location: "New York City",
    price: 380,
    rating: 4.8,
    reviews: 512,
    image: hotelCity,
    tag: "City Center",
  },
  {
    id: 3,
    name: "Alpine Lodge & Spa",
    location: "Swiss Alps",
    price: 520,
    rating: 4.9,
    reviews: 276,
    image: hotelMountain,
    tag: "Mountain View",
  },
];

const FeaturedHotels = () => {
  return (
    <section id="hotels" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium uppercase tracking-wide text-sm">
            Featured Properties
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Handpicked Luxury Hotels
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of the world's most exceptional hotels, 
            each offering unparalleled luxury and service.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                {/* Tag */}
                <span className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                  {hotel.tag}
                </span>
                
                {/* Favorite Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent hover:text-primary-foreground transition-colors">
                  <Heart className="w-5 h-5" />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-accent font-bold text-lg">${hotel.price}</span>
                  <span className="text-muted-foreground text-sm">/night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 text-accent mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{hotel.rating}</span>
                  <span className="text-muted-foreground text-sm">({hotel.reviews} reviews)</span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {hotel.name}
                </h3>

                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hotel.location}
                </div>

                <Button variant="default" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Explore All Hotels
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
