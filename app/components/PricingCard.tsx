export type Pricing = {
  label: string;
  category: string;
  title: string;
  description: string;
  price: string;
  priceNote: string;
  scope: string;
  features: string[];
  action: string;
  featured?: boolean;
};

export function PricingCard({ plan }: { plan: Pricing }) {
  return (
    <article className={`group flex flex-col rounded-2xl border ${plan.featured ? "border-cyan-400/40 bg-gradient-to-b from-[#0d1b3c] to-[#091024] shadow-[0_16px_45px_rgba(0,166,255,0.12)]" : "border-cyan-500/15 bg-[#091024]"} p-7 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_20px_55px_rgba(0,166,255,0.22)] transition-all duration-300 relative`}>
      {plan.featured && <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-white">RECOMMENDED / MOST POPULAR</span>}
      <div className={`flex items-center justify-between text-xs uppercase tracking-[0.14em] text-cyan-300 ${plan.featured ? "mt-2" : ""}`}><span>{plan.label}</span><span>{plan.category}</span></div>
      <h3 className="text-2xl font-bold text-white mt-7 mb-3">{plan.title}</h3>
      <p className="text-[#bec7d4] text-sm leading-relaxed mb-7">{plan.description}</p>
      <div className="border-y border-cyan-500/10 py-5 mb-6"><span className="block text-xs uppercase tracking-wider text-[#8899b0]">Deployment investment</span><strong className="block text-3xl text-white mt-2">{plan.price} <small className="text-sm font-normal text-[#8899b0]">{plan.priceNote}</small></strong><span className="text-xs text-[#8899b0]">{plan.scope}</span>
      </div>
      <ul className="space-y-3 text-sm text-[#bec7d4] flex-1 list-none pl-0">{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
      <a className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${plan.featured ? "bg-gradient-to-r from-blue-600 via-[#00a6ff] to-[#00d2ff] text-white hover:opacity-90" : "border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"}`} href="#contact">
        {plan.action} <span className="ml-2">→</span>
      </a>
    </article>
  );
}
