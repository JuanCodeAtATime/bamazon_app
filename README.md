# Bamazon_app featuring Node.js & MySQL

### Overview
The Bamazon **Node** application is sort of like **Amazon**, obviously not in depth or scope, but it does mimic an online shopping experience.  
Upon entering this application, it renders all the items available for sale on the command line.  A ```for loop``` is used to display the items by product id, name, and price.

### MySQL
These items are imported from the **MySQL** ```bamazon database``` ```products``` table as seen on the ```bamazonCustomer.js``` file.  

After displaying the items for sale, the ```inquirer.js``` command line utility greets the customer, then prompts the customer with the following two messages:
- *Please enter the ID# of item you'd like to purchase*
- *How many would you like to purchase?*

### Product Queries, Views, and Purchases
Once the customer has placed the order, the application checks the ```bamazon database``` (aka, "Store") to see if there is sufficient stock available to fulfill the customer's request.

If not, it lets the customer know that there isn't sufficient quantity.

If there is sufficient stock available, the application "fulfills the customer's order" and provides the total purchase price.

As expected, it updates the **MySQL** database to reflect the remaining quantity.

### Watch the Demo!
*Check out the video to see this Bamazon Store in action!*
https://drive.google.com/file/d/1HGLKx476YddnST6rvn1iHu0ngvbpXOC-/view
