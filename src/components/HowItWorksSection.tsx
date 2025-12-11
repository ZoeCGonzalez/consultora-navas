import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Database, Brain, Rocket } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Palette,
    title: "Diseño y Desarrollo",
    description:
      "Creamos tu sitio web personalizado, optimizado para conversión y con tu identidad de marca.",
  },
  {
    step: 2,
    icon: Database,
    title: "Conexión del CRM",
    description:
      "Integramos el sistema de gestión de clientes para que nunca pierdas un lead.",
  },
  {
    step: 3,
    icon: Brain,
    title: "Entrenamiento de tu IA",
    description:
      "Configuramos y entrenamos tu agente inteligente con el conocimiento de tu negocio.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Lanzamiento",
    description:
      "Activamos todo el ecosistema y tu negocio empieza a funcionar en piloto automático.",
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Proceso simple
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Cómo funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            En 4 pasos simples, transformamos tu presencia digital y
            automatizamos tu atención al cliente.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => {
              const itemRef = useRef(null);
              const itemInView = useInView(itemRef, {
                once: true,
                margin: "-50px",
              });

              return (
                <motion.div
                  ref={itemRef}
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    itemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="glass-card p-6 lg:p-8 h-full text-center relative z-10 hover-lift">
                    {/* Step number */}
                    <div className="w-12 h-12 rounded-full gradient-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-6 shadow-glow">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
