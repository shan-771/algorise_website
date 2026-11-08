"use client";

import { useEffect, useRef } from "react";
import { Brand } from "./BrandMark";
import { PricingCard, type Pricing } from "./PricingCard";
import { ServiceCard, type Service } from "./ServiceCard";

const services: Service[] = [
  { number: "01", title: "Web development", description: "Fast, accessible websites and web platforms engineered to convert, scale and stay maintainable.", bullets: ["Marketing sites and landing pages", "Web apps and SaaS dashboards", "E-commerce and headless CMS", "Performance, SEO and accessibility audits", "Integrations with the tools you already use"], visual: "web" },
  { number: "02", title: "Mobile app development", description: "Native-feeling iOS and Android apps, from first prototype to App Store launch.", bullets: ["iOS and Android apps", "Cross-platform builds with React Native", "Offline mode, sync and push notifications", "App Store and Google Play release", "Analytics, crash reporting and updates"], visual: "mobile" },
  { number: "03", title: "AI model development", description: "Custom models, LLM agents and data pipelines trained on your data and shipped to production.", bullets: ["LLM assistants and agents on your own data", "Computer vision and document processing", "Forecasting and anomaly detection", "Data pipelines and model evaluation", "Deployment, monitoring and retraining"], visual: "ai" },
  { number: "04", title: "IoT systems and installation", description: "Sensors, gateways and cloud dashboards, designed, installed and monitored end to end on site.", bullets: ["Sensor and gateway selection", "Embedded firmware and edge computing", "On-site installation and commissioning", "Cloud dashboards and real-time alerts", "Maintenance and remote monitoring"], visual: "iot" },
];

const pricing: Pricing[] = [
  { label: "01 // Essential", category: "Foundational", title: "Build your digital presence.", description: "For businesses looking to establish a professional, conversion-tuned online presence.", price: "₹15,000", priceNote: "starting", scope: "One-time or milestone based", features: ["Website design and development", "Landing page development", "Domain and hosting setup", "Basic SEO optimization", "Contact and enquiry forms", "WhatsApp integration", "Responsive website development"], action: "Explore Essential" },
  { label: "02 // Growth", category: "Scale optimized", title: "Digitize your operations.", description: "For growing businesses looking to streamline workflows, eliminate manual friction, and accelerate custom throughput.", price: "₹40,000", priceNote: "starting", scope: "Custom modular rollout", features: ["Everything in Essential tier", "Custom CRM development", "Custom business software", "Billing and invoicing systems", "Inventory and customer management", "WhatsApp automation pipelines", "Workflow automation and API integrations"], action: "Explore Growth", featured: true },
  { label: "03 // Enterprise", category: "Cognitive AI", title: "Automate. Integrate. Scale.", description: "For forward-thinking organizations requiring high-throughput architecture, intelligent AI automation, and multi-tenant systems.", price: "Custom", priceNote: "quotation", scope: "Dedicated engineering and scoping sprint", features: ["Everything in Growth tier", "AI-powered business automation", "AI chatbots and virtual assistants", "Autonomous WhatsApp AI agents", "Custom LLM and vector database integrations", "Complex workflow and ERP integrations", "Live analytics and high-availability cloud software"], action: "Discuss your project" },
];

function GlobeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const points = Array.from({ length: 1800 }, (_, i) => { const phi = Math.acos(-1 + (2 * i) / 1800); const theta = Math.sqrt(1800 * Math.PI) * phi; return { x: Math.cos(theta) * Math.sin(phi), y: Math.sin(theta) * Math.sin(phi), z: Math.cos(phi) }; });
    let frame = 0;
    let rotation = 0;
    const draw = () => {
      const size = Math.min(canvas.clientWidth, canvas.clientHeight);
      const ratio = window.devicePixelRatio || 1;
      canvas.width = size * ratio;
      canvas.height = size * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, size, size);
      const radius = size * 0.42;
      const center = size / 2;
      context.shadowBlur = 8;
      points.forEach((point) => { const x = point.x * Math.cos(rotation) - point.z * Math.sin(rotation); const z = point.x * Math.sin(rotation) + point.z * Math.cos(rotation); const depth = (z + 1) / 2; const land = Math.sin(point.y * 8) + Math.cos(point.x * 11 + point.z * 5) > 0.2; context.fillStyle = land ? `rgba(0,210,255,${0.22 + depth * 0.72})` : `rgba(11,22,43,${0.2 + depth * 0.3})`; context.shadowColor = land ? "#00d2ff" : "transparent"; context.beginPath(); context.arc(center + x * radius, center + point.y * radius, Math.max(0.7, depth * 1.8), 0, Math.PI * 2); context.fill(); });
      rotation += 0.0012;
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);
  return <canvas ref={ref} className="absolute inset-0 m-auto globe-canvas" aria-hidden="true" />;
}

export default function LandingPage() {
  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>('a[href="#contact"]').forEach((link) => { link.href = "https://wa.me/917398872311"; link.target = "_blank"; link.rel = "noreferrer"; });
  }, []);

  useEffect(() => {
    const reveal = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-revealed"); observer.unobserve(entry.target); } }), { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    reveal.forEach((element) => observer.observe(element));
    const wrappers = Array.from(document.querySelectorAll<HTMLElement>(".stack-card-wrapper"));
    const updateStack = () => wrappers.forEach((wrapper, index) => { const card = wrapper.querySelector<HTMLElement>(".stack-card-item"); const next = wrappers[index + 1]; if (!card || !next) return; const distance = next.getBoundingClientRect().top - 112; const progress = Math.min(Math.max((window.innerHeight * 0.7 - distance) / (window.innerHeight * 0.7), 0), 1); card.style.transform = `perspective(1200px) translateY(${-progress * 32}px) rotateX(${-progress * 18}deg) scale(${1 - progress * 0.06})`; card.style.opacity = `${1 - progress * 0.45}`; card.style.filter = `blur(${progress * 4}px)`; });
    window.addEventListener("scroll", updateStack, { passive: true }); window.addEventListener("resize", updateStack); updateStack();
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateStack); window.removeEventListener("resize", updateStack); };
  }, []);

  return <div className="bg-[#060913] text-[#dee2f5] antialiased flex flex-col min-h-screen selection:bg-[#00d2ff] selection:text-black">
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#060913]/60 border-b border-cyan-500/10 transition-all"><div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between"><Brand /><a className="text-sm font-medium px-4 py-2 rounded-full border border-cyan-500/30 bg-[#0d172e]/80 hover:bg-[#122246] text-neutral-100 hover:text-white transition-all duration-200 hover:border-cyan-400/60 hover:shadow-[0_0_18px_rgba(0,166,255,0.35)]" href="https://wa.me/917398872311" target="_blank" rel="noreferrer">Start a project</a></div></header>
    <main className="flex-grow relative">
      <div className="absolute top-[540px] md:top-[610px] left-0 right-0 z-30 flex flex-col sm:flex-row items-center justify-center gap-4 px-6"><a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-[#00a6ff] to-[#00d2ff] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(0,166,255,0.35)] hover:opacity-90 transition-opacity" href="https://wa.me/917398872311" target="_blank" rel="noreferrer">Contact us <span className="ml-2">→</span></a><a className="inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-[#0d172e]/80 px-6 py-3 text-sm font-semibold text-cyan-100 hover:bg-[#122246] hover:border-cyan-400/60 transition-all" href="#pricing">See plans <span className="ml-2">→</span></a></div>
      <section className="relative overflow-hidden min-h-[720px] md:min-h-[750px] flex items-center justify-center pt-24 pb-20 md:pt-32 md:pb-28 px-6 text-center" data-purpose="hero-header"><div className="absolute inset-0 w-full h-full pointer-events-none"><GlobeCanvas /></div><div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,9,19,0.72)_0%,rgba(6,9,19,0.35)_45%,rgba(6,9,19,0.94)_85%,#060913_100%)] z-10" /><div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#060913] via-[#060913]/85 to-transparent pointer-events-none z-10" /><div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto"><div className="inline-flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-[#0b142b]/80 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-6 animate-hero-kicker shadow-[0_0_15px_rgba(0,166,255,0.18)]"><span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] mr-2 shadow-[0_0_8px_#00d2ff]" />Services</div><h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6 animate-hero-heading drop-shadow-[0_4px_25px_rgba(0,166,255,0.2)]">What we build, and how we ship it.</h1><p className="text-lg md:text-xl text-[#bec7d4] max-w-2xl mx-auto font-normal leading-relaxed animate-hero-copy text-center drop-shadow">Four disciplines under one roof: websites, mobile apps, AI models and connected IoT systems, designed together so everything works the day it goes live.</p></div></section>
      <section className="py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto" id="services"><div className="relative stack-perspective-viewport pb-12">{services.map((service, index) => <div className={`stack-card-wrapper sticky top-28 ${index === 3 ? "mb-12" : "mb-32"}`} key={service.number} style={{ zIndex: (index + 1) * 10 }}><ServiceCard service={service} index={index} /></div>)}</div></section>
      <section className="reveal-on-scroll py-24 px-6 max-w-6xl mx-auto" data-purpose="engagement-options"><div className="mb-14"><span className="text-xs uppercase tracking-wider font-semibold text-cyan-400 block mb-3">Working together</span><h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Pick the setup that fits how you work.</h2></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{[["Fixed-scope project", "A clear brief, a fixed price and a launch date. Best when you know what you need built."], ["Dedicated team", "Our engineers and designers work as an extension of your team, sprint after sprint."], ["Ongoing support", "Monitoring, updates and improvements after launch, on a simple monthly plan."]].map(([title, text]) => <div className="group bg-[#091024]/80 border border-cyan-500/15 rounded-2xl p-8 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:shadow-[0_12px_40px_rgba(0,166,255,0.18)] transition-all duration-300" key={title}><h3 className="text-lg font-semibold text-white mb-3">{title}</h3><p className="text-[#bec7d4] text-sm leading-relaxed">{text}</p></div>)}</div></section>
      <section className="w-full border-t border-cyan-500/10" id="pricing" aria-label="Pricing"><div className="max-w-6xl mx-auto px-6 py-24"><div className="max-w-3xl mb-14"><span className="text-xs uppercase tracking-[0.18em] font-semibold text-cyan-400">Investment architecture</span><h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mt-4 mb-5">Choose the build that fits your next move.</h2><p className="text-[#bec7d4] text-base md:text-lg leading-relaxed">Clear starting points for ambitious teams. Every package is shaped around your business, your pace, and the systems you need to move forward.</p></div><div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">{pricing.map((plan) => <PricingCard key={plan.label} plan={plan} />)}</div><div className="mt-8 rounded-2xl border border-cyan-500/15 bg-[#081126] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8" id="contact"><div><span className="text-xs uppercase tracking-[0.16em] text-cyan-400">Modular flexibility guarantee</span><h3 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-3">Need something specific? Build your own custom stack.</h3><p className="text-sm text-[#bec7d4] leading-relaxed max-w-2xl">Pick standalone WhatsApp automation, a custom billing portal, or a dedicated AI support bot without selecting an entire package.</p></div><a className="shrink-0 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 via-[#00a6ff] to-[#00d2ff] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity" href="#contact">Let&apos;s discuss <span className="ml-2">→</span></a></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-sm text-[#bec7d4]"><div><h4 className="text-white font-semibold mb-2">State-of-the-art stack</h4><p>Next.js, Node.js, Python, PostgreSQL, and AWS or Cloudflare edge infrastructure.</p></div><div><h4 className="text-white font-semibold mb-2">Zero-trust &amp; data privacy</h4><p>Encryption at rest and in transit, strict RBAC, and automated security audit logs.</p></div><div><h4 className="text-white font-semibold mb-2">Dedicated handover &amp; support</h4><p>Documentation, walkthroughs, source ownership, and a 30-day post-launch warranty.</p></div></div></div></section>
    </main>
    <footer className="border-t border-cyan-500/10 py-16 px-6 relative bg-[#040710]"><div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12"><div className="space-y-4 max-w-sm"><Brand footer /><p className="text-[#bec7d4] text-xs leading-relaxed">Web, mobile, AI and IoT engineering for ambitious companies.</p><p className="text-neutral-500 text-xs pt-4">© 2026 Algorise IT Solution. All rights reserved.</p></div></div></footer>
  </div>;
}
