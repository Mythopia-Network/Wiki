import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Fast geschafft!</h1>
      <p className="text-fd-muted-foreground">
        Öffne{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        um zur Dokumentation zu gelangen.
      </p>
    </main>
  );
}
