import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import CareersBanner from "./components/CareersBanner";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InsightsSection from "./components/InsightsSection";
import LocationMapSection from "./components/LocationMapSection";
import Navigation from "./components/Navigation";
import PromoVideoSection from "./components/PromoVideoSection";
import ServicesSection from "./components/ServicesSection";
import StatsBar from "./components/StatsBar";
import { useGetAllCaseStudies, useGetAllInsights } from "./hooks/useQueries";

const queryClient = new QueryClient();

function AppContent() {
  const [contactOpen, setContactOpen] = useState(false);
  const { data: caseStudies = [] } = useGetAllCaseStudies();
  const { data: insights = [] } = useGetAllInsights();

  return (
    <div className="min-h-screen font-sans">
      <Navigation onContactOpen={() => setContactOpen(true)} />

      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <PromoVideoSection />
        <CaseStudiesSection caseStudies={caseStudies} />
        <InsightsSection insights={insights} />
        <CareersBanner />
        <LocationMapSection />
      </main>

      <Footer />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
