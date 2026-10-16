import Link from "next/link";

export const metadata = { title: "Start a project — FC Studios" };

export default function Page() {
  return (
    <section className="frame flex min-h-[100svh] flex-col justify-center py-32">
      <p className="t-label mb-5">Coming soon</p>
      <h1 className="t-display mb-6">Start a project</h1>
      <p className="t-serif max-w-[46ch]">The inquiry form will live here. Every Inquire button on the site links to this page with the selected studio in the URL.</p>
      <Link href="/" className="btn mt-12 self-start">Back to home</Link>
    </section>
  );
}
