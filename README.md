# Bamazon_app featuring Node.js & MySQL

***This is my Bamazon App!*** 

It's sort of like **Amazon** (obviously, not in depth nor scope), but it mimics an online shopping experience.  

Upon entering this **Node** application, it renders all the items available for sale on the command line. 

These items are imported from the **MySQL** ```bamazon database``` as seen on the ```bamazonCustomer.js``` file.  

The items for sale are from the ```bamazon.products``` table.  A ```for loop``` is used to display these items on the command line by product id, name, and price.

After displaying the items for sale, the ```inquirer.js``` command line utility greets the customer, then prompts the customer with the following two messages:
- *Please enter the ID# of item you'd like to purchase*
- *How many would you like to purchase?*

Once the customer has placed the order, the application checks if the store has sufficient stock available to fulfill the customer's request.

If not, it lets the customer know that there isn't sufficient quantity.

If the store does have enough of the product, it fulfills the customer's order and provides the total purchase price.

As expected, it updates the **MySQL** database to reflect the remaining quantity.


*Check out the video to see this Bamazon Store in action!*
https://drive.google.com/file/d/1HGLKx476YddnST6rvn1iHu0ngvbpXOC-/view
