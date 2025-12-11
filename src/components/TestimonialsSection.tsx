import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CEO, Inmobiliaria Premium",
    image: "CM",
    content:
      "El agente de IA nos ahorra 4 horas diarias en responder consultas repetitivas. Los clientes quedan impresionados con la atención inmediata.",
    rating: 5,
  },
  {
    name: "Dra. Laura Torres",
    role: "Directora, Clínica Dental Sonrisa",
    image: "LT",
    content:
      "Antes perdíamos muchas citas por falta de seguimiento. Ahora la IA confirma automáticamente y nuestra tasa de asistencia subió un 35%.",
    rating: 5,
  },
  {
    name: "Miguel Ángel Ruiz",
    role: "Fundador, TechStore Online",
    image: "MR",
    content:
      "El CRM integrado con la IA es un game-changer. Recuperamos carritos abandonados y las ventas aumentaron un 28% en el primer mes.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas reales que ya están automatizando su negocio con nosotros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, {
              once: true,
              margin: "-50px",
            });

            return (
              <motion.div
                ref={cardRef}
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 lg:p-8 hover-lift"
              >
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
