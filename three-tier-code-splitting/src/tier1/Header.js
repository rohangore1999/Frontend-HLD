import React from "react";

const Header = () => {
  // Tier 1 button handler - loads immediately
  const handleTier1ButtonClick = () => {
    console.log("Tier 1 Button Clicked - Critical action performed");
    alert(
      "Tier 1 Button Clicked - This handler loaded immediately with the critical UI"
    );
  };

  return (
    <header className="header">
      <h1>3-Tier Code Splitting Demo</h1>
      <button className="tier1-button" onClick={handleTier1ButtonClick}>
        Tier 1 Button
      </button>
    </header>
  );
};

export default Header;
