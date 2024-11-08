const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Serve static files from src directory
app.use(express.static(path.join(__dirname, "../src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
