import { useState } from "react";

const isCopyAvailable =
  document.queryCommandSupported && document.queryCommandSupported("copy");

function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text) => {
    setIsCopied(false);

    if (typeof text == "string" || typeof text == "number") {
      const element = document.createElement("textarea"); // create textarea HTML element
      element.value = text; // add the text to be copied to the element
      document.body.appendChild(element); // add element to DOM
      element.select(); // select the text
      document.execCommand("copy"); // execute copy command
      document.body.removeChild(element); // remove element from DOM
    } else {
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a valid string or number.`
      );
    }

    setTimeout(() => {
      setIsCopied(true);
    });
  };

  return [{ isCopied, isCopyAvailable }, copyToClipboard];
}

export { useCopyToClipboard };
