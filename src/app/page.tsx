import Navigation from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/Footer";
import ProblemSolution from "@/components/landing/ProblemSolution";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import StyleDemo from "@/components/landing/StyleDemo";
import UseCases from "@/components/landing/UseCases";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemSolution />
        <StyleDemo />
        <HowItWorks />
        <Features />
        <UseCases />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
