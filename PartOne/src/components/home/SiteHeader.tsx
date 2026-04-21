import logo from "../../assets/logos/Logo.svg";
import { ButtonLink } from "../landing/ButtonLink";
import { PRIMARY_NAV_LINKS } from "../../utils/navigation";

export const SiteHeader = () => (
  <div className="flex w-full flex-wrap items-center justify-between gap-y-4 gap-x-6">
    <a href="#top" className="block shrink-0">
      <img
        src={logo}
        alt="Positivus"
        width={220}
        height={36}
        className="h-[36px] w-[219.54px] max-w-[min(219.54px,100%)] object-contain"
      />
    </a>

    <div className="flex flex-wrap items-center justify-end gap-6 md:gap-10">
      <nav
        className="flex flex-wrap items-center justify-end gap-5 md:gap-10 text-lg font-normal"
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
);
