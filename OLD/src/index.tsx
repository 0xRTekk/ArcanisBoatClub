import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";

i18next.use(LngDetector).init({
  interpolation: { escapeValue: false }, // React already does escaping
  // lng: "en", // language to use
  fallbackLng: "en",
  resources: {
    fr: {
      common: common_fr, // 'common' is our custom namespace
    },
    en: {
      common: common_en, // 'common' is our custom namespace
    },
  },
  detection: {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",

    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();