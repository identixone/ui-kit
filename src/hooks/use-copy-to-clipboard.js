import { useCopyToClipboard as ruUseCopyToClipboard } from "react-use";

function useCopyToClipboard(...args) {
  const isCopyAvailable =
    document.queryCommandSupported && document.queryCommandSupported("copy");

  const [state, copyToClipboard] = ruUseCopyToClipboard(...args);

  return [{ ...state, isCopyAvailable }, copyToClipboard];
}

export { useCopyToClipboard };
