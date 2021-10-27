    // include customer model
    const Customer = require("../models/customer.model.js");

    // Add and Save a new Customer method
    exports.create = (req, res) => {
      // Validate request
      if (!req.body) {
        res.status(400).send({
          message: "Error: Content can not be empty!"
        });
      }

      // Create a Customer
      const customer = new Customer({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        address: req.body.address,
        status: req.body.status
      });

      // Save Customer in the database
      Customer.create(customer, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Error while creating Customer."
          });
        else res.send(data);
      });
    };

    // get all Customers from the database.
    exports.findAll = (req, res) => {
      Customer.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Error while retrieving customers."
          });
        else res.send(data);
      });
    };

    // Find a single Customer with a customerId
    exports.findOne = (req, res) => {
      Customer.findById(req.params.customerId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Customer record not found ID: ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Customer ID " + req.params.customerId
            });
          }
        } else res.send(data);
      });
    };

    // Update a Customer records 
    exports.update = (req, res) => {
      // Validate Request
      if (!req.body) {
        res.status(400).send({
          message: "Error: Content can not be empty!"
        });
      }

      console.log(req.body);

      Customer.updateById(
        req.params.customerId,
        new Customer(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Customer record not found ID: ${req.params.customerId}.`
              });
            } else {
              res.status(500).send({
                message: "Error: updating Customer ID: " + req.params.customerId
              });
            }
          } else res.send(data);
        }
      );
    };

    // Delete a Customer with the specified customerId in the request
    exports.delete = (req, res) => {
      Customer.remove(req.params.customerId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Customer record not found ID: ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Customer ID: " + req.params.customerId
            });
          }
        } else res.send({ message: `Customer was deleted successfully!` });
      });
    };

    // Delete all Customers from the database.
    exports.deleteAll = (req, res) => {
      Customer.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Error occurred while removing all customers."
          });
        else res.send({ message: `Delete all Customers successfully!` });
      });
    };
