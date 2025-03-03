"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import {
  AnimatedSection,
  fadeIn,
  fadeInLeft,
  fadeInRight,
  StaggerContainer,
  AnimatedItem,
} from "../framer-motion-utils";

export default function ContactPage() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pridané useState pre formular
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  // Funkcia na aktualizáciu stavu formulára
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_ru7u6t4";
    const templateId = "template_r046tip";
    const publicKey = "mumt9kNYc9G2wXzqo";

    // Show loading toast
    const loadingToast = toast.loading("Odosielanie správy...");

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        // Dismiss loading toast and show success toast
        toast.dismiss(loadingToast);
        toast.success("Správa bola úspešne odoslaná!");
        // Reset form
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        // Dismiss loading toast and show error toast
        toast.dismiss(loadingToast);
        toast.error(
          "Pri odosielaní správy nastala chyba: " +
            (error.text || "Neznáma chyba")
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Kontaktujte Nás - AetherForge</title>
        <meta
          name="description"
          content="Spojte sa s AetherForge pre všetky vaše potreby AI riešení. Sme tu, aby sme pomohli transformovať vaše podnikanie pomocou najmodernejších technológií."
        />
      </Helmet>

      {/* Toast container */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1E1E1E",
            color: "#FFFFFF",
            border: "1px solid rgba(255, 215, 0, 0.2)",
          },
          success: {
            iconTheme: {
              primary: "#4ADE80",
              secondary: "#1E1E1E",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#1E1E1E",
            },
          },
        }}
      />

      <div className="container mx-auto px-6 py-12">
        <AnimatedSection variants={fadeIn}>
          <h1 className="text-4xl font-light text-center mb-16">
            Kontaktujte <span className="logo-gradient font-bold">Nás</span>
          </h1>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <StaggerContainer
            className="space-y-8"
            delayChildren={0.2}
            staggerDelay={0.2}
          >
            <AnimatedItem variants={fadeInLeft}>
              <div className="bg-dark/50 p-8 rounded-xl border border-gold/10">
                <h3 className="text-xl font-bold text-gold mb-6">
                  Kontaktné Informácie
                </h3>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Mail className="text-coral h-5 w-5" />
                    </motion.div>
                    <span className="text-gray-300">
                      aetherforgeagency@gmail.com
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Phone className="text-coral h-5 w-5" />
                    </motion.div>
                    <span className="text-gray-300">+421 949 533 151</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MapPin className="text-coral h-5 w-5" />
                    </motion.div>
                    <span className="text-gray-300">Košice</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Clock className="text-coral h-5 w-5" />
                    </motion.div>
                    <span className="text-gray-300">
                      Pondelok až Piatok: 8:00 - 18:00
                    </span>
                  </motion.div>
                </div>
              </div>
            </AnimatedItem>

            <AnimatedItem variants={fadeInLeft}>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <motion.img
                  src="https://media.discordapp.net/attachments/1060490975421669376/1346188452189966397/11.jpg?ex=67c74731&is=67c5f5b1&hm=b820d9c872abb0e072c4c57e5eb805f79898da5bd2adaae84233fabaaee645de&=&format=webp&width=705&height=469"
                  alt="Centrum Pokročilých Technológií"
                  className="w-full h-[300px] object-cover rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent"></div>
              </div>
            </AnimatedItem>
          </StaggerContainer>

          <AnimatedSection variants={fadeInRight}>
            <div className="bg-dark/50 p-8 rounded-xl border border-gold/10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Celé Meno
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      className="w-full px-4 py-3 bg-darker/50 border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold text-white transition-all"
                      placeholder="Ján Novák"
                      required
                      value={formData.user_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="w-full px-4 py-3 bg-darker/50 border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold text-white transition-all"
                      placeholder="jan@priklad.sk"
                      required
                      value={formData.user_email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Telefónne Číslo
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    className="w-full px-4 py-3 bg-darker/50 border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold text-white transition-all"
                    placeholder="+421 XXX XXX XXX"
                    value={formData.user_phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Správa
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-3 bg-darker/50 border border-gold/20 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold text-white transition-all"
                    rows={6}
                    placeholder="Povedzte nám o vašom projekte"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-gradient py-4 rounded-lg flex items-center justify-center space-x-2 text-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  disabled={isSubmitting}
                >
                  <span>
                    {isSubmitting ? "Odosielanie..." : "Odoslať Správu"}
                  </span>
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
