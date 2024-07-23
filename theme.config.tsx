import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Head } from "./components/Head";
import { useNextSeoProps } from "./config/useNextSeoProps";
import { Logo } from "./components/Logo";

const config: DocsThemeConfig = {
  logo: "Rockwell Automation",
  project: {
    link: "https://github.com/mkrtchian/reading-notes",
  },
  docsRepositoryBase: "https://github.com/mkrtchian/reading-notes/blob/main",
  footer: {
    text: "Search Demo",
  },
  head: Head,
  useNextSeoProps,
  i18n: [],
};

export default config;
