import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center shadow-gold">
                <span className="text-primary-foreground font-display font-bold text-xl">S</span>
              </div>
              <span className="font-display text-xl font-semibold">StayLux</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Your gateway to extraordinary travel experiences. Discover luxury hotels 
              worldwide with unmatched service and exclusive deals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Our Hotels</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Destinations</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Special Offers</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70">123 Luxury Avenue, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+18001234567" className="text-primary-foreground/70 hover:text-accent transition-colors">+1 (800) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:hello@staylux.com" className="text-primary-foreground/70 hover:text-accent transition-colors">hello@staylux.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 StayLux. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">Terms</a>
            <a href="#" className="text-primary-foreground/50 hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
