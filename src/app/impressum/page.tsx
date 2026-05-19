import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Deploy Change – Faris El Mokhtari, Webentwicklung, Kiel.",
  alternates: { canonical: "https://deploy-change.de/impressum" },
  openGraph: { url: "https://deploy-change.de/impressum" },
};

export default function Impressum() {
  return (
    <section className="bg-[#FFFCF3] min-h-screen pt-28 md:pt-36 pb-24">
      <div className="max-w-[860px] mx-auto px-6 md:px-12 lg:px-16">

        <p className="text-black/22 text-[0.65rem] font-semibold tracking-widest uppercase mb-6">
          Rechtliches
        </p>
        <h1
          className="font-medium leading-[0.9] text-[oklch(12%_0.015_30)] mb-16"
          style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
        >
          Impressum
        </h1>

        <div className="prose-deploy">

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Faris El Mokhtari<br />
            Deploy Web Development<br />
            {/* TODO: Straße und Hausnummer eintragen */}
            Holm 17<br />
            24107 Kiel<br />
            Deutschland
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:info@deploy-change.de">info@deploy-change.de</a>
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Faris El Mokhtari<br />
            Holm 17<br />
            24107 Kiel<br />
            Deutschland
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>

        </div>

        <div className="mt-16 pt-8 border-t border-black/8">
          <Link href="/" className="text-black/30 text-sm hover:text-black transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
