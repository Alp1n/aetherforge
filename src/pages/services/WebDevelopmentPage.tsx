"use client";
import { Helmet } from "react-helmet-async";
import { Code, Palette, Zap, Bot, Layout, Shield } from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  StaggerContainer,
  AnimatedItem,
} from "../../framer-motion-utils";

export default function WebDevelopmentPage() {
  return (
    <>
      <Helmet>
        <title>Profesionálny Vývoj Webu - AetherForge</title>
        <meta
          name="description"
          content="Vytvárame moderné, responzívne webové stránky s krásnym dizajnom, výkonnou funkcionalitou a AI integráciou."
        />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <AnimatedSection variants={fadeIn}>
          <h1 className="text-4xl font-light mb-4">
            Profesionálny{" "}
            <span className="logo-gradient font-bold">Vývoj Webu</span>
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Vytvárame moderné, responzívne webové stránky, ktoré spájajú krásny
            dizajn s výkonnou funkcionalitou a plynulou AI integráciou.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection variants={fadeInLeft}>
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src="/3.jpg"
                alt="Vývoj Webu"
                className="w-full h-[400px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent"></div>
            </div>
          </AnimatedSection>

          <StaggerContainer
            className="space-y-8"
            delayChildren={0.2}
            staggerDelay={0.2}
          >
            <AnimatedItem variants={fadeInRight}>
              <div className="feature-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Code className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Moderné Technológie
                    </h3>
                    <p className="text-gray-300">
                      Využívame najnovšie technológie a frameworky pre optimálny
                      výkon a spoľahlivosť.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem variants={fadeInRight}>
              <div className="feature-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Palette className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Krásny Dizajn
                    </h3>
                    <p className="text-gray-300">
                      Očarujúce, responzívne dizajny, ktoré vyzerajú skvele na
                      všetkých zariadeniach.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem variants={fadeInRight}>
              <div className="feature-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Zap className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Optimalizovaný Výkon
                    </h3>
                    <p className="text-gray-300">
                      Bleskurýchle načítanie a plynulé animácie pre najlepší
                      používateľský zážitok.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </StaggerContainer>
        </div>

        <AnimatedSection>
          <div className="bg-dark/50 rounded-2xl p-8">
            <h2 className="text-3xl font-light mb-8">
              Ďalšie <span className="logo-gradient font-bold">Funkcie</span>
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
                    <Bot className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">AI Integrácia</h3>
                  <p className="text-gray-300">
                    Plynulá integrácia AI funkcií do vašej webstránky.
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
                    <Layout className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Vlastné Komponenty</h3>
                  <p className="text-gray-300">
                    Prispôsobené UI komponenty, ktoré zodpovedajú vašej značke.
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
                    <Shield className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Bezpečnosť</h3>
                  <p className="text-gray-300">
                    Postavené s najlepšími bezpečnostnými praktikami a
                    pravidelnými aktualizáciami.
                  </p>
                </div>
              </AnimatedItem>
            </StaggerContainer>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-dark/50 rounded-2xl p-8 mt-12">
            <h2 className="text-3xl font-light mb-4">
              Máte záujem?{" "}
              <span className="logo-gradient font-bold">Kontaktujte nás</span>
            </h2>
            <p className="text-gray-300">
              Ak máte záujem o naše služby, kontaktujte nášho developera
              webových stránok na{" "}
              <a
                href="mailto:jaroba0@gmail.com"
                className="text-gold underline"
              >
                jaroba0@gmail.com
              </a>{" "}
              alebo navštívte jeho{" "}
              <a
                href="https://jaroslav.website"
                target="_blank"
                className="text-gold underline"
              >
                portfólio
              </a>
              .
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
