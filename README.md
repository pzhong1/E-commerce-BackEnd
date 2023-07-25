
# A walkthrough video demonstrating the functionality of the application 
https://drive.google.com/file/d/1LHHO_91FdFTnrqXerMcdrrXehoivQlI_/view


# The URL of the GitHub repository. 
https://github.com/pzhong1/E-commerce-BackEnd.git


# About
Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes  


# TASK
build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.  

# requirements
install Mysql2, sequelize and dotenv package 
set up sql database 
1. mysql -u root -p
2. create ecommerce_db database for this project
3. source schema.sql

# User Story
AS A manager at an internet retail company  
I WANT a back end for my e-commerce website that uses the latest technologies  
SO THAT my company can compete with other e-commerce companies  

# Acceptance Criteria
GIVEN a functional Express.js API  
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file  
THEN I am able to connect to a database using Sequelize  
WHEN I enter schema and seed commands  
THEN a development database is created and is seeded with test data  
WHEN I enter the command to invoke the application  
THEN my server is started and the Sequelize models are synced to the MySQL database  
WHEN I open API GET routes in Insomnia Core for categories, products, or tags  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
THEN I am able to successfully create, update, and delete data in my database  


# Getting Started
You’ll need to use the MySQL2Links to an external site. and SequelizeLinks to an external site. packages to connect your Express.js API to a MySQL database and the dotenv packageLinks to an external site. to use environment variables to store sensitive data, like your MySQL username, password, and database name.

Use the schema.sql file in the db folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.

# Database Models
Your database should contain the following four models, including the requirements listed for each model:

Category

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

category_name

String

Doesn't allow null values

Product

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

product_name

String

Doesn't allow null values

price

Decimal

Doesn't allow null values

Validates that the value is a decimal

stock

Integer

Doesn't allow null values

Set a default value of 10

Validates that the value is numeric

category_id

Integer

References the category model's id

Tag

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

tag_name

String

ProductTag

id

Integer

Doesn't allow null values

Set as primary key

Uses auto increment

product_id

Integer

References the product model's id

tag_id

Integer

References the tag model's id

# Associations
You'll need to execute association methods on your Sequelize models to create the following relationships between them:

Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

Category has many Product models.

Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

Tag belongs to many Product models.

# example img
![image](https://github.com/pzhong1/E-commerce-BackEnd/assets/123424361/b07862c4-3321-4a74-a378-7961f80d12ec)

<img width="1440" alt="Screenshot 2023-07-24 at 1 45 04 PM" src="https://github.com/pzhong1/E-commerce-BackEnd/assets/123424361/f451498a-aa27-4462-b666-196a150cb546">

<img width="1440" alt="Screenshot 2023-07-24 at 1 45 23 PM" src="https://github.com/pzhong1/E-commerce-BackEnd/assets/123424361/2abc204e-1cf0-4384-8f35-fce8946c4bb3">

