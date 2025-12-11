import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Bot, User, Database } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-20 overflow-hidden gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Bot className="w-4 h-4" />
            Automatización inteligente para tu negocio
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight mb-6"
          >
            Tu negocio en{" "}
            <span className="text-gradient">piloto automático</span>
            <br />
            Web + CRM + IA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Diseñamos tu página web, integramos un CRM para gestionar clientes y
            configuramos Agentes de IA que venden por ti las 24 horas.{" "}
            <strong className="text-foreground">Ideal para cualquier industria.</strong>
          </motion.p>

          {/* CTA Buttons - MODIFICADO AQUÍ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a 
                href="https://wa.me/5493764210094" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Empezar ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
          </motion.div>
        </div>

        {/* Visual Mockup */}
        
      </div>
    </section>
  );
};