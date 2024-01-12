## Active Record Into 1/11/24

- model class: database layer
- generate commands: rails commands to create the applicable components for the rails application (models, views, controllers, migrations), rails does all the heavy lifting of creating the components by providing all the necessary dependencies and configuration
- ORM (Object Relational Mapping): allows us to interact with the databases using OOP, performs the same actions as SQL using ruby methods 
- Active Record: ORM in rails
- migrations: tracks the changes made to the database by storing in a migration file
- database schema: stores the current status of the database attributes and their datatype in a table
- rails console: a shell, Interactive Ruby (IRB) environment that allows interaction with the database through Active Record queries 
- primary key: a unique identifier that Rails automatically assign to database instances, normally an integer

## naming conventions
- Model class: singular and PascalCase
- Database table: plural and snake_case
- File or folder names: snake_case

## Generate a model
- $ `rails generate model Menu chef:string dish:string`
- Generate command for a model: `rails generate model` or `rails g model`
- Name of model in PascalCase: `Menu`
- Attributes: written in snake_case, multiple attributes are separated by a space
    - chef attribute that will have a string value: `chef:string`
    - dish attribute that will have a string value: `dish:string`

- Running this command creates a model file (app/models/menu.rb) and a migration file (db/migrate/20240111213607_create_menus.rb)

- To save changes to the database: $ `rails db:migrate`

- Running this commands saves the status of the database in the schema (db/schema.rb)

## symbols in front of commands
Not meant to be part of the command. Just stating where it should be executed.
- `$`: terminal command
- `>`: rails console command
- `#`: psql shell command

## Active record queries
- To enter rails console: $ `rails console` or `rails c`
- To exit rails console:   
`> exit`
- The model name will be referenced with all the query methods

### Create
- to create a new instance in the database, use the create method with the attributes and their values as key:value pairs separated by commas
`> Menu.create(chef: 'Puamaeole', dish: 'ManaPua')`
```bash
# Active Record
#<Menu:0x0000000107bc84c0
 id: 1,
 chef: "Puamaeole",
 dish: "ManaPua",
 created_at: Thu, 11 Jan 2024 22:01:50.891670000 UTC +00:00,
 updated_at: Thu, 11 Jan 2024 22:01:50.891670000 UTC +00:00>
```

### Read
- all method allows retrieval of all the database instances instances, returns the instances inside an array   
`> Menu.all`
```bash
# Active Record
[#<Menu:0x00000001080ece60
  id: 1,
  chef: "Puamaeole",
  dish: "ManaPua",
  created_at: Thu, 11 Jan 2024 22:01:50.891670000 UTC +00:00,
  updated_at: Thu, 11 Jan 2024 22:01:50.891670000 UTC +00:00>] 
```

- to retrieve one instance
- find method takes the primary key (id) as an argument and returns the instance  
`> Menu.find 4`
```bash
# Active Record
#<Menu:0x0000000108208498
 id: 4,
 chef: "Byter",
 dish: "cornbread",
 created_at: Thu, 11 Jan 2024 22:23:46.431987000 UTC +00:00,
 updated_at: Thu, 11 Jan 2024 22:23:46.431987000 UTC +00:00>
```

- where methods takes the key:value as an argument and returns the instance(s) inside an array  
`> Menu.where(dish: 'cornbread')`
```bash
# Active Record
[#<Menu:0x00000001081c6b88
  id: 4,
  chef: "Byter",
  dish: "cornbread",
  created_at: Thu, 11 Jan 2024 22:23:46.431987000 UTC +00:00,
  updated_at: Thu, 11 Jan 2024 22:23:46.431987000 UTC +00:00>] 
3.2.0 :016 > Menu.find 4
  Menu Load (1.3ms)  SELECT "menus".* FROM "menus" WHERE "menus"."id" = $1 LIMIT $2  [["id", 4], ["LIMIT", 1]]
```

### Update
1. Retrieve the instance, store in a variable  
`> bread = Menu.find 4`  
`> bread`
```bash
# Active Record
#<Menu:0x000000010812ba48
  id: 4,
  chef: "Byter",
  dish: "cornbread",
  created_at: Thu, 11 Jan 2024 22:23:46.431987000 UTC +00:00,
  updated_at: Thu, 11 Jan 2024 22:40:25.320432000 UTC +00:00>
```

2. Update the instance
- update method allows the value to be changed and saves the change to the database
bread.update(dish: 'expensive cornbread')
```bash
# Active Record
#<Menu:0x000000010812ba48
  id: 4,
  chef: "Byter",
  dish: "expensive cornbread",
  created_at: Thu, 11 Jan 2024 22:23:46.431987000 UTC +00:00,
  updated_at: Thu, 11 Jan 2024 22:40:25.320432000 UTC +00:00>
```

### Delete
1. Retrieve the instance, store in a variable  
`> kala = Menu.where(chef: 'Kala')`
```bash
# Active Record
[#<Menu:0x00000001081c1cc8
  id: 3,
  chef: "Kala",
  dish: "jollof rice",
  created_at: Thu, 11 Jan 2024 22:21:27.956047000 UTC +00:00,
  updated_at: Thu, 11 Jan 2024 22:21:27.956047000 UTC +00:00>,
 #<Menu:0x00000001081c1b88
  id: 5,
  chef: "Kala",
  dish: "shrimp gravy",
  created_at: Thu, 11 Jan 2024 22:48:12.626716000 UTC +00:00,
  updated_at: Thu, 11 Jan 2024 22:48:12.626716000 UTC +00:00>]
```
- Use bracket notation to access an instance inside the array  
`> kala[1]`
```bash
# Active Record
#<Menu:0x00000001081c1b88
 id: 5,
 chef: "Kala",
 dish: "shrimp gravy",
 created_at: Thu, 11 Jan 2024 22:48:12.626716000 UTC +00:00,
 updated_at: Thu, 11 Jan 2024 22:48:12.626716000 UTC +00:00> 
```

2. Delete the instance
- destroy method will remove the instance from the database  
`> kala[1].destroy`




