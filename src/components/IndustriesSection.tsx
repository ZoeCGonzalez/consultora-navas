import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Stethoscope, ShoppingCart, Scale, CalendarCheck, MessageSquare, Users, FileCheck } from "lucide-react";

const industries = [
  {
    id: "inmobiliarias",
    name: "Inmobiliarias",
    icon: Building2,
    title: "Agentes que agendan visitas",
    description:
      "Tu IA califica prospectos, responde sobre propiedades disponibles y agenda visitas automáticamente en tu calendario.",
    features: [
      "Filtrado inteligente por presupuesto y zona",
      "Envío automático de fichas de propiedades",
      "Integración con portales inmobiliarios",
    ],
  },
  {
    id: "salud",
    name: "Clínicas/Salud",
    icon: Stethoscope,
    title: "Reserva de turnos automatizada",
    description:
      "El agente gestiona citas, envía recordatorios y recopila información pre-consulta para optimizar el tiempo del profesional.",
    features: [
      "Confirmación y recordatorios por WhatsApp",
      "Formularios de pre-admisión automáticos",
      "Gestión de cancelaciones y reprogramaciones",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    icon: ShoppingCart,
    title: "Recomendaciones personalizadas",
    description:
      "IA que entiende las necesidades del cliente, recomienda productos y responde dudas de stock y envíos al instante.",
    features: [
      "Sugerencias basadas en historial",
      "Recuperación de carritos abandonados",
      "Soporte post-venta automatizado",
    ],
  },
  {
    id: "legal",
    name: "Servicios Legales",
    icon: Scale,
    title: "Pre-calificación de clientes",
    description:
      "El agente recopila información del caso, determina si es viable y agenda consultas solo con clientes cualificados.",
    features: [
      "Cuestionarios legales inteligentes",
      "Derivación por especialidad",
      "Cotizaciones preliminares automáticas",
    ],
  },
];

const IndustryIcon = ({ industry }: { industry: (typeof industries)[0] }) => {
  const icons = {
    inmobiliarias: [CalendarCheck, MessageSquare],
    salud: [CalendarCheck, FileCheck],
    ecommerce: [MessageSquare, Users],
    legal: [FileCheck, Users],
  };

  return (
    <div className="flex gap-3 mt-6">
      {industry.features.map((feature, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {feature}
        </div>
      ))}
    </div>
  );
};

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("inmobiliarias");

  return (
    <section id="sectores" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Versatilidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Adaptable a tu industria
          </h2>
          <p className="text-lg text-muted-foreground">
            No importa el sector, nuestros agentes se entrenan específicamente
            para entender tu negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex items-center gap-2 py-4 px-6 rounded-xl border border-border bg-background data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all duration-300"
                >
                  <industry.icon className="w-5 h-5" />
                  <span className="font-medium">{industry.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent
                key={industry.id}
                value={industry.id}
                className="mt-0"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 lg:p-12"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                        <industry.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                    <div className="space-y-4">
                      {industry.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-secondary rounded-xl p-4"
                        >
                          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-primary-foreground font-bold text-sm">
                              {idx + 1}
                            </span>
                          </div>
                          <span className="text-foreground font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
