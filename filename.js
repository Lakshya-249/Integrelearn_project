const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3001; // Choose any available port

app.use(cors()); // Enable CORS for all routes

// Endpoint to fetch file names in a directory
app.get("/api/files", (req, res) => {
  const directoryPath = req.query.directory;
  try {
    const files = fs.readdirSync(directoryPath);
    res.json({ files });
  } catch (error) {
    res.status(500).json({ error: "Error reading directory" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
