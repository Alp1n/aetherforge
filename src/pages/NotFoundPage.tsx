import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  AnimatedSection,
  fadeIn,
  StaggerContainer,
  AnimatedItem,
  scaleIn,
} from "../framer-motion-utils";

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Stránka nenájdená - AetherForge</title>
        <meta
          name="description"
          content="Ospravedlňujeme sa, ale stránka, ktorú hľadáte, neexistuje."
        />
      </Helmet>

      <div className="container mx-auto px-6 py-12">
        <div className="mb-20">
          <AnimatedSection variants={fadeIn}>
            <h2 className="text-4xl font-light mb-8 text-center">
              Stránka nenájdená{" "}
              <span className="logo-gradient font-bold">404</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection variants={fadeIn} delay={0.6}>
            <motion.div
              className="bg-dark/50 p-8 rounded-xl feature-card mb-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center"
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="h-6 w-6 text-gold" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gold">Oops!</h3>
              </div>
              <p className="text-gray-300 text-center">
                Ospravedlňujeme sa, ale stránka, ktorú hľadáte, neexistuje.
                Skúste sa vrátiť na hlavnú stránku.
              </p>
              <div className="flex justify-center mt-8">
                <motion.a
                  href="/"
                  className="bg-gold text-dark px-6 py-3 rounded-full font-bold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  Späť na hlavnú stránku
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}