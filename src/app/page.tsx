'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'
import ProblemSolution from '@/components/ProblemSolution'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import StyleDemo from '@/components/StyleDemo'
import UseCases from '@/components/UseCases'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'




export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      {/* <Stats /> */}
      <StyleDemo />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollReveal />
    </>
  )
}
