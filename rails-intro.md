## Ruby on Rails Intro 1/11/24

## Ruby on Rails:
- open-source web application framework, normally associated with backend development, works with databases
- created by DHH
- "Convention over Configuration": developer friendly, comes packaged with all the files, folders, an necessary dependencies to have a functional web application

## MVC (Model View Controller)
- architectural pattern to accept requests from a server and return a response
- model: represents the structure of your data and logic in the database
- view: defines how that data is presented to the user
- controller: interacts with the model and views by handling the user requests and specifying what data or view to return to the user

## Create a Rails App
***NOTE: For these challenges, we will create apps locally only.***
- $ `rails new birthday_menu -d postgresql -T`
- Create a new rails app: `rails new`
- Name of the rails app in snake_case: `birthday_menu`
- Remove the SQLite database and use postgresql: `-d postgresql`
- Remove the Minitest because we will use RSPEC: `-T`

## Create a database
- $ `rails db:create`
- Database command with action after the colon

## postgres terminal commands
- to access postgres: $ `psql`
- to see the list of databases: $ `\l`
- to exit the list: $ `q`
- to exit postgres: $ `exit` 

# Use local machine as a server
- $ `rails server` or `rails s`

## Helpful commands
- To open an additional terminal tab: press the following keys `command + T`
- To delete the rails app:
    - Stop the server: `control + C` keys
    - Drop the database: $ `rails db:drop`
    - Go up a level: $ `cd ..`
    - Delete the application: $ `rm -rf <app_name>`

## File paths within the application
- model: app/models
- view: app/views
- controller: app/controllers
- database: db
- a guide to specific controller for a request on the browser: config/routes.rb
