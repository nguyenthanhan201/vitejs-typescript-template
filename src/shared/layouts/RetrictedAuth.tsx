import { isEmpty } from "lodash";
import { useEffect } from "react";

export default function RetrictedAuth({ children }: { children: JSX.Element }) {
  useEffect(() => {
    if (isEmpty(true)) {
      window.location.href = "/";
    }
  }, []);

  return children;
}
