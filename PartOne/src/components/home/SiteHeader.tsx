import logo from "../../assets/logos/Logo.svg";
import { ButtonLink } from "../landing/ButtonLink";
import { PRIMARY_NAV_LINKS } from "../../utils/navigation";

export const SiteHeader = () => (
  <div className="flex flex-wrap items-center justify-between gap-6">
    <a href="#top" className="block shrink-0">
      <img
        src={logo}
        alt="Positivus"
        width={220}
        height={36}
        className="h-8 w-auto md:h-9"
      />
    </a>

    <nav
      className="order-3 flex w-full flex-wrap items-center justify-center gap-5 text-lg font-normal md:order-2 md:w-auto md:justify-end md:gap-[40px]"
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

    <ButtonLink
      href="#cta"
      variant="outline-dark"
      className="order-2 text-center md:order-3"
    >
      Book a consultation
    </ButtonLink>
  </div>
);
