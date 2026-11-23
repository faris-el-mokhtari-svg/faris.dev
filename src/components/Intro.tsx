// Orange panel that covers the homepage on first load, then wipes off
// diagonally. CSS-only; the inline script marks <html data-intro="seen">
// before paint so repeat visits in the same session skip it.
const once = `try{if(sessionStorage.getItem("dc-intro"))document.documentElement.dataset.intro="seen";else sessionStorage.setItem("dc-intro","1")}catch(e){}`;

export default function Intro() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: once }} />
      <div className="intro" aria-hidden="true">
        <div className="intro-inner mx-auto flex h-full max-w-[1600px] flex-col justify-between px-4 py-6 text-ink md:px-10 md:py-8">
          <span className="grid h-9 w-9 place-items-center bg-ink font-semibold tracking-tight text-orange">DC</span>
          <div className="flex items-end justify-between gap-6">
            <span className="text-5xl font-medium tracking-[-0.05em] md:text-8xl">Deploy Change</span>
            <span className="label hidden md:block">Software & Webdesign — Kiel, 54.32°N</span>
          </div>
        </div>
      </div>
    </>
  );
}
