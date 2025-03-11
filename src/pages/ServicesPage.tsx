"use client";

import { Link } from "react-router-dom";
import {
  Bot,
  Sparkles,
  Code,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Cpu,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  fadeIn,
  StaggerContainer,
  AnimatedItem,
} from "../framer-motion-utils";

const services = [
  {
    icon: <Bot className="h-12 w-12" strokeWidth={1.5} />,
    title: "Vlastní AI Asistenti",
    description:
      "Vytvorte si vlastného AI asistenta s prirodzeným hlasom a jedinečnou osobnosťou pre vaše potreby.",
    features: [
      "Prirodzený Hlas a Intonácia",
      "Vlastný Hlasový Dizajn",
      "Interaktívne Hlasové Rozhovory",
      "Viacjazyčná Podpora",
    ],
    link: "/services/ai-assistants",
  },
  {
    icon: <Sparkles className="h-12 w-12" strokeWidth={1.5} />,
    title: "Špecializovaní AI Agenti",
    description:
      "Vyvíjame špecializovaných AI agentov pre konkrétne úlohy a odvetvia.",
    features: [
      "Agenti Zákazníckej Podpory",
      "Experti na Predaj a Marketing",
      "Technickí Konzultanti",
      "Vzdelávací Tútori",
    ],
    link: "/services/specialized-agents",
  },
  {
    icon: <Code className="h-12 w-12" strokeWidth={1.5} />,
    title: "Profesionálny Vývoj Webu",
    description:
      "Vytvárame pôsobivé, vysoko výkonné webové stránky s modernými technológiami a najlepšími postupmi.",
    features: [
      "Expertíza v React & Next.js",
      "Krásny UI/UX Dizajn",
      "Plynulé Animácie",
      "AI Integrácia",
    ],
    link: "/services/web-development",
  },
  {
    icon: <MessageSquare className="h-12 w-12" strokeWidth={1.5} />,
    title: "Vývoj AI Chatbotov",
    description:
      "Budujeme inteligentných chatbotov, ktorí prirodzene rozumejú a komunikujú s vašimi používateľmi.",
    features: [
      "Prirodzené Konverzácie",
      "Vlastná Znalostná Báza",
      "Odpovede Podľa Role",
      "Kontinuálne Učenie",
    ],
    link: "/services/chatbots",
  },
  {
    icon: <Cpu className="h-12 w-12" strokeWidth={1.5} />,
    title: "Automatizácia Procesov",
    description:
      "Implementujeme inteligentné automatizačné riešenia, ktoré šetria čas a zdroje vašej organizácie.",
    features: [
      "Automatizácia E-mailového Marketingu",
      "Automatizácia Technických Úloh",
      "Inteligentné Spracovanie Dokumentov",
      "Zvýšenie Efektivity Procesov",
    ],
    link: "/services/automation",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Naše Služby - AetherForge</title>
        <meta
          name="description"
          content="Vytvárame vlastných AI asistentov, špecializovaných agentov, profesionálne webové stránky, inteligentných chatbotov a automatizačné riešenia s našimi komplexnými vývojovými službami."
        />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <AnimatedSection variants={fadeIn}>
          <h1 className="text-4xl font-light mb-4">
            Naše <span className="logo-gradient font-bold">Služby</span>
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Od vlastných AI asistentov po profesionálny vývoj webu vám pomáhame
            vytvárať inteligentné riešenia, ktoré transformujú používateľské
            skúsenosti a podporujú inovácie.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-8"
          delayChildren={0.2}
          staggerDelay={0.15}
        >
          {services.map((service) => (
            <AnimatedItem key={service.title}>
              <Link to={service.link}>
                <motion.div
                  className="feature-card p-8 rounded-xl"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="text-gold mb-6"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gold">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-coral mr-2" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-gold transition-colors duration-300"
                    >
                      Zistiť viac <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </Link>
            </AnimatedItem>
          ))}
        </StaggerContainer>
      </div>
    </>
  );
}
