    module.exports = app => {
      const customers = require("../controllers/customer.controller.js");

      // Add a new Customer in database
      app.post("/customer/create", customers.create);

      // Fetch all Customers for database
      app.get("/customer", customers.findAll);

      // Fetch data a single Customer form database
      app.get("/customer/:customerId", customers.findOne);

      // Update a Customer records
      app.put("/customer/update/:customerId", customers.update);

      // Delete a Customer records
      app.delete("/customer/delete/:customerId", customers.delete);

      // Delete All Customer records
      app.delete("/customer/delete", customers.deleteAll);
    };
