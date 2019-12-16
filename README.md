# Bamazon_app featuring Node.js & MySQL

***This is my Bamazon App!*** 

It's sort of like Amazon (obviously, not in depth and scope), but it mimics an online shopping experience.  

Upon entering the application, it renders all the items available for sale. These items are imported from the '<MySQL>' bamazon database as seen on the '<bamazonCustomer.js>' file.  The items for sale are from the MySQL '<products>' table and includes the product ids, names, and prices of items for sale.

Upon opening, it prompts users with two messages:
- It asks for the ID of the product the customer wants to buy.
- It also asks for the quantity of the requested item.

Once the customer has placed the order, the application checks if the store has sufficient stock available to fulfill the customer's request.

If not, it lets the customer know that there isn't sufficient quantity.

If the store does have enough of the product, it fulfills the customer's order and provides the total purchase price.

As expected, it updates the MySQL database to reflect the remaining quantity.


***Check out the video to see this Bamazon Store in action!***
https://drive.google.com/file/d/1HGLKx476YddnST6rvn1iHu0ngvbpXOC-/view
