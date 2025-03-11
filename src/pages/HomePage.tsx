"use client";

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  fadeInLeft,
  fadeInRight,
  StaggerContainer,
  AnimatedItem,
} from "../framer-motion-utils";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>AetherForge - AI Riešenia Novej Generácie</title>
        <meta
          name="description"
          content="Transformujte svoje podnikanie pomocou najmodernejšej umelej inteligencie. Zefektívnite prevádzku, vylepšite zákaznícku skúsenosť a podporujte inovácie."
        />
      </Helmet>

      <div className="home-page">
        <section id="home" className="relative min-h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              alt="Zem z vesmíru"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-darker/95 via-darker/80 to-darker/60"></div>
          </div>
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>

          <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="hero-title mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Nová Generácia
                  <br />
                  <motion.span
                    className="logo-gradient font-bold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    AI Riešení
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="hero-subtitle text-xl text-gray-300 mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Transformujte svoje podnikanie pomocou najmodernejšej umelej
                  inteligencie. Zefektívnite prevádzku, vylepšite zákaznícku
                  skúsenosť a podporujte inovácie.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/services"
                      className="btn-gradient px-8 py-3 rounded-full text-white flex items-center"
                    >
                      Preskúmať Riešenia <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Transition Section */}
        <section className="transition-section h-16 bg-gradient-to-b from-transparent to-[#171717]"></section>

        <section className="py-24 bg-dark/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection variants={fadeInLeft}>
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    src="public/2.jpg"
                    alt="Pokročilá Technológia"
                    className="rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection variants={fadeInRight}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl font-light mb-8">
                    O{" "}
                    <span className="logo-gradient font-bold">AetherForge</span>
                  </h2>
                  <p className="text-gray-300 mb-6">
                    V AetherForge sme priekopníkmi budúcnosti riešení umelej
                    inteligencie. Náš tím expertov kombinuje najmodernejšie
                    technológie s hlbokými odbornými znalosťami v odvetví, aby
                    poskytoval transformačné AI riešenia, ktoré podporujú
                    obchodný úspech.
                  </p>
                  <p className="text-gray-300 mb-8">
                    Veríme v posúvanie hraníc možností s AI, vytvárame riešenia,
                    ktoré nielen spĺňajú dnešné výzvy, ale predvídajú aj
                    zajtrajšie príležitosti.
                  </p>

                  <StaggerContainer
                    className="grid grid-cols-3 gap-6"
                    delayChildren={0.2}
                    staggerDelay={0.2}
                  >
                    <AnimatedItem>
                      <motion.div
                        className="text-center"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-3xl font-bold text-gold mb-2">
                          1
                        </div>
                        <div className="text-sm text-gray-400">
                          Globálny Klient
                        </div>
                      </motion.div>
                    </AnimatedItem>
                    <AnimatedItem>
                      <motion.div
                        className="text-center"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-3xl font-bold text-gold mb-2">
                          1
                        </div>
                        <div className="text-sm text-gray-400">
                          Dokončený Projekt
                        </div>
                      </motion.div>
                    </AnimatedItem>
                    <AnimatedItem>
                      <motion.div
                        className="text-center"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-3xl font-bold text-gold mb-2">
                          100%
                        </div>
                        <div className="text-sm text-gray-400">
                          Spokojnosť Klientov
                        </div>
                      </motion.div>
                    </AnimatedItem>
                  </StaggerContainer>
                </motion.div>
              </AnimatedSection>
            </div>

            <div className="mt-20">
              <AnimatedSection>
                <h3 className="text-3xl font-light mb-8">
                  Naše <span className="logo-gradient font-bold">Hodnoty</span>
                </h3>
              </AnimatedSection>

              <StaggerContainer
                className="grid md:grid-cols-3 gap-8"
                delayChildren={0.2}
                staggerDelay={0.2}
              >
                <AnimatedItem>
                  <motion.div
                    className="bg-dark/50 p-8 rounded-xl"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-bold text-gold mb-4">
                      Inovácia
                    </h4>
                    <p className="text-gray-300">
                      Neustále posúvame hranice možností s AI a zostávame na
                      čele technologických trendov.
                    </p>
                  </motion.div>
                </AnimatedItem>
                <AnimatedItem>
                  <motion.div
                    className="bg-dark/50 p-8 rounded-xl"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-bold text-gold mb-4">
                      Excelentnosť
                    </h4>
                    <p className="text-gray-300">
                      Udržiavame najvyššie štandardy v každom riešení, ktoré
                      dodávame, zabezpečujúc optimálny výkon.
                    </p>
                  </motion.div>
                </AnimatedItem>
                <AnimatedItem>
                  <motion.div
                    className="bg-dark/50 p-8 rounded-xl"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-xl font-bold text-gold mb-4">
                      Partnerstvo
                    </h4>
                    <p className="text-gray-300">
                      Úzko spolupracujeme s našimi klientmi, rozumieme ich
                      potrebám a dodávame prispôsobené riešenia.
                    </p>
                  </motion.div>
                </AnimatedItem>
              </StaggerContainer>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
