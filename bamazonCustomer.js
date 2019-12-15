var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
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
        console.log(results);
        // connection.end();
        // once you have the items, prompt the user for which they'd like to quantity on
        inquirer
            .prompt([
                {
                    name: "choice",
                    type: "input",
                    message: "What's the ID of the product you want to buy?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase?"
                }
            ])

            .then(function (answer) {
                console.log("The product ID I entered: " + answer.choice)
                console.log("The product quantity I ordered: " + answer.quantity)
                connection.query(
                    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id=?", [answer.quantity, answer.choice],
                    function (err, results) {
                        if (err) throw err;
                        for (var i = 0; i < results.length; i++) {
                            console.log(results[i].id + " | " + results[i].product_name + " | " + results[i].stock_quantity + " | " + results[i].price);
                        }
                        console.log(results);
                        userPrompt();

                    }
                )
            }
            );
    });

}



