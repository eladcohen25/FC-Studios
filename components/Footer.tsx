import Link from "next/link";
import { footer, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="frame pt-16 pb-8" style={{ background: "#ffffff", color: "#111111" }}>
      <div className="grid grid-cols-4 gap-x-8 max-md:grid-cols-1 max-md:gap-y-10">
        {footer.columns.map((col) => (
          <div key={col.heading}>
            <p className="t-body mb-5 font-medium">{col.heading}</p>
            <ul className="t-body space-y-2" style={{ color: "rgba(0,0,0,0.7)" }}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener" : undefined}
                    className="hover:text-black"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <form className="md:max-w-[300px]" action="#">
          <p className="t-body mb-5 font-medium">{footer.newsletter.heading}</p>
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              type="email"
              placeholder={footer.newsletter.placeholder}
              className="t-body w-full border-0 border-b bg-transparent py-2 outline-none placeholder:text-black/40 focus:border-black"
              style={{ borderColor: "rgba(0,0,0,0.3)" }}
            />
          </label>
          <label className="t-body mt-4 flex items-center gap-2" style={{ color: "rgba(0,0,0,0.7)" }}>
            <input type="checkbox" className="h-3 w-3 accent-black" />
            <span>
              {footer.newsletter.consent}{" "}
              <Link href={footer.newsletter.consentLink.href} className="underline">
                {footer.newsletter.consentLink.label}
              </Link>
            </span>
          </label>
          <button type="submit" className="btn btn-dark mt-5 w-full">
            {footer.newsletter.button}
          </button>
        </form>
      </div>

      <div
        className="t-body mt-20 flex items-center justify-between gap-6 max-md:flex-col max-md:items-start"
        style={{ color: "rgba(0,0,0,0.6)" }}
      >
        <p>{footer.legal}</p>
        <ul className="flex gap-6">
          {footer.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener" className="hover:text-black">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
