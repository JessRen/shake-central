# Shake Central

### Homework Assignment for FullTime FullStack Track, Handlebars Unit

In this assignment, I create a food logs using:
- MySQL
- Node 
- Express (server)
- Handlebars
- a manual-type ORM (vs Sequelize.) 

This version is a Shake log.

### The perks are that it incorporates custom input as well as database persistence and retrieval.


This application enables users to input items they want, and after submitting this info, their text displays on the left side of the page, with a button to mark their order acceptance. After clicking on that food product's 'Devour It!'' button, that item moves to the right side and the application credits the item as 'devoured.' 


### We followed the MVC design pattern; we used Node and MySQL to query and route data in the app within the Server.js file, and we use Handlebars to generate our HTML, in the Views and Layout folders. Index.handlebars provides the content of the data-rendered page via {{{body}}}, and Main.handlebars exemplifies the templating modularity.


Features for future include:

- Conversion to Shake Recipes Central: shake title with a standard 4 or 5 ingredients.
- A Tried It button
- Unique User Ids for Item Consumption Record, with tables joined
