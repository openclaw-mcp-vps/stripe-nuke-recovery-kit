export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-red-900/40 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Payment Processor Insurance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Business Continuity Toolkit for{" "}
          <span className="text-[#58a6ff]">Payment Processor Shutdowns</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          When Stripe freezes your account, you have hours — not days — to recover.
          Pre-configured backup processors, one-click migration scripts, and real-time
          health monitoring so you never lose a sale.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Get Instant Access — $199/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Setup in under 10 minutes.</p>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["3", "Backup Processors"],
            ["<5 min", "Failover Time"],
            ["24/7", "Health Monitoring"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$199<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to survive a processor shutdown</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Stripe account health monitoring",
              "Paddle, LemonSqueezy & PayPal backup configs",
              "One-click migration scripts",
              "Instant email + SMS alerts on risk signals",
              "Customer re-billing automation",
              "Dedicated recovery runbook",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="text-green-400 mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors text-center"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What happens when Stripe shuts me down?",
              a: "Stripe can freeze or terminate accounts with little warning. This toolkit pre-configures Paddle, LemonSqueezy, and PayPal as hot standbys so you can redirect traffic in minutes, not days.",
            },
            {
              q: "How does the health monitoring work?",
              a: "You connect your Stripe account via read-only API key. We monitor dispute rates, payout holds, and risk signals 24/7 and alert you the moment anything looks suspicious — before a shutdown happens.",
            },
            {
              q: "Do I need technical skills to set this up?",
              a: "No. The dashboard walks you through each step with copy-paste scripts and guided configuration. Most users are fully set up in under 10 minutes.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
