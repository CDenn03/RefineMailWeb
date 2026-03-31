'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/layout/Navbar'
import Hero from '@/components/landing/Hero'
import Stats from '@/components/landing/Stats'
import ScrollReveal from '@/components/landing/ScrollReveal'
import Footer from '@/components/landing/Footer'
import ProblemSolution from '@/components/landing/ProblemSolution'
import HowItWorks from '@/components/landing/HowItWorks'
import Features from '@/components/landing/Features'
import StyleDemo from '@/components/landing/StyleDemo'
import UseCases from '@/components/landing/UseCases'
import Testimonials from '@/components/landing/Testimonials'
import FAQ from '@/components/landing/FAQ'
import Pricing from '@/components/landing/Pricing'
import FinalCTA from '@/components/landing/FinalCTA'




export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      {/* <Stats /> */}
      <ProblemSolution />
      <StyleDemo />
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
