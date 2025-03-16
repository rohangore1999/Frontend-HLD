/**
 * Three-Tier UI Rendering System
 *
 * Tier 1: Critical UI - Use regular imports (loads immediately)
 * Tier 2: Secondary UI - Use loadVisual() (loads after initial paint)
 * Tier 3: Background Features - Will be implemented in future updates (it can be logging, analytics, etc.)
 */
import React from "react";

export function loadVisual(importPromise, customFallback = null) {
  return {
    // React component that handles loading state
    Component: (props) => {
      const LazyComponent = React.lazy(() => importPromise);

      return (
        <React.Suspense
          fallback={
            customFallback || (
              <div className="loading-placeholder">Loading...</div>
            )
          }
        >
          <LazyComponent {...props} />
        </React.Suspense>
      );
    },
  };
}
