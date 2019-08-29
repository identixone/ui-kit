import * as Sentry from "@sentry/browser";
import { RewriteFrames } from "@sentry/integrations";

const { SENTRY_DSN, VERSION, ENV } = process.env;

export default function catchBrowserError() {
  Sentry.init({
    dsn: SENTRY_DSN,
    release: VERSION,
    integrations: [new RewriteFrames()],
    environment: ENV,
  });

  window.onerror = function(msg, url, lineNo, columnNo, error) {
    Sentry.captureException(error);

    return true;
  };
}
