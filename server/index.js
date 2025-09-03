// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("✅ Trade Finder Clone live on Render!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
