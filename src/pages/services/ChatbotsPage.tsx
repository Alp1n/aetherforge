"use client";
import { Helmet } from "react-helmet-async";
import {
  MessageSquare,
  Brain,
  Database,
  RefreshCcw,
  Users,
  Zap,
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

export default function ChatbotsPage() {
  return (
    <>
      <Helmet>
        <title>Vývoj AI Chatbotov - AetherForge</title>
        <meta
          name="description"
          content="Vytvorte inteligentných chatbotov, ktorí rozumejú kontextu, učia sa z interakcií a poskytujú cennú pomoc vašim používateľom."
        />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <AnimatedSection variants={fadeIn}>
          <h1 className="text-4xl font-light mb-4">
            Vývoj <span className="logo-gradient font-bold">AI Chatbotov</span>
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Vytvárame inteligentných chatbotov, ktorí rozumejú kontextu, učia sa
            z interakcií a poskytujú hodnotnú asistenciu vašim používateľom.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <StaggerContainer
            className="space-y-8"
            delayChildren={0.2}
            staggerDelay={0.15}
          >
            <AnimatedItem variants={fadeInLeft}>
              <div className="feature-card p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MessageSquare className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Prirodzené Konverzácie
                    </h3>
                    <p className="text-gray-300">
                      Pokročilé spracovanie jazyka pre prirodzené interakcie a
                      porozumenie.
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
                    <Database className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Vlastná Znalostná Báza
                    </h3>
                    <p className="text-gray-300">
                      Tréning chatbota so špecifickými informáciami o vašich
                      produktoch, službách a postupoch.
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
                    <Brain className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Kontextové Odpovede
                    </h3>
                    <p className="text-gray-300">
                      Prispôsobenie odpovedí na základe typu používateľa,
                      kontextu a histórie konverzácie.
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
                    <RefreshCcw className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Neustále Učenie
                    </h3>
                    <p className="text-gray-300">
                      Zlepšovanie odpovedí v priebehu času na základe interakcií
                      a spätnej väzby.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </StaggerContainer>

          <AnimatedSection variants={fadeInRight}>
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src="/4.jpg"
                alt="Rozhranie Chatbota"
                className="w-full h-[630px] object-cover"
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
              Možnosti{" "}
              <span className="logo-gradient font-bold">Integrácie</span>
            </h2>
            <StaggerContainer className="grid md:grid-cols-2 gap-8">
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
                  <h3 className="text-xl font-bold mb-2">
                    Multiplatformová Podpora
                  </h3>
                  <p className="text-gray-300">
                    Nasadenie chatbota na webstránky, komunikačné aplikácie a
                    sociálne siete.
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
                    <Zap className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">API Integrácia</h3>
                  <p className="text-gray-300">
                    Prepojenie chatbota s existujúcimi systémami a databázami.
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
