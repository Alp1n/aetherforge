import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AIAssistantsPage from "./pages/services/AIAssistantsPage";
import SpecializedAgentsPage from "./pages/services/SpecializedAgentsPage";
import WebDevelopmentPage from "./pages/services/WebDevelopmentPage";
import ChatbotsPage from "./pages/services/ChatbotsPage";
import AutomationPage from "./pages/services/AutomationPage";
import NotFoundPage from "./pages/NotFoundPage"; 
import LenisProvider from "./components/LenisProvider";

export default function App() {
  return (
    <LenisProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/services/ai-assistants"
                element={<AIAssistantsPage />}
              />
              <Route
                path="/services/specialized-agents"
                element={<SpecializedAgentsPage />}
              />
              <Route
                path="/services/web-development"
                element={<WebDevelopmentPage />}
              />
              <Route path="/services/chatbots" element={<ChatbotsPage />} />
              <Route path="/services/automation" element={<AutomationPage />} />
              <Route path="*" element={<NotFoundPage />} />{" "}
              {/* Add fallback route */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </LenisProvider>
  );
}