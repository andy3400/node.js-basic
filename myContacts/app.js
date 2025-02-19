const express = require('express');
const dbConnect = require('./config/dbConnect');
const methodOverride = require('method-override');
const app = express();

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", "./views");

// Static files middleware
app.use(express.static("./public"));

// Use method-override for supporting PUT and DELETE methods in forms
app.use(methodOverride("_method"));

// JSON and URL-encoded data parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
dbConnect();

// Routes
app.use("/contacts", require('./routes/ContactsRoutes'));

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Handle server errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Server error");
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});