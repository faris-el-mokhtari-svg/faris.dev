import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Deploy Change. Informationen zur Datenverarbeitung gemäß DSGVO.",
  alternates: { canonical: "https://deploy-change.de/datenschutz" },
  openGraph: { url: "https://deploy-change.de/datenschutz" },
};

export default function Datenschutz() {
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
          Datenschutz&shy;erklärung
        </h1>

        <div className="prose-deploy">

          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
            können Sie dem Impressum dieser Website entnehmen.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen — etwa über das
            Kontaktformular. Andere Daten werden automatisch beim Besuch der Website durch IT-Systeme erfasst
            (z. B. Internetbrowser, Betriebssystem, Uhrzeit des Seitenaufrufs).
          </p>
          <p>
            <strong>Wofür nutzen wir Ihre Daten?</strong><br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
            Andere Daten können zur Beantwortung Ihrer Kontaktanfragen genutzt werden.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA gehostet.
            Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              vercel.com/legal/privacy-policy
            </a>.
          </p>

          <h2>3. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
            von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
            Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
            Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
            Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
            auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
            entfällt. Zwingende gesetzliche Bestimmungen — insbesondere Aufbewahrungsfristen — bleiben unberührt.
          </p>
          <p>
            Für den E-Mail-Versand nutzen wir den Dienst Resend (Resend Inc., 2261 Market Street #4990, San Francisco,
            CA 94114, USA). Ihre Daten werden dabei zur Zustellung der Nachricht verarbeitet. Weitere Informationen
            finden Sie unter{" "}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              resend.com/legal/privacy-policy
            </a>.
          </p>

          <h2>4. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf Berichtigung
            oder Löschung dieser Daten. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können
            Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
            bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </p>
          <p>
            Wenden Sie sich dazu jederzeit an:{" "}
            <a href="mailto:info@deploy-change.de">info@deploy-change.de</a>
          </p>

          <h2>5. Keine Cookies, kein Tracking</h2>
          <p>
            Diese Website verwendet keine Tracking-Cookies und kein Analytics-Tool. Es werden keine Daten
            an Dritte zu Werbezwecken weitergegeben.
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
