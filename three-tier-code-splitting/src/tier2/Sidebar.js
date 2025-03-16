import React from "react";

/**
 * Sidebar - Tier 2 Component
 * This loads after initial paint to complete the visual display
 */
const Sidebar = () => {
  console.log("Tier 2 loaded - Sidebar rendered");

  return (
    <aside className="sidebar">
      <h3>Sidebar (Tier 2)</h3>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="sidebar-info">
        <p>This sidebar loaded after the initial paint as part of Tier 2.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
