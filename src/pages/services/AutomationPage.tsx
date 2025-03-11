"use client";
import { Helmet } from "react-helmet-async";
import { Mail, Cpu, FileText, Zap, Bot, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  StaggerContainer,
  AnimatedItem,
} from "../../framer-motion-utils";

export default function AutomationPage() {
  return (
    <>
      <Helmet>
        <title>Automatizácia Procesov - AetherForge</title>
        <meta
          name="description"
          content="Implementujeme inteligentné automatizačné riešenia pomocou AI pre e-mailový marketing, technické úlohy a spracovanie dokumentov."
        />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <AnimatedSection variants={fadeIn}>
          <h1 className="text-4xl font-light mb-4">
            Automatizácia{" "}
            <span className="logo-gradient font-bold">Procesov</span>
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Implementujeme inteligentné automatizačné riešenia, ktoré šetria
            čas, znižujú manuálnu prácu a optimalizujú využitie zdrojov vašej
            organizácie.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <StaggerContainer
            className="space-y-8"
            delayChildren={0.2}
            staggerDelay={0.2}
          >
            <AnimatedItem variants={fadeInLeft}>
              <div className="feature-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Mail className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Automatizácia E-mailového Marketingu
                    </h3>
                    <p className="text-gray-300">
                      Využívame AI na personalizáciu a automatizáciu e-mailových
                      kampaní, čím zvyšujeme ich efektivitu a konverzný pomer.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem variants={fadeInLeft}>
              <div className="feature-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Cpu className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Automatizácia Technických Úloh
                    </h3>
                    <p className="text-gray-300">
                      Implementujeme AI riešenia na automatizáciu technických
                      úloh vo firme, čím šetríme čas a znižujeme potrebu
                      manuálnej práce.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem variants={fadeInLeft}>
              <div className="feature-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FileText className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Inteligentné Spracovanie Dokumentov
                    </h3>
                    <p className="text-gray-300">
                      Transformujeme manuálne spracovanie dokumentov na
                      automatizovaný proces pomocou AI, čo zvyšuje efektivitu a
                      presnosť v podnikových operáciách.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </StaggerContainer>

          <AnimatedSection variants={fadeInRight}>
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src="/6.jpg"
                alt="Automatizácia Procesov"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="bg-dark/50 rounded-2xl p-8">
            <h2 className="text-3xl font-light mb-8">
              Výhody{" "}
              <span className="logo-gradient font-bold">Automatizácie</span>
            </h2>
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              <AnimatedItem>
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 215, 0, 0.2)",
                    }}
                  >
                    <Zap className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Úspora Času</h3>
                  <p className="text-gray-300">
                    Automatizácia rutinných úloh výrazne znižuje čas potrebný na
                    ich vykonanie a uvoľňuje zdroje pre strategické aktivity.
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 215, 0, 0.2)",
                    }}
                  >
                    <Bot className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Vyššia Presnosť</h3>
                  <p className="text-gray-300">
                    AI-poháňané procesy minimalizujú ľudské chyby a zabezpečujú
                    konzistentné, spoľahlivé výsledky.
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 215, 0, 0.2)",
                    }}
                  >
                    <BarChart3 className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Škálovateľnosť</h3>
                  <p className="text-gray-300">
                    Automatizované procesy sa ľahko škálujú s rastom vášho
                    podnikania bez potreby proporcionálneho nárastu pracovnej
                    sily.
                  </p>
                </div>
              </AnimatedItem>
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
