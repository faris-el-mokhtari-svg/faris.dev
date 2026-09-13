import { initBotId } from "botid/client/core";

/**
 * Registers the invisible bot challenge for the contact endpoint.
 *
 * Production only: BotID's challenge script is served through a proxy rewrite
 * on our own domain. Behind Deployment Protection that proxy answers with the
 * Vercel SSO login page instead of JavaScript, so the client never finishes
 * initialising and the fetch wrapper it installs never settles — which silently
 * breaks every form submit on preview URLs.
 */
if (window.location.hostname.endsWith("deploy-change.de")) {
  initBotId({
    protect: [
      {
        path: "/api/contact",
        method: "POST",
      },
    ],
  });
}
