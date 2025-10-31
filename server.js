const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Default route (renders form)
app.get("/", (req, res) => {
  res.render("index", { user: null });
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { username, email } = req.body;
  res.render("index", { user: { username, email } });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
