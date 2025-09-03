const express = require("express");
const app = express();
const path = require("path");

// Render ka PORT environment se milega
const PORT = process.env.PORT || 3000;

// Public folder serve karne ke liye
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
