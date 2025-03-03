"use client";
import { Helmet } from "react-helmet-async";
import {
  HeartHandshake,
  TrendingUp,
  GraduationCap,
  Wrench,
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

export default function SpecializedAgentsPage() {
  return (
    <>
      <Helmet>
        <title>Špecializovaní AI Agenti - AetherForge</title>
        <meta
          name="description"
          content="Vyvíjame špecializovaných AI agentov pre zákaznícku podporu, predaj, technické poradenstvo a vzdelávanie."
        />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <AnimatedSection variants={fadeIn}>
          <h1 className="text-4xl font-light mb-4">
            Špecializovaní{" "}
            <span className="logo-gradient font-bold">AI Agenti</span>
          </h1>
          <p className="text-gray-300 mb-12 max-w-2xl">
            Vytvárame účelových AI agentov, ktorí vynikajú v špecifických
            úlohách a odvetviach, prinášajúc výnimočnú hodnotu vašej
            organizácii.
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
                    <HeartHandshake className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Agenti Zákazníckej Podpory
                    </h3>
                    <p className="text-gray-300">
                      Nepretržitá podpora s agentmi, ktorí rozumejú vašim
                      produktom a poskytujú užitočné, presné odpovede.
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
                    <TrendingUp className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Experti na Predaj a Marketing
                    </h3>
                    <p className="text-gray-300">
                      AI agenti, ktorí kvalifikujú potenciálnych zákazníkov,
                      odpovedajú na otázky o produktoch a sprevádzajú zákazníkov
                      predajným procesom.
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
                    <Wrench className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Technickí Konzultanti
                    </h3>
                    <p className="text-gray-300">
                      Technická podpora s agentmi, ktorí dokážu riešiť problémy
                      a poskytovať odborné poradenstvo.
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
                    <GraduationCap className="h-8 w-8 text-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">
                      Vzdelávací Tútori
                    </h3>
                    <p className="text-gray-300">
                      AI tútori, ktorí sa prispôsobujú štýlu učenia a tempu
                      každého študenta.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </StaggerContainer>

          <AnimatedSection variants={fadeInRight}>
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                src="https://media.discordapp.net/attachments/1060490975421669376/1346185753385762896/7.jpg?ex=67c744ae&is=67c5f32e&hm=e2a520a784dd32bf50932b12985814aec52a62edd00e8040376ed4e394675790&=&format=webp&width=441&height=663"
                alt="Rozhranie AI Agentov"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
