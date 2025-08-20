Feature: Add a product to a cart in Amazon.in

   Scenario: Add iPhone 15 to cart
      Given I navigate to Amazon.in
      And search product "iPhone 15 (128 GB) - Blue" and select
      And add product to cart
      And verify product "iPhone 15 (128 GB) - Blue" is added properly in cart
