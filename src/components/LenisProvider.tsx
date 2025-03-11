"use client";
import { useEffect, ReactNode } from "react";
import useLenis from "../components/lenis";

function useScript(src: string) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.useServiceCore = "true";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
}

interface LenisProviderProps {
  children: ReactNode;
}

const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  useScript("https://static.elfsight.com/platform/platform.js");
  useLenis();

  return <>{children}</>;
};

export default LenisProvider;