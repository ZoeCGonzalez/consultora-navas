import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    nombre: "",
    rubro: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Solicitud enviada!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ nombre: "", rubro: "", email: "" });
  };

  return (
    <section id="precios" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Sin compromiso
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              ¿Listo para modernizar tu negocio?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Solicita tu presupuesto personalizado y descubre cómo podemos
              automatizar tu empresa.
            </p>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20"
          >
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <Input
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus:ring-white/30"
              />
              <Input
                type="text"
                placeholder="Tu rubro / industria"
                value={formData.rubro}
                onChange={(e) =>
                  setFormData({ ...formData, rubro: e.target.value })
                }
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus:ring-white/30"
              />
              <Input
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-xl focus:ring-white/30"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                size="xl"
                className="bg-white text-primary hover:bg-white/90 font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Solicitar Presupuesto sin cargo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
