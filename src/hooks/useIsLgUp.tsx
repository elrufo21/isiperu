"use client";
import { useEffect, useState } from "react";

export function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => setIsLgUp(e.matches);

    // valor inicial
    setIsLgUp(mq.matches);

    // suscripción (compatible con navegadores viejos)
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  return isLgUp;
}
