import "prismjs";
import "./static/css/prism-vsc-dark-plus.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-markup";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";
import "./src/styles/global-vanilla.css.ts";
import { copyButton } from "./src/styles/prism-custom.css.ts";
import type { GatsbyBrowser } from "gatsby";

export const onInitialClientRender: GatsbyBrowser["onInitialClientRender"] = () => {
  const blocks = document.querySelectorAll("pre code");

  blocks.forEach((block) => {
    const parent = block.parentElement as HTMLElement | null;
    if (!parent) return;

    if (parent.querySelector("button")) return;

    const button: HTMLButtonElement = document.createElement("button");
    button.innerText = "Copier";
    button.className = copyButton;

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(block.textContent ?? "");
        button.innerText = "Copié !";
        setTimeout(() => (button.innerText = "Copier"), 2000);
      } catch (err) {
        console.error("Erreur lors de la copie :", err);
      }
    });

    parent.style.position = "relative";
    parent.appendChild(button);
  });
};
