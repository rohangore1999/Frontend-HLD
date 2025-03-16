import React from "react";

/**
 * MainContent - Tier 2 Component
 * This loads after initial paint to complete the visual display
 */
const MainContent = () => {
  console.log("Tier 2 loaded - MainContent rendered");

  // Tier 2 button handler - loads after initial paint
  const handleTier2ButtonClick = () => {
    console.log("Tier 2 Button Clicked - Secondary action performed");
    alert(
      "Tier 2 Button Clicked - This handler loaded after the initial paint"
    );
  };

  return (
    <div className="main-content">
      <h2>Main Content (Tier 2)</h2>
      <p>This component loaded after the initial paint.</p>
      <p>In a real app, this would contain the primary content of your page.</p>

      <button className="tier2-button" onClick={handleTier2ButtonClick}>
        Tier 2 Button
      </button>

      <div className="card">
        <h3>How It Works</h3>
        <p>The three-tier approach splits JavaScript into priority levels:</p>
        <ul>
          <li>
            <strong>Tier 1:</strong> Critical UI (loads immediately)
          </li>
          <li>
            <strong>Tier 2:</strong> Visual components (loads after initial
            paint)
          </li>
          <li>
            <strong>Tier 3:</strong> Background features (loads after display is
            complete)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
