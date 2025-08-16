import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-typescript";
import { copyButton } from "./src/styles/prism-custom.css.ts";
import "./src/styles/global-vanilla.css.ts";

export const onInitialClientRender = () => {
  document.querySelectorAll("pre code").forEach((block) => {
    if (block.parentNode.querySelector("button")) return;

    const button = document.createElement("button");
    button.innerText = "Copier";
    button.className = copyButton; // classe vanilla-extract compilée en hash
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(block.innerText).then(() => {
        button.innerText = "Copié !";
        setTimeout(() => (button.innerText = "Copier"), 2000);
      });
    });
    block.parentNode.appendChild(button);
  });
};
