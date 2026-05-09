/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechSpecs from './components/TechSpecs';
import Events from './components/Events';
import Simulators from './components/Simulators';
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import Team from './components/Team';
import Join from './components/Join';
import Research from './components/Research';
import SlantSection from './components/SlantSection';
import { LazyMotion, domAnimation, motion } from 'motion/react';
import { Zap, Brain, Cpu, Rocket } from 'lucide-react';

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          <Hero />
          
          <SlantSection id="tech" slantColor="bg-brand-blue">
            <TechSpecs />
          </SlantSection>

          <SlantSection id="simulators" bgColor="bg-slate-50" slantColor="bg-brand-ink">
            <Simulators />
          </SlantSection>

          <SlantSection id="research" bgColor="bg-white" slantColor="bg-brand-yellow">
            <Research />
          </SlantSection>
          <SlantSection id="events" bgColor="bg-slate-50" slantColor="bg-brand-ink">
            <Events />
          </SlantSection>
          <SlantSection id="join" bgColor="bg-white" className="border-t border-slate-100" slantColor="bg-slate-50">
            <Join />
          </SlantSection>
          <SlantSection id="gallery" bgColor="bg-slate-50" slantColor="bg-brand-ink">
            <Gallery />
          </SlantSection>
          <SlantSection id="team" bgColor="bg-slate-ink" slantColor="bg-brand-50">
            <Team />
          </SlantSection>
        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}

