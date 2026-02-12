import { createHighlighterCore } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import lightTheme from "@shikijs/themes/one-light";
import darkTheme from "@shikijs/themes/one-dark-pro";
import tsx from "@shikijs/langs/tsx";

const highlighter = await createHighlighterCore({
  themes: [lightTheme, darkTheme],
  langs: [tsx],
  engine: createJavaScriptRegexEngine(),
});

const html = highlighter.codeToHtml("const x = 1", {
  lang: "tsx",
  themes: {
    light: "one-light",
    dark: "one-dark-pro",
  },
});

console.log(html);
