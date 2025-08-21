"use client";
import React, { ReactNode } from "react";
import { useLazyComponent } from "@/hooks/useIntersectionObserver";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = "",
  fallback = null,
}) => {
  const { elementRef, shouldRender } = useLazyComponent();

  return (
    <div ref={elementRef} className={className}>
      {shouldRender ? children : fallback}
    </div>
  );
};

export default LazySection;
