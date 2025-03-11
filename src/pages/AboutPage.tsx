"use client";
import { Helmet } from "react-helmet-async";
import {
  Sparkles,
  Hammer,
  Lightbulb,
  Rocket,
  Hexagon,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  fadeIn,
  StaggerContainer,
  AnimatedItem,
  scaleIn,
} from "../framer-motion-utils";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>O AetherForge - AetherForge</title>
        <meta
          name="description"
          content="Spoznajte význam a filozofiu za menom AetherForge - kde sa spája éter inovácií s kováčskou dielňou budúcnosti."
        />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-20">
          <AnimatedSection variants={fadeIn}>
            <h2 className="text-4xl font-light mb-8 text-center">
              Význam mena{" "}
              <span className="logo-gradient font-bold">AetherForge</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-2 gap-8 mb-12"
            delayChildren={0.2}
            staggerDelay={0.3}
          >
            <AnimatedItem variants={scaleIn}>
              <motion.div
                className="bg-dark/50 p-8 rounded-xl feature-card"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles className="h-6 w-6 text-gold" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gold">Aether</h3>
                </div>
                <p className="text-gray-300">
                  Pochádza zo starovekej filozofie, kde éter bol považovaný za
                  jemnú, všadeprítomnú látku, ktorá vypĺňa vesmír. Symbolizuje
                  inováciu, konektivitu a neobmedzený potenciál. Dáva názvu
                  pocit niečoho vzácneho a univerzálneho.
                </p>
              </motion.div>
            </AnimatedItem>

            <AnimatedItem variants={scaleIn}>
              <motion.div
                className="bg-dark/50 p-8 rounded-xl feature-card"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Hammer className="h-6 w-6 text-gold" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gold">Forge</h3>
                </div>
                <p className="text-gray-300">
                  Znamená „kovačňa" alebo miesto, kde sa tvoria majstrovské
                  diela. Vyjadruje tvorbu, transformáciu a budovanie niečoho
                  hodnotného.
                </p>
              </motion.div>
            </AnimatedItem>
          </StaggerContainer>

          <AnimatedSection variants={fadeIn} delay={0.6}>
            <motion.div
              className="bg-dark/50 p-8 rounded-xl feature-card mb-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center"
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hexagon className="h-6 w-6 text-gold" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gold">AetherForge</h3>
              </div>
              <p className="text-gray-300">
                Spojením slov Aether a Forge vzniká názov, ktorý predstavuje
                miesto, kde sa éter inovácií transformuje na hmatateľné
                technologické riešenia. Je to priestor, kde sa nehmotné nápady a
                neobmedzený potenciál umelej inteligencie pretavujú do
                konkrétnych, hodnotných produktov a služieb. AetherForge
                symbolizuje našu schopnosť pracovať s najmodernejšími
                technológiami a formovať ich do riešení, ktoré prinášajú
                skutočnú hodnotu našim klientom.
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection variants={fadeIn} delay={0.8}>
            <div className="flex justify-center mb-12">
              <motion.div
                className="bg-dark/50 p-8 rounded-xl max-w-2xl feature-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 mb-4 justify-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote className="h-6 w-6 text-gold" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gold">Náš Slogan</h3>
                </div>
                <p className="text-gray-300 text-lg italic text-center">
                  "Tvoríme nadčasové inovácie z éteru kreativity."
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          <StaggerContainer
            className="grid md:grid-cols-2 gap-8"
            delayChildren={1}
            staggerDelay={0.3}
          >
            <AnimatedItem variants={scaleIn}>
              <motion.div
                className="bg-dark/50 p-8 rounded-xl feature-card"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Lightbulb className="h-6 w-6 text-gold" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gold">
                    Naše Zameranie
                  </h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full"></span>
                    <span>
                      Špecializácia na umelú inteligenciu, automatizáciu a
                      špičkové technologické produkty
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full"></span>
                    <span>
                      Personalizované riešenia pre rôzne odvetvia, ktoré
                      transformujú podniky
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full"></span>
                    <span>
                      Kombinácia kreativity s technologickou dokonalosťou
                    </span>
                  </motion.li>
                </ul>
              </motion.div>
            </AnimatedItem>

            <AnimatedItem variants={scaleIn}>
              <motion.div
                className="bg-dark/50 p-8 rounded-xl feature-card"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Rocket className="h-6 w-6 text-gold" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gold">
                    Naša Identita
                  </h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full"></span>
                    <span>
                      Moderný, elegantný brand, ktorý zaujme a vzbudí dôveru
                    </span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full"></span>
                    <span>Dôraz na dlhodobú spoluprácu a stabilitu</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="w-2 h-2 mt-2 mr-2 bg-gold rounded-full"></span>
                    <span>
                      Schopnosť prispôsobiť sa novým trhom a neustále napredovať
                    </span>
                  </motion.li>
                </ul>
              </motion.div>
            </AnimatedItem>
          </StaggerContainer>
        </div>
      </div>
    </>
  );
}
