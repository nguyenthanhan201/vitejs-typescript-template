import { useEffect } from "react";

export function useObserver(
  callback: (mutations: MutationRecord[]) => any,
  options: MutationObserverInit = {},
  id: string | null = null,
) {
  if (typeof window !== "undefined") {
    const targetNode = id ? document.getElementById(id) : document;
    const config: MutationObserverInit = { ...options };
    const observer = new MutationObserver(callback);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (targetNode) {
        observer.observe(targetNode, config);
        return () => {
          observer.disconnect();
        };
      }
    }, []);
    return observer;
  } else return null;
}
