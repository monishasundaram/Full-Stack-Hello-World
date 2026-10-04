const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World from the backend!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));