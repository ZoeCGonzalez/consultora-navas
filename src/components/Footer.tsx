import { Bot, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const footerLinks = {
  soluciones: [
    { name: "Diseño Web", href: "#" },
    { name: "CRM Integrado", href: "#" },
    { name: "Agentes IA", href: "#" },
    { name: "Automatización", href: "#" },
  ],
  empresa: [
    { name: "Sobre nosotros", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Casos de éxito", href: "#" },
    { name: "Contacto", href: "#" },
  ],
  recursos: [
    { name: "Documentación", href: "#" },
    { name: "Guías", href: "#" },
    { name: "API", href: "#" },
    { name: "Soporte", href: "#" },
  ],
};

//const socialLinks = [
 // { icon: Linkedin, href: "#", name: "LinkedIn" },
 // { icon: Twitter, href: "#", name: "Twitter" },
 // { icon: Instagram, href: "#", name: "Instagram" },
 // { icon: Mail, href: "#", name: "Email" },
//];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                Consultora Navas
              </span>
            </a>
            <p className="text-background/60 mb-6 max-w-sm">
              Transformamos negocios con tecnología inteligente. Web, CRM y
              agentes de IA para automatizar tu crecimiento.
            </p>
            <div className="flex gap-3">
              
            </div>
          </div>

          {/* Links: Soluciones (VISIBLE) */}
          <div>
            <h4 className="font-semibold text-background mb-4">Soluciones</h4>
            <ul className="space-y-3">
              {footerLinks.soluciones.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Empresa (OCULTO/COMENTADO) */}
          {/* <div>
            <h4 className="font-semibold text-background mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> 
          */}

          {/* Links: Recursos (OCULTO/COMENTADO) */}
          {/* <div>
            <h4 className="font-semibold text-background mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> 
          */}

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Consultora Navas. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-background/50 hover:text-background transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-background/50 hover:text-background transition-colors"
            >
              Términos
            </a>
            <a
              href="#"
              className="text-background/50 hover:text-background transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};