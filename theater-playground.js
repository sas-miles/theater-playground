import "https://cdn.jsdelivr.net/npm/@theatre/browser-bundles@0.5.0-insiders.88df1ef/dist/core-and-studio.js";

// We can now access Theatre.core and Theatre.studio from here
const { core, studio } = Theatre;

studio.initialize(); // Start the Theatre.js UI

console.log("Theatre.js code is running!");
