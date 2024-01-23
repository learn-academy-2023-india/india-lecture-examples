## Active Record Migrations 1/22/24 India

## Rails Philosophy:
- Don't Repeat Yourself (DRY): remove redundant code, use of reusable code, and dynamic concepts
- Convention Over Configuration: quicker access to an application but not as much control over the build

[Ruby on Rails Guides](https://guides.rubyonrails.org/)

## Migrations:
- a tracking system that will provide version control, reproducibility, and data integrity
  - version control: track of changes in the structure of the database
  - reproducibility: step-by-step guide on how to create the changes
  - data integrity: data remaining consistent and accurate

## To create a rails app on desktop:
***NOTE: We will be using the rails as a temporary database. We will not be storing this application.***  
`$ cd Desktop`    
`$ rails new active-record-migrations -d postgresql -T`   
`$ cd active-record-migrations`  
`$ code .`  
`$ rails db:create`  
`$ rails s`

## To create markdown file for notes:
***NOTE: We will be creating documentation of the commands and necessary code to accomplish the task assigned by the challenges. The documentation will be stored on a markdown file inside the github repo.***   
`$ git status`  
`$ git pull origin main`  
`$ git checkout -b migrations`  
`$ touch active-record-migrations.md`  
`$ code .`  

## To create a rails model:
`$ rails generate model IndiaCommunity name:string service:string`

## To save changes to the database schema:
`$ rails db:migrate`

## To interact with the database:
`$ rails console`  
`$ rails c`

## Perform CRUD Actions on the rails console
## Create
`> IndiaCommunity.create(name: 'Charlean', service: 'Aunty')`
## Read
`> IndiaCommunity.all`
## Update
### where method chained with the update method
`> IndiaCommunity.where(name: 'Mike & Jimmy').update.(name: 'Itchy & Scratchy')`
### store where method in a variable to locate the instance
`> scratch = IndiaCommunity.where(name: 'Mike & Jimmy')`
### update the instance
`> scratch.update(name: 'Itchy & Scratchy')`

## Delete
`> aunty = IndiaCommunity.last`
`> aunty.destroy`

## To leave the rails console
`> exit`

## Database Migrations
`$ rails generate migration AddColumnPrice`  
`$ rails g migration AddColumnPrice`

## Change Definition
- add code for change definition within the change method of the migration file
```rb
class AddColumnPrice < ActiveRecord::Migration[7.0]
  def change
    # change definition
    # add_column :table_name, :column_name, :datatype
    add_column :india_communities, :price, :text
  end
end
```
- save changes to the database schema  
`$ rails db:migrate`

## Update nil entries
`> time = IndiaCommunity.where(name: 'Sakaa')`  
`> time.update(price: '30% of left right center winnings')`

## Modifying column names
- Generate a migration
`$ rails g migration change_price_to_price_unit`  
`$ rails g migration ChangePriceToPriceUnit`
- Add change definition to change method on migration file
- Save it to the database schema
- Modify the data entry if applicable

## Ice box
- maintain the database instances in ascending or sequential order based on the primary key   
**Solved**
### Approach submitted by Full Stack Web Developer Jeremie `.order(:id)`  
`> IndiaCommunity.order(:id)`    
***NOTE: The order method sorts all the records in ascending order based on the id column which stores the primary key automatically assign by rails.***
