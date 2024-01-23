## Active Record Associations 1/23/24 India

1. Create Rails App on Desktop  
`cd to your Desktop`  
`$ rails new associations -d postgresql -T`    
`cd into the project`    
`$ rails db:create`    
`Open the project in a text editor`    
`$ rails s`    

2. Place notes in ReadMe of rails app

3. Generate a model which will create a migration file (db/migrate/20240123175240_create_code_wranglers.rb) and a model file (app/models/code_wrangler.rb)  
`$ rails g model CodeWrangler department:string`  

4. Save the changes to the database schema  
`$ rails db:migrate`

5. Enter the rails console to interact with the database  
`$ rails c`  
`> CodeWrangler.create(department: 'Admin')`  
`> exit`

6. Generate a model for the second table  
`$ rails g model Developer name:string position:string code_wrangler_id:integer`  
`$ rails db:migrate`

7. Establish associations for each model in apps/model
```rb
# model that has many associations with another model
class CodeWrangler < ApplicationRecord
  has_many :developers
end

# model with the foreign key
class Developer < ApplicationRecord
  belongs_to :code_wrangler
end
```

8. Interact with database   
`$ rails c`  
- Locate the instance from the first model  
`> hr = CodeWrangler.where(department: 'HR')`    
***NOTE: Pay attention to the datatype of the active record query***    
- Because where method returns an array, we need to specify which value in the array is receiving the association.      
`> hr[0].developers.create(name: 'Xavier', position: 'contract')`  
- To see all the instances associated with an entry    
`> hr[0].developers`  

## Icebox
- how to clear the rails console (similar to the terminal)

