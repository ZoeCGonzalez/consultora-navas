import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Soluciones", href: "#soluciones" },
  { name: "Beneficios", href: "#beneficios" },
  { name: "Sectores", href: "#sectores" },

];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Tu enlace de WhatsApp
  const whatsappUrl = "https://wa.me/5493764210094";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Consultora<span className="text-gradient">Navas</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* --- BOTÓN ESCRITORIO: "Empezar ahora" --- */}
          <div className="hidden lg:block">
            <Button variant="hero" size="default" asChild>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Empezar ahora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              {/* --- BOTÓN MÓVIL: "Empezar ahora" --- */}
              <Button variant="hero" className="mt-2 w-full" asChild>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Empezar ahora
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};