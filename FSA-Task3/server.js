const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

// VERY IMPORTANT MIDDLEWARES
app.use(cors());
app.use(express.json());   // <-- REQUIRED
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// ROUTES
app.use("/api", authRoutes);

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
