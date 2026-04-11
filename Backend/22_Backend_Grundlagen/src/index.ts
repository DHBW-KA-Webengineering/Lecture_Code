import appShell from "../public/index.html";
import { serve } from "bun";

serve({
  routes: {
    "/": appShell,
  },
  port: 3002,
  development: true,
});
