import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://799852ea79b070a00d1f55f7b2564608@o4509094998704128.ingest.us.sentry.io/4509095005257728",
  integrations: [
    Sentry.browserTracingIntegration(),

    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect, //here we informed that we are using react
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const SentryApp = Sentry.withProfiler(App);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
