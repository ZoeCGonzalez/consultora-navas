import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Database, Bot } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Presencia Profesional",
    description:
      "No solo una web bonita, sino optimizada para convertir visitantes en clientes. Diseño moderno y rápido.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Control Total",
    description:
      "Centraliza tus prospectos. Nunca pierdas una venta por desorganización. Todo en un solo lugar.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Bot,
    title: "Atención 24/7",
    description:
      "Tu agente inteligente responde dudas y agenda citas mientras duermes. Sin pausas, sin errores.",
    color: "from-pink-500 to-rose-500",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card p-6 lg:p-8 h-full hover-lift">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <feature.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="soluciones" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Soluciones integradas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            ¿Por qué necesitas este ecosistema?
          </h2>
          <p className="text-lg text-muted-foreground">
            Tres pilares fundamentales que trabajan juntos para hacer crecer tu
            negocio de forma automática.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
