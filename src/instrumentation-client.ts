import { initBotId } from "botid/client/core";

/**
 * Registers the invisible bot challenge for the contact endpoint. The client
 * token is attached automatically to matching requests; checkBotId() verifies
 * it server-side in the route handler.
 */
initBotId({
  protect: [
    {
      path: "/api/contact",
      method: "POST",
    },
  ],
});
