/**
 * 1) In Network tab, first we see vendor bundle loaded.
 * 2) then we can see that the initial/main bundle is loaded,
 * 3) and then the chunks for Sidebar and MainContent are loaded asynchronously.
 * 
 * Flow:-
 * After vendor bundle is loaded, initial/main bundle is loaded and as sidebar and mainContent is dynamic import so the fallback will load first.
 
 * When browser request for next chunks, it will load the chunks for sidebar and mainContent and swap the fallback with the actual components.
 
 */

import React, { useEffect } from "react";
import { loadVisual } from "./loaders.js";
import "./styles.css";

// Tier 1: Critical UI (loads immediately).
// As theses are statically imported, Webpack keeps these in the initial/main bundle.
import Header from "./tier1/Header";
import Footer from "./tier1/Footer";

// Custom loading skeletons for Tier 2 components
const SidebarSkeleton = () => (
  <aside className="sidebar skeleton-sidebar">
    <div className="skeleton-sidebar-header"></div>
    <div className="skeleton-sidebar-nav">
      <div className="skeleton-nav-item"></div>
      <div className="skeleton-nav-item"></div>
      <div className="skeleton-nav-item"></div>
    </div>
    <div className="skeleton-sidebar-info"></div>
  </aside>
);

const MainContentSkeleton = () => (
  <div className="loading-skeleton">
    <div className="skeleton-header"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text"></div>

    <div className="skeleton-card">
      <div className="skeleton-card-header"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-list">
        <div className="skeleton-list-item"></div>
        <div className="skeleton-list-item"></div>
        <div className="skeleton-list-item"></div>
      </div>
    </div>
  </div>
);

// Tier 2: Visual Components (loads after initial paint)
// dynamic import() statements -> Webpack creates separate chunks for Sidebar and MainContent
const MainContent = loadVisual(
  import("./tier2/MainContent"),
  <MainContentSkeleton />
);
const Sidebar = loadVisual(import("./tier2/Sidebar"), <SidebarSkeleton />);

function App() {
  useEffect(() => {
    console.log("Tier 1 loaded - Critical UI is visible");
  }, []);

  return (
    <div className="app">
      {/* Tier 1: Loads immediately */}
      <Header />

      <div className="content">
        {/* Tier 2: Loads after initial paint */}
        <Sidebar.Component />

        <main className="main">
          <MainContent.Component />
        </main>
      </div>

      {/* Tier 1: Loads immediately */}
      <Footer />
    </div>
  );
}

export default App;
