export type Service = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  visual: string;
};

function Visual({ type }: { type: string }) {
  if (type === "web") return <svg className="w-full h-full relative z-10" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fluidGrad1" x1="50" x2="350" y1="50" y2="350"><stop stopColor="#0284c7" /><stop offset="35%" stopColor="#00a6ff" /><stop offset="70%" stopColor="#00d2ff" /><stop offset="100%" stopColor="#1e3a8a" /></linearGradient></defs><path d="M60 160C100 80 240 80 290 150c50 70-10 170-110 170S20 240 60 160Z" fill="url(#fluidGrad1)" opacity=".88" /><path d="M120 220c40-80 140-60 170 10s-70 110-140 70-90 0-30-80Z" fill="#00d2ff" opacity=".95" /></svg>;
  if (type === "mobile") return <svg className="w-full h-full object-cover" fill="none" preserveAspectRatio="none" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wave1" x1="0" x2="500" y1="0" y2="500"><stop stopColor="#38bdf8" /><stop offset="40%" stopColor="#0284c7" /><stop offset="75%" stopColor="#1d4ed8" /><stop offset="100%" stopColor="#0f172a" /></linearGradient><linearGradient id="wave2" x1="500" x2="0" y1="200" y2="500"><stop stopColor="#00d2ff" /><stop offset="50%" stopColor="#2563eb" /><stop offset="100%" stopColor="#1e1b4b" /></linearGradient></defs><rect fill="url(#wave1)" height="500" width="500" /><path d="M0 280c150-60 300 60 500-40v260H0Z" fill="url(#wave2)" opacity=".9" /><path d="M0 360c120-40 280 80 500-50v190H0Z" fill="#0284c7" /><path d="M0 190c180-10 320 120 500-30v80c-200 100-350-20-500 40Z" fill="#38bdf8" opacity=".5" /></svg>;
  if (type === "ai") return <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="nebulaCyan" cx="30%" cy="40%" r="50%"><stop stopColor="#00d2ff" /><stop offset="60%" stopColor="#0284c7" stopOpacity=".6" /><stop offset="100%" stopColor="#030712" stopOpacity="0" /></radialGradient><radialGradient id="nebulaBlue" cx="70%" cy="45%" r="45%"><stop stopColor="#3b82f6" stopOpacity=".95" /><stop offset="50%" stopColor="#1d4ed8" stopOpacity=".7" /><stop offset="100%" stopColor="#030712" stopOpacity="0" /></radialGradient></defs><rect fill="#030712" height="500" width="500" /><circle cx="200" cy="220" fill="url(#nebulaCyan)" r="160" /><circle cx="340" cy="240" fill="url(#nebulaBlue)" r="150" /><path d="M120 180Q220 70 340 140t80 160Q290 420 160 360Z" fill="#00a6ff" opacity=".65" /><circle cx="360" cy="180" fill="#38bdf8" opacity=".85" r="90" /></svg>;
  return <svg className="w-full h-full object-cover" fill="none" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><rect fill="#0369a1" height="500" width="500" /><path d="M-50 150Q100 100 250 160t300-20v410H-50Z" fill="#0284c7" opacity=".65" /><path d="M-50 210Q80 160 250 220t300-30v360H-50Z" fill="#0369a1" opacity=".75" /><path d="M-50 270Q120 220 250 280t300-30v300H-50Z" fill="#075985" opacity=".85" /><path d="M0 170q100-50 250 10t250-20M0 230q80-50 250 10t250-30M0 290q120-50 250 10t250-30M0 350q90-50 250 10t250-30M0 420q140-50 250 10t250-40" opacity=".7" stroke="#38bdf8" strokeWidth="1.5" /></svg>;
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const visualClass = index === 0 ? "bg-card-1" : index === 1 ? "bg-card-2" : index === 2 ? "bg-card-3" : "bg-card-4";
  return (
    <article className="stack-card-item rounded-3xl border border-cyan-500/20 bg-[#091024] p-7 md:p-12 shadow-[0_24px_70px_rgba(0,0,0,0.85)] hover:border-cyan-400/40 transition-all duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className={`md:col-span-5 ${index % 2 ? "order-1 md:order-2" : "order-1 md:order-1"}`}>
          <div className={`visual-card ${visualClass} flex items-center justify-center ${index === 0 ? "p-8" : "p-0"} group transition-all duration-500 hover:scale-[1.02] w-full max-w-[380px] mx-auto border border-cyan-400/25`}>
            <Visual type={service.visual} />
          </div>
        </div>
        <div className={`md:col-span-7 ${index % 2 ? "order-2 md:order-1" : "order-2 md:order-2"} flex flex-col justify-center`}>
          <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 tracking-tight">{service.number}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{service.title}</h2>
          <p className="text-[#bec7d4] text-base md:text-lg mb-8 leading-relaxed">{service.description}</p>
          <ul className="divide-y divide-cyan-900/30 text-neutral-300 text-sm md:text-[15px]">
            {service.bullets.map((bullet) => <li className="py-3 hover:text-white hover:border-cyan-500/40 hover:translate-x-1.5 transition-all duration-200" key={bullet}>{bullet}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}
