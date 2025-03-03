"use client";

import { Helmet } from "react-helmet-async";
import {
  Bot,
  Brain,
  MessageSquare,
  Settings,
  Users,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  StaggerContainer,
  AnimatedItem,
} from "../../framer-motion-utils";

export default function AIAssistantsPage() {
  return (
    <>
      <Helmet>
        <title>Vlastní AI Asistenti - AetherForge</title>
        <meta
          name="description"
          content="Vytvorte si vlastného AI asistenta s jedinečnou osobnosťou, znalosťami a schopnosťami prispôsobenými vašim potrebám."
        />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <AnimatedSection variants={fadeIn}>
          <h1 className="text-4xl font-light mb-4">
            Vlastní{" "}
            <span className="logo-gradient font-bold">AI Asistenti</span>
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Vytvorte si výkonných, personalizovaných AI asistentov, ktorí
            rozumejú vašej oblasti, hovoria vaším jazykom a pomáhajú dosahovať
            vaše ciele.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection variants={fadeInLeft}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=1000"
                alt="Vizualizácia AI Asistenta"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent"></div>
            </div>
          </AnimatedSection>

          <StaggerContainer className="flex gap-4 flex-col" delayChildren={0.2} staggerDelay={0.2}>
            <AnimatedItem variants={fadeInRight}>
              <div className="feature-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Bot className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Prispôsobiteľná Osobnosť
                    </h3>
                    <p className="text-gray-300">
                      Definujte tón, štýl a správanie vášho asistenta tak, aby
                      zodpovedali vašej značke a požiadavkám.
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
                    <Brain className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Odborné Znalosti
                    </h3>
                    <p className="text-gray-300">
                      Trénujte svojho asistenta so špecializovanými znalosťami
                      vo vašom odvetví.
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
                    <Globe className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Viacjazyčná Podpora
                    </h3>
                    <p className="text-gray-300">
                      Komunikujte s používateľmi vo viacerých jazykoch pri
                      zachovaní kontextu a porozumenia.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </StaggerContainer>
        </div>

        <AnimatedSection>
          <div className="bg-dark/50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-light mb-8">
              Ako to <span className="logo-gradient font-bold">Funguje</span>
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
                    <Settings className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">1. Konfigurácia</h3>
                  <p className="text-gray-300">
                    Definujte schopnosti, osobnosť a znalosti vášho asistenta.
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
                    <MessageSquare className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">2. Tréning</h3>
                  <p className="text-gray-300">
                    Trénujte asistenta so špecifickými údajmi a vzormi
                    interakcie.
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
                    <Users className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">3. Nasadenie</h3>
                  <p className="text-gray-300">
                    Nasaďte svojho asistenta na rôzne platformy a začnite
                    komunikovať s používateľmi.
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
