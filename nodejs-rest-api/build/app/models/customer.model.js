    const sql = require("./db.js");
    // constructor
    const Customer = function(customer) {
      this.first_name = customer.first_name;
      this.last_name = customer.last_name;
      this.email = customer.email;
      this.address = customer.address;
      this.status = customer.status;
    };

    // create new Customer
    Customer.create = (newCustomer, result) => {
      sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        console.log("created customer: ", { id: res.insertId, ...newCustomer });
        result(null, { id: res.insertId, ...newCustomer });
      });
    };
    // get single Customer
    Customer.findById = (customerId, result) => {
      sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        if (res.length) {
          console.log("found customer: ", res[0]);
          result(null, res[0]);
          return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
      });
    };

    // get all Customers
    Customer.getAll = result => {
      sql.query("SELECT * FROM customers", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        console.log("customers: ", res);
        result(null, res);
      });
    };

    // update Customer
    Customer.updateById = (id, customer, result) => {
      sql.query(
        "UPDATE customers SET first_name = ?, last_name = ?, email = ?, address = ?, status = ? WHERE id = ?",
        [customer.first_name, customer.last_name, customer.email, customer.address, customer.status, id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }

          if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
          }

          console.log("updated customer: ", { id: id, ...customer });
          result(null, { id: id, ...customer });
        }
      );
    };

    // delete Customer
    Customer.remove = (id, result) => {
      sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("deleted customer with id: ", id);
        result(null, res);
      });
    };


    // delete all Customer
    Customer.removeAll = result => {
      sql.query("DELETE FROM customers", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        console.log(`deleted ${res.affectedRows} customers`);
        result(null, res);
      });
    };

    module.exports = Customer;
