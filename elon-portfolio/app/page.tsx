'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Rocket, Building2, Brain, Zap } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companies = [
    {
      icon: <Rocket className="w-8 h-8" />,
      name: "SpaceX",
      role: "CEO & CTO",
      description: "Revolutionizing space technology with the goal of enabling people to live on other planets.",
      achievements: ["First private company to send humans to ISS", "Reusable rocket technology", "Starship development"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Tesla",
      role: "CEO & Product Architect",
      description: "Accelerating the world's transition to sustainable energy through electric vehicles and clean energy products.",
      achievements: ["World's most valuable car company", "Full Self-Driving technology", "Gigafactory network"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      name: "Neuralink",
      role: "Co-founder",
      description: "Developing ultra-high bandwidth brain-machine interfaces to connect humans and computers.",
      achievements: ["First human brain implant", "Wireless brain-computer interface", "Medical applications"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      name: "The Boring Company",
      role: "Founder",
      description: "Solving traffic through underground transportation tunnels and hyperloop technology.",
      achievements: ["Las Vegas Convention Center Loop", "Tunnel construction innovation", "Reduced tunneling costs"]
    }
  ];

  const vision = [
    "Make humanity a multi-planetary species",
    "Accelerate the transition to sustainable energy",
    "Advance artificial intelligence safely",
    "Connect human brains with AI",
    "Revolutionize transportation"
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            ELON MUSK
          </h1>
          <div className="flex gap-8 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#companies" className="hover:text-blue-400 transition">Companies</a>
            <a href="#vision" className="hover:text-blue-400 transition">Vision</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl">
                🚀
              </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ELON MUSK
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Entrepreneur, Engineer, Innovator
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building the future through space exploration, sustainable energy, artificial intelligence, and neural technology
          </p>

          <a
            href="#companies"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Explore My Work <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Born in Pretoria, South Africa, I've dedicated my life to solving humanity's greatest challenges through technology and innovation.
              </p>
              <p>
                From co-founding PayPal to leading multiple revolutionary companies, my mission has always been to ensure humanity's long-term survival and prosperity.
              </p>
              <p>
                I believe that becoming a multi-planetary species is essential for the long-term survival of consciousness, and that sustainable energy is critical for our planet's future.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Key Milestones</h3>
              <div className="space-y-4">
                {[
                  { year: "1999", event: "Co-founded PayPal" },
                  { year: "2002", event: "Founded SpaceX" },
                  { year: "2004", event: "Joined Tesla Motors" },
                  { year: "2016", event: "Founded Neuralink & The Boring Company" },
                  { year: "2022", event: "Acquired Twitter (X)" },
                  { year: "2024", event: "Advanced AI with xAI" }
                ].map((milestone) => (
                  <div key={milestone.year} className="flex items-center gap-4">
                    <span className="text-blue-400 font-bold text-xl w-20">{milestone.year}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent" />
                    <span className="text-gray-300">{milestone.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Companies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <div
                key={company.name}
                className="group bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                    {company.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{company.name}</h3>
                    <p className="text-blue-400 text-sm">{company.role}</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {company.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Achievements</p>
                  {company.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                      <p className="text-gray-300 text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Vision for the Future
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vision.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">0{index + 1}</div>
                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic max-w-4xl mx-auto leading-relaxed">
              "When something is important enough, you do it even if the odds are not in your favor."
            </blockquote>
            <p className="text-blue-400 mt-6 text-lg">— Elon Musk</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 mb-4">
            Building the future, one innovation at a time
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              Twitter/X
            </a>
            <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              Tesla
            </a>
            <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              SpaceX
            </a>
          </div>
          <p className="text-gray-600 text-xs mt-8">
            © 2024 Portfolio Website. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
