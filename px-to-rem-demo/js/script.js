// Import the CSS file so Webpack can process it
import "../css/style.css";

// This script demonstrates accessibility features enabled by using rem units

document.addEventListener("DOMContentLoaded", function () {
  // Get the toggle button
  const fontSizeToggle = document.getElementById("font-size-toggle");

  // Track the current font size state
  let largeFont = false;

  // Add click event handler to toggle font size
  fontSizeToggle.addEventListener("click", function () {
    // Toggle the font size by changing the root font size
    // This works because we're using rem units in our CSS
    if (largeFont) {
      // Reset to default font size
      document.documentElement.style.fontSize = "16px";
      fontSizeToggle.textContent = "Enable Larger Text";
    } else {
      // Increase font size for better readability
      document.documentElement.style.fontSize = "20px";
      fontSizeToggle.textContent = "Reset Text Size";
    }

    // Toggle the state
    largeFont = !largeFont;

    console.log(`Font size is now ${document.documentElement.style.fontSize}`);
  });

  // Add a note about what's happening
  console.log("This demo shows how rem units enable better accessibility.");
  console.log(
    "The original CSS uses pixel values, but PostCSS converts them to rem units."
  );
  console.log(
    "This allows the user to scale the entire UI by changing just the root font size."
  );
});
