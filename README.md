# Bamazon_app featuring Node.js & MySQL

***This is my Bamazon App!*** 

It's sort of like **Amazon** (obviously, not in depth nor scope), but it mimics an online shopping experience.  

Upon entering this **Node** application, it renders all the items available for sale on the command line, using a ```for loop``` to display the items by product id, name, and price.

These items are imported from the **MySQL** ```bamazon database``` ```products``` table as seen on the ```bamazonCustomer.js``` file.  

After displaying the items for sale, the ```inquirer.js``` command line utility greets the customer, then prompts the customer with the following two messages:
- *Please enter the ID# of item you'd like to purchase*
- *How many would you like to purchase?*

Once the customer has placed the order, the application checks the ```bamazon database``` (aka, "Store") to see if there is sufficient stock available to fulfill the customer's request.

If not, it lets the customer know that there isn't sufficient quantity.

If there is sufficient stock available, the application "fulfills the customer's order" and provides the total purchase price.

As expected, it updates the **MySQL** database to reflect the remaining quantity.


*Check out the video to see this Bamazon Store in action!*
https://drive.google.com/file/d/1HGLKx476YddnST6rvn1iHu0ngvbpXOC-/view
