var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Daisy2990!",
    database: "bamazon"
});

//Establishing connection
connection.connect(function (err) {

    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    userPrompt();

});


function userPrompt() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
            console.log("\nID#: " + results[i].id + " | " + results[i].product_name + " | " + " Inventory Qty: " + results[i].stock_quantity + " | " + " Price: $" + results[i].price);
        }
    });
    inquirer
        .prompt([
            {
                name: "choice",
                type: "input",
                message: "=====================================================================" +
                    "\nWelcome to Juan's Bamazon Store! Please enter the ID# of item you'd like to purchase =)\n\n",
                validate: function (value) {
                    if (isNaN(value) == false) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?",
                validate: function (value) {
                    if (isNaN(value) == false) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
        .then(function (answer) {

            connection.query('SELECT * FROM products WHERE id=' + answer.choice, function (err, results) {
                if (err) throw err;

                if (results[0].stock_quantity - answer.quantity >= 0) {
                    console.log("Today's your day!  Bamazon has suffiecient inventory of product ID# " + answer.choice + " to fulfill your order!");
                    console.log("Your purchase total is $" + results[0].price * answer.quantity);
                    console.log("Thank You for your purchase!");
                    connection.query(
                        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id=?", [answer.quantity, answer.choice],
                        function (err, results) {
                            if (err) throw err;
                            nextStep();
                        });

                }

                else {
                    console.log("=======================================\nAww Man!" +
                        "\nInsufficient Stock Alert!  Please re-check the Inventory Qty and re-try your order.\n" +
                        "=======================================");
                    nextStep();

                }
            });
        });

    function nextStep() {
        inquirer
            .prompt({
                name: "action",
                type: "rawlist",
                message: "What would you like to do now?",
                choices: [
                    "Keep Shopping",
                    "Take another look at the products available",
                    "Complete my order"
                ]
            })
            .then(function (answer) {
                switch (answer.action) {
                    case "Keep Shopping":
                        userPrompt();
                        break;

                    case "Take another look at the products available":
                        userPrompt();
                        break;

                    case "Complete my order":
                        console.log("******************************************************************")
                        console.log("Thank you for shopping at Juan's Bamazon Store.  Have a great day!")
                        console.log("******************************************************************")
                        break;

                }


            })
    }
}



