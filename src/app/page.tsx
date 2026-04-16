import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          Track your job applications. Improve your response rate.
        </h1>

        <p className="mt-4 text-muted-foreground max-w-xl">
          JobFlow AI helps you stay organized, follow up smarter, and land more
          interviews.
        </p>

        <div className="mt-6 flex gap-4">
          <Link href="/dashboard">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-24 max-w-5xl mx-auto">
        {[
          {
            title: "Track Applications",
            desc: "Keep all your job applications in one place.",
          },
          {
            title: "AI Follow-ups",
            desc: "Generate professional follow-ups instantly.",
          },
          {
            title: "Stay Consistent",
            desc: "Never miss a follow-up opportunity.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border/50 bg-background/60 p-6"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer CTA */}
      <section className="text-center pb-20">
        <Link href="/dashboard">
          <Button size="lg">Start Managing Applications</Button>
        </Link>
      </section>
    </div>
  );
}
