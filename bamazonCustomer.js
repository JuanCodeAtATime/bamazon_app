var inquirer = require("inquirer");
var mysql = require("mysql");


// Establishing connection with SQL database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port;
    port: 3306,

    // My username
    user: "root",

    // My password
    password: "Daisy2990!",
    database: "bamazon"
});

//Connecting to the MySQL server and SQL (bamazon) database
//Console.logging connection ID to confirm connection
//Invoking userPrompt function at the start of the connection which displays
//the products available and prompts User with two messages
connection.connect(function (err) {

    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    userPrompt();

});

//userPrompt() features a for loop to display the products table in a neat format
//The two inquirer.prompt messages also have a validation feature which prevents the User from entering 
//any key that is not a number 
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
            //Connection.query selects the User's ID (answer.choice) from the products table in the SQL bamazon db
            connection.query('SELECT * FROM products WHERE id=' + answer.choice, function (err, results) {
                if (err) throw err;

                //This conditional statement checks to see if the table's stock quantity is greater than or equal to 
                //the User's requested item (answer.choice) and quantity (answer.quanity).
                //If so, the order goes through as well as the transaction $total price.


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
                //If not, the User is prompted to re-try the order
                else {
                    console.log("=======================================\nAww Man!" +
                        "\nInsufficient Stock Alert!  Please re-check the Inventory Qty and re-try your order.\n" +
                        "=======================================");
                    nextStep();

                }
            });
        });

    //The nextStep function was created to provide closure (thank you/goodbye greeting) and/or a next step 
    //based on the User's response
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



