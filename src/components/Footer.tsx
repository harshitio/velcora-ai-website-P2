import { GITHUB_URL, X_URL, LINKEDIN_URL, CONTACT_EMAIL, MAILTO_URL } from '../lib/constants';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Now', href: '#now' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL = [
  { label: 'X / Twitter', href: X_URL },
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
];

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] pt-20 pb-5 max-[900px]:pt-[60px] border-t border-[#f0f0f0]">
      <div className="mx-auto max-w-[1100px] w-full px-5">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-10 mb-[50px] max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-[#0C0C0C] mb-3">
              Harshit.io
            </h2>
            <p className="text-[0.85rem] text-[#888] leading-[1.6] max-w-[280px]">
              AI product builder — agents, automation systems, SaaS tools, and experiments from idea to working product.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
              Navigation
            </h3>
            <ul>
              {NAV.map((item) => (
                <li className="mb-3" key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-[0.95rem] text-neutral-900">
              Connect
            </h3>
            <ul>
              {SOCIAL.map((item) => (
                <li className="mb-3" key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mb-3">
                <a
                  href={MAILTO_URL}
                  className="text-[#888] no-underline text-[0.85rem] transition-colors duration-200 hover:text-neutral-900"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#f0f0f0] pt-[25px] pb-[10px] flex justify-between text-[0.85rem] text-[#888] max-[480px]:flex-col max-[480px]:gap-[15px] max-[480px]:items-center">
          <p>&copy; {new Date().getFullYear()} Harshit.io</p>
          <div className="flex gap-5 max-[480px]:flex-col max-[480px]:items-center">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] no-underline hover:text-neutral-900 transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="max-[480px]:hidden">·</span>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] no-underline hover:text-neutral-900 transition-colors duration-200"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
