import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-bg">
      <Container className="text-center">
        <span className="font-mono text-sm uppercase tracking-[0.18em] text-gold">404</span>
        <h1 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
          This page got rerouted somewhere else.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-steel">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Head
          back home, or get in touch if you think this is a mistake.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" variant="primary">Back to Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
        <p className="mt-6">
          <Link href="/projects" className="text-sm text-steel underline-offset-4 hover:underline">
            Or browse our projects &rarr;
          </Link>
        </p>
      </Container>
    </main>
  );
}
