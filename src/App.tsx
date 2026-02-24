/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Database, 
  Cpu, 
  Mail, 
  ChevronRight, 
  ShieldCheck, 
  Globe, 
  Zap,
  ArrowUpRight,
  Microscope
} from 'lucide-react';

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-sm">
      <div className="flex items-center gap-2">
        <img 
          src="https://picsum.photos/seed/pervasio-logo/128/128" 
          alt="Pervasio Logo" 
          className="w-8 h-8 rounded-lg object-cover"
          referrerPolicy="no-referrer"
        />
        <span className="font-bold tracking-tight text-zinc-900">PERVASIO</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600">
        <a href="#about" className="hover:text-red-600 transition-colors">About</a>
        <a href="#technology" className="hover:text-red-600 transition-colors">Technology</a>
        <a href="#data" className="hover:text-red-600 transition-colors">Datahub</a>
        <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
      </div>
      <a href="mailto:info@pervasio.com" className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
        Inquire
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 medical-gradient overflow-hidden">
    <div className="absolute inset-0 -z-10 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl text-center z-10"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-8">
        <ShieldCheck className="w-3.5 h-3.5" />
        Medical-Grade Diagnostics at Scale
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
        High-Performance <span className="text-red-600">Biosensing</span> Technologies.
      </h1>
      <p className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Pervasio leverages specialized industry know-how and global supply chain expertise to deliver cost-effective, precision diagnostics.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-200">
          Explore nClic® Platform
          <ChevronRight className="w-4 h-4" />
        </button>
        <button className="w-full sm:w-auto bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl font-semibold hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
          View Datahub
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="mt-20 w-full max-w-6xl relative group"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-blue-500/10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-100 flex flex-col md:flex-row">
        <div className="md:w-2/3 relative h-[400px] md:h-auto overflow-hidden">
          <img 
            src="https://picsum.photos/seed/medical-analyzer/1200/800" 
            alt="Pervasio Diagnostic Analyzer" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
            <div className="text-white">
              <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">Flagship Device</div>
              <h3 className="text-2xl font-bold">Microfluidic Analyzer System</h3>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-zinc-900 p-8 flex flex-col justify-center border-l border-zinc-800">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Real-time Analysis</div>
                <div className="text-zinc-400 text-xs">Instant biosensing feedback</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Rapid Results</div>
                <div className="text-zinc-400 text-xs">Under 15 minutes processing</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Medical Grade</div>
                <div className="text-zinc-400 text-xs">Lab-quality precision</div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">System Telemetry</div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="h-full bg-red-500" 
                />
              </div>
              <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                  className="h-full bg-blue-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const Technology = () => (
  <section id="technology" className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <div className="order-2 md:order-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-red-500/5 rounded-[2rem] blur-2xl group-hover:bg-red-500/10 transition-colors" />
            <img 
              src="https://picsum.photos/seed/clab-device/800/800" 
              alt="c-Lab Device" 
              className="relative rounded-3xl shadow-xl border border-zinc-100 w-full object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg border border-zinc-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-zinc-900">c-Lab® Portable</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6">
            The nClic® Platform: <br />
            <span className="text-red-600">Precision POC Testing</span>
          </h2>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            Our Nano-chain Chemiluminescent Immunoassay Chip makes precision Point-of-Care testing affordable for the first time. We've miniaturized medical-grade lab capabilities into a cost-effective chip.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Nano-chain technology for enhanced sensitivity",
              "Rapid results in under 15 minutes",
              "Low-cost manufacturing at global scale",
              "Medical-grade diagnostic accuracy"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <Zap className="w-3 h-3" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
              <img 
                src="https://picsum.photos/seed/diagnostics-app/128/128" 
                alt="App Integration" 
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-bold text-zinc-900">Mobile Integration</div>
              <div className="text-sm text-zinc-500 leading-snug">Seamlessly sync results to our smartphone app for instant patient tracking.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-6">
            IoT Connectivity: <br />
            <span className="text-blue-600">Scalable Diagnostic Networks</span>
          </h2>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            Our multi-bay analyzer systems are designed for high-throughput environments, from community centers to primary care clinics. Seamlessly monitor multiple devices via our smart diagnostic network.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">Multi-Bay</div>
              <div className="text-xs text-blue-700 font-medium uppercase tracking-wider">High Throughput</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="text-2xl font-bold text-emerald-600 mb-1">99.9%</div>
              <div className="text-xs text-emerald-700 font-medium uppercase tracking-wider">Uptime</div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-500/5 rounded-[2rem] blur-2xl group-hover:bg-blue-500/10 transition-colors" />
          <img 
            src="https://picsum.photos/seed/analyzer-system/1000/800" 
            alt="Multi-bay Analyzer System" 
            className="relative rounded-3xl shadow-xl border border-zinc-100 w-full object-cover aspect-[4/3]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const Ecosystem = () => (
  <section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">The Pervasio Ecosystem</h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Connecting patients, specialists, and research institutions through a unified diagnostic datahub.
        </p>
      </div>
      
      <div className="relative bg-white rounded-[3rem] p-12 shadow-xl border border-zinc-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="relative grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 shrink-0 shadow-sm border border-red-100">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Home & Community</h4>
                <p className="text-zinc-600 leading-relaxed">Bringing medical-grade testing to homes, gyms, senior centers, and local pharmacies.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm border border-blue-100">
                <Database className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">Primary Care & Specialists</h4>
                <p className="text-zinc-600 leading-relaxed">Empowering doctors with real-time longitudinal data for better clinical decisions.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm border border-emerald-100">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-zinc-900 mb-2">CDC & Research</h4>
                <p className="text-zinc-600 leading-relaxed">Aggregated, anonymized data insights for public health monitoring and research.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-red-500/10 via-blue-500/10 to-emerald-500/10 blur-3xl rounded-full" />
            <img 
              src="https://picsum.photos/seed/healthcare-ecosystem/1000/1000" 
              alt="Healthcare Ecosystem Diagram" 
              className="relative rounded-2xl shadow-2xl border border-zinc-100 w-full object-cover aspect-square"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Datahub = () => (
  <section id="data" className="py-24 px-6 bg-zinc-950 text-white overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <div className="grid grid-cols-12 h-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-zinc-800 h-full" />
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">LIMSaaS® Datahub</h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          AI-enabled data management for real-time insights and longitudinal monitoring.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Real-time Insights
            </h4>
            <p className="text-zinc-400">Instant analysis of diagnostic data using proprietary AI models trained on medical-grade datasets.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
              <Database className="w-4 h-4" />
              Longitudinal Monitoring
            </h4>
            <p className="text-zinc-400">Track patient health trends over months and years with secure, encrypted data storage.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Enterprise Security
            </h4>
            <p className="text-zinc-400">HIPAA-compliant infrastructure designed for the most sensitive medical data.</p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="text-xs font-mono text-zinc-500">LIMSaaS_DASHBOARD_V2.0</span>
          </div>
          <div className="space-y-6">
            <div className="h-4 w-3/4 bg-zinc-800 rounded" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 bg-zinc-800/50 rounded-xl border border-zinc-800 flex items-end p-4">
                <div className="w-full flex items-end gap-1 h-full">
                  {[40, 70, 45, 90, 65, 80].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-red-500/20 border-t-2 border-red-500" />
                  ))}
                </div>
              </div>
              <div className="h-32 bg-zinc-800/50 rounded-xl border border-zinc-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">99.9%</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Accuracy</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-zinc-800 rounded" />
              <div className="h-2 w-5/6 bg-zinc-800 rounded" />
              <div className="h-2 w-4/6 bg-zinc-800 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6 bg-zinc-50">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-zinc-900 mb-6">Partner with Pervasio</h2>
      <p className="text-lg text-zinc-600 mb-12">
        Interested in our biosensing technologies or the nClic® platform? Get in touch with our team for inquiries and collaborations.
      </p>
      <a 
        href="mailto:info@pervasio.com" 
        className="inline-flex items-center gap-4 bg-white border border-zinc-200 p-8 rounded-3xl hover:border-red-500 hover:shadow-xl transition-all group"
      >
        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
          <Mail className="w-8 h-8" />
        </div>
        <div className="text-left">
          <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Inquiry Contact</div>
          <div className="text-2xl font-bold text-zinc-900">info@pervasio.com</div>
        </div>
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-zinc-200 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <img 
          src="https://picsum.photos/seed/pervasio-logo/128/128" 
          alt="Pervasio Logo" 
          className="w-6 h-6 rounded object-cover"
          referrerPolicy="no-referrer"
        />
        <span className="font-bold tracking-tight text-zinc-900">PERVASIO, INC.</span>
      </div>
      <div className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} Pervasio, Inc. All rights reserved. US-based Biosensing Technologies.
      </div>
      <div className="flex gap-6 text-sm font-medium text-zinc-400">
        <a href="#" className="hover:text-zinc-900">Privacy</a>
        <a href="#" className="hover:text-zinc-900">Terms</a>
        <a href="#" className="hover:text-zinc-900">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans selection:bg-red-100 selection:text-red-900">
      <Nav />
      <main>
        <Hero />
        <section id="about" className="py-24 px-6 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Our Expertise</h3>
              <p className="text-zinc-600 leading-relaxed">
                Decades of specialized industry know-how in high-performance biosensing and medical diagnostics.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Product Design</h3>
              <p className="text-zinc-600 leading-relaxed">
                Expertise in creating medical-grade hardware and software that is both powerful and user-centric.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Global Scale</h3>
              <p className="text-zinc-600 leading-relaxed">
                World-class supply chain management to deliver cost-effective diagnostics to every corner of the globe.
              </p>
            </div>
          </div>
        </section>
        <Technology />
        <Ecosystem />
        <Datahub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
