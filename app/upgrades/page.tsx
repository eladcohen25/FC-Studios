import Link from "next/link";

export const metadata = { title: "Add-Ons & Upgrades — FC Studios" };

export default function Page() {
  return (
    <section className="frame flex min-h-[100svh] flex-col justify-center py-32">
      <p className="t-label mb-5">Coming soon</p>
      <h1 className="t-display mb-6">Add-Ons & Upgrades</h1>
      <p className="t-serif max-w-[46ch]">Rooftop decks, front patios, pergolas, stairs, glazing, exterior finishes and interior options.</p>
      <Link href="/" className="btn mt-12 self-start">Back to home</Link>
    </section>
  );
}
