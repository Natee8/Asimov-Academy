import { useState } from "react";
import logo from "../../assets/logos/Logo.svg";
import { ButtonLink } from "../landing/ButtonLink";
import { PRIMARY_NAV_LINKS } from "../../utils/navigation";

export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-6">
        <a href="#top" className="block shrink-0">
          <img
            src={logo}
            alt="Positivus"
            width={220}
            height={36}
            className="h-[36px] w-[219.54px] max-w-[min(219.54px,100%)] object-contain"
          />
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-secondary text-secondary md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-primary-nav"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-[2px] w-5 bg-current transition-transform duration-200 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[2px] w-5 bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-[2px] w-5 bg-current transition-transform duration-200 ${isOpen ? "translate-y-[-7px] -rotate-45" : ""}`}
            />
          </span>
        </button>

        <div className="hidden items-center justify-end gap-6 md:flex md:gap-10">
          <nav
            className="flex items-center justify-end gap-5 text-lg font-normal md:gap-10"
            aria-label="Primary"
          >
            {PRIMARY_NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="border-b border-transparent pb-0.5 text-secondary transition hover:border-secondary"
              >
                {label}
              </a>
            ))}
          </nav>

          <ButtonLink href="#cta" variant="outline-dark" className="shrink-0 text-center">
            Request a quote
          </ButtonLink>
        </div>
      </div>

      <div
        id="mobile-primary-nav"
        className={`${isOpen ? "mt-4 flex" : "hidden"} w-full flex-col gap-4 rounded-2xl border border-secondary bg-background p-5 md:hidden`}
      >
        <nav className="flex flex-col gap-3 text-lg font-normal" aria-label="Mobile primary">
          {PRIMARY_NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-secondary"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <ButtonLink href="#cta" variant="outline-dark" className="w-full text-center">
          Request a quote
        </ButtonLink>
      </div>
    </div>
  );
};
