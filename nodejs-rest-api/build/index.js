const express = require("express");
const dotenv = require('dotenv');
const app = express();

dotenv.config();
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Simple Node.js Rest APIs with Express & MySQL." });
});

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
const PORT = Number(process.env.RESTAPI_PORT || process.env.PORT || 3000);


app.listen(PORT, () => {
  console.log('Server is running on PORT .');
});
