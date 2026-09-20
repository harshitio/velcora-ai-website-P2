import FadeIn from '../components/FadeIn';

const ABOUT_TEXT =
  'I am interested in practical AI: agents that complete useful workflows, automation that removes repetitive work, and products that people can understand and use. Most of my learning happens by building in public — making a version, testing it, finding what breaks, and trying again.';

const FOCUS_AREAS = [
  { value: 'AI Agents', label: 'Workflow automation & intelligent systems' },
  { value: 'SaaS Products', label: 'Full-stack apps from idea to deployment' },
  { value: 'Automation', label: 'Removing repetitive work with code' },
  { value: 'In Public', label: 'Sharing what I build, learn, and break' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#0C0C0C] flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20">
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <img
            src="/harshit-profile.jpeg"
            alt="Harshit"
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] rounded-2xl object-cover border-2 border-[#D7E2EA]/20"
          />
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <p className="text-center font-medium leading-relaxed text-[#D7E2EA] max-w-[600px] text-[clamp(1rem,2vw,1.35rem)]">
            {ABOUT_TEXT}
          </p>
        </FadeIn>

        <FadeIn delay={0.25} y={20}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-4">
            {FOCUS_AREAS.map((s) => (
              <div key={s.value} className="text-center">
                <p className="text-[clamp(1.2rem,3vw,2rem)] font-black text-white leading-none">
                  {s.value}
                </p>
                <p className="text-[#888] text-[clamp(0.65rem,1vw,0.8rem)] mt-2 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-6 md:mt-8">
          <FadeIn delay={0.3} y={20}>
            <a
              href="#projects"
              className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] border border-[#D7E2EA]/60 transition-colors duration-200 hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
            >
              See What I Build
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
