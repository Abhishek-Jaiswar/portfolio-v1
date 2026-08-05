"use client";

import Preloader from "@/components/preloader";
import { AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

export default function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader
            key="preloader"
            onFinish={() => setLoading(false)}
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}