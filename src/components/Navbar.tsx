"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  ArrowUpRight, 
  Menu, 
  X, 
  Smartphone, 
  Globe, 
  Bot, 
  Zap, 
  MoveRight,
  Plus,
  Minus,
  ShoppingBag,
  Users,
  Heart,
  Gamepad2,
  Monitor,
  Server,
  Cloud,
  Database
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  
  const brandYellow = "#F2B800"; 

  const toggleAccordion = (val: string) => {
    setActiveAccordion(activeAccordion === val ? null : val);
  };

  const services = [
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-5 h-5 text-purple-500" />,
      items: ["Android App Development", "iOS App Development", "Cross Platform Apps", "React Native", "Flutter", "Expo"]
    },
    {
      title: "Website Development",
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      items: ["Corporate Websites", "E-commerce Websites", "Custom Web Applications", "Django Development", "React Development", "Next.js Development"]
    },
    {
      title: "AI Services",
      icon: <Bot className="w-5 h-5 text-indigo-400" />,
      items: ["AI Chatbots", "AI Automation", "AI Image & Video Generation", "AI Content Creation", "AI Agents", "AI Recommendation Systems"]
    },
    {
      title: "Automation Solutions",
      icon: <Zap className="w-5 h-5 text-orange-400" />,
      items: ["Marketing Automation", "Sales Automation", "CRM Automation", "Lead Management", "Email Automation", "WhatsApp Automation"]
    }
  ];

  const solutions = [
    {
      title: "E-commerce Solutions",
      icon: <ShoppingBag className="w-5 h-5 text-orange-500" />,
      items: ["Multi Vendor Marketplace", "Shopping Apps", "Payment Integration", "Stripe", "Razorpay", "PayPal"]
    },
    {
      title: "Social Media Platforms",
      icon: <Users className="w-5 h-5 text-blue-500" />,
      items: ["Community Apps", "Creator Platforms", "Short Video Apps", "Live Streaming", "Real-time Chat", "Feed Systems"]
    },
    {
      title: "Dating Platforms",
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      items: ["Matchmaking Apps", "AI Match Systems", "Geo-location Dating", "Video Calling", "Subscription Systems", "User Verification"]
    },
    {
      title: "Gaming Solutions",
      icon: <Gamepad2 className="w-5 h-5 text-green-500" />,
      items: ["Multiplayer Games", "Casino Platforms", "Reward Systems", "Wallet Systems", "Leaderboards", "Real-time Gaming"]
    }
  ];

  const technologies = [
    {
      title: "Frontend",
      icon: <Monitor className="w-5 h-5 text-cyan-500" />,
      items: ["React", "Next.js", "React Native"]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      items: ["Django", "Node.js", "Laravel"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5 text-sky-500" />,
      items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Server Management"]
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5 text-amber-600" />,
      items: ["PostgreSQL", "MongoDB", "Firebase"]
    }
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/logo/LOGO.png" alt="Sky Nova Digitals" className="h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-10">
            
            {/* Services Dropdown */}
            <div className="group static">
              <button className="flex items-center text-gray-700 font-semibold hover:text-black py-8 transition-all">
                Services <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 right-0 top-[80px] w-full bg-white text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-4 gap-12">
                  {services.map((section, idx) => (
                    <div key={idx} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">{section.icon}</div>
                        <h3 className="font-bold text-lg">{section.title}</h3>
                      </div>
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i}><Link href="#" className="text-gray-500 hover:text-[#F2B800] transition-colors text-[15px] font-medium">{item}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F2B800] py-6 text-white">
                  <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                    <p className="text-sm font-medium">Full-stack software from mobile to AI — all under one roof.</p>
                    <Link href="#" className="flex items-center gap-2 font-bold hover:gap-4 transition-all">Book a Consultation <MoveRight className="w-5 h-5" /></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="group static">
              <button className="flex items-center text-gray-700 font-semibold hover:text-black py-8 transition-all">
                Solutions <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 right-0 top-[80px] w-full bg-white text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-4 gap-12">
                  {solutions.map((section, idx) => (
                    <div key={idx} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">{section.icon}</div>
                        <h3 className="font-bold text-lg">{section.title}</h3>
                      </div>
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i}><Link href="#" className="text-gray-500 hover:text-[#F2B800] transition-colors text-[15px] font-medium">{item}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F2B800] py-6 text-white">
                  <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                    <p className="text-sm font-medium">Pre-built, battle-tested solutions for the most competitive digital segments.</p>
                    <Link href="#" className="flex items-center gap-2 font-bold hover:gap-4 transition-all">Book a Consultation <MoveRight className="w-5 h-5" /></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies Dropdown */}
            <div className="group static">
              <button className="flex items-center text-gray-700 font-semibold hover:text-black py-8 transition-all">
                Technologies <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 right-0 top-[80px] w-full bg-white text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-4 gap-12">
                  {technologies.map((section, idx) => (
                    <div key={idx} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">{section.icon}</div>
                        <h3 className="font-bold text-lg">{section.title}</h3>
                      </div>
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i}><Link href="#" className="text-gray-500 hover:text-[#F2B800] transition-colors text-[15px] font-medium">{item}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F2B800] py-6 text-white">
                  <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                    <p className="text-sm font-medium">Modern, scalable tech stack — always current, always production-grade.</p>
                    <Link href="#" className="flex items-center gap-2 font-bold hover:gap-4 transition-all">View all technologies <MoveRight className="w-5 h-5" /></Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="#" className="text-gray-700 font-semibold hover:text-black">About</Link>
          </div>

          {/* START A PROJECT BUTTON */}
          <div className="flex items-center gap-4">
            <Link 
              href="#" 
              style={{ backgroundColor: brandYellow }} 
              className="hidden md:flex items-center px-6 py-3 rounded-md text-black font-bold text-sm hover:brightness-95 transition-all shadow-sm"
            >
              Start a Project? <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>

            {/* Mobile Burger Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 duration-300">
          <div className="px-6 py-8 space-y-4">
            
            {/* Mobile Services Accordion */}
            <div className="border-b border-gray-100 pb-4">
              <button onClick={() => toggleAccordion('services')} className="flex items-center justify-between w-full font-bold text-xl text-gray-900">
                Services {activeAccordion === 'services' ? <Minus size={20} className="text-[#F2B800]" /> : <Plus size={20} />}
              </button>
              {activeAccordion === 'services' && (
                <div className="mt-6 space-y-8 animate-in fade-in">
                  {services.map((section) => (
                    <div key={section.title} className="space-y-4">
                      <div className="flex items-center gap-3 text-[#F2B800] font-bold">{section.icon} <span className="text-gray-900">{section.title}</span></div>
                      <div className="grid grid-cols-1 gap-3 pl-8">
                        {section.items.map(item => (<Link key={item} href="#" className="text-gray-500 text-[15px]">{item}</Link>))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="border-b border-gray-100 pb-4">
              <button onClick={() => toggleAccordion('solutions')} className="flex items-center justify-between w-full font-bold text-xl text-gray-900">
                Solutions {activeAccordion === 'solutions' ? <Minus size={20} className="text-[#F2B800]" /> : <Plus size={20} />}
              </button>
              {activeAccordion === 'solutions' && (
                <div className="mt-6 space-y-8 animate-in fade-in">
                  {solutions.map((section) => (
                    <div key={section.title} className="space-y-4">
                      <div className="flex items-center gap-3 text-[#F2B800] font-bold">{section.icon} <span className="text-gray-900">{section.title}</span></div>
                      <div className="grid grid-cols-1 gap-3 pl-8">
                        {section.items.map(item => (<Link key={item} href="#" className="text-gray-500 text-[15px]">{item}</Link>))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Technologies Accordion */}
            <div className="border-b border-gray-100 pb-4">
              <button onClick={() => toggleAccordion('tech')} className="flex items-center justify-between w-full font-bold text-xl text-gray-900">
                Technologies {activeAccordion === 'tech' ? <Minus size={20} className="text-[#F2B800]" /> : <Plus size={20} />}
              </button>
              {activeAccordion === 'tech' && (
                <div className="mt-6 space-y-8 animate-in fade-in">
                  {technologies.map((section) => (
                    <div key={section.title} className="space-y-4">
                      <div className="flex items-center gap-3 text-[#F2B800] font-bold">{section.icon} <span className="text-gray-900">{section.title}</span></div>
                      <div className="grid grid-cols-1 gap-3 pl-8">
                        {section.items.map(item => (<Link key={item} href="#" className="text-gray-500 text-[15px]">{item}</Link>))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="#" className="block py-2 font-bold text-xl text-gray-900 border-b border-gray-100">About</Link>
            
            <div className="pt-6">
              <button style={{ backgroundColor: brandYellow }} className="w-full py-4 text-black font-bold rounded-xl shadow-lg flex justify-center items-center gap-2">
                Start a Project? <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;