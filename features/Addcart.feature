Feature: Add a product to a cart in Amazon.in

   Scenario: Add redmi mobile to cart
      Given I navigate to Amazon.in
      And search product "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek" and select
      And add product to cart
      And verify product "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek" is added properly in cart
