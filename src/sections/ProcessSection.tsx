import FadeIn from '../components/FadeIn';

const STEPS = [
  {
    number: '01',
    name: 'Find the Problem',
    description:
      'I start with a real friction point — something that wastes time, breaks workflows, or could be dramatically simpler with AI and software.',
  },
  {
    number: '02',
    name: 'Build a Version',
    description:
      'I design the system and ship a working prototype fast. Real data, real workflows, real outputs — not mockups.',
  },
  {
    number: '03',
    name: 'Test and Learn',
    description:
      'I use it, break it, and find what actually matters. The useful part is rarely what I expected at the start.',
  },
  {
    number: '04',
    name: 'Share and Improve',
    description:
      'I document what worked, what failed, and what changed. Then I iterate — better architecture, better UX, better results.',
  },
];

export default function ProcessSection() {
  return (
    <section
      id="now"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="text-center font-black uppercase text-[#D7E2EA] text-[clamp(2.5rem,9vw,120px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-24">
          How I Build
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {STEPS.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 py-8 sm:py-10"
              style={{ borderTop: i === 0 ? undefined : '1px solid rgba(215,226,234,0.15)' }}
            >
              <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,8vw,100px)] leading-none opacity-40">
                {step.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="font-medium uppercase text-[#D7E2EA] text-[clamp(1rem,2.2vw,2rem)]">
                  {step.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[#D7E2EA] opacity-60 text-[clamp(0.85rem,1.6vw,1.2rem)]">
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        <div style={{ borderTop: '1px solid rgba(215,226,234,0.15)' }} />
      </div>
    </section>
  );
}
