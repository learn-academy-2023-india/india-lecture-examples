## Intro to Databases 1/10/24

## Domain specific languages
- performs a task: RSPEC, HTML, Postgres

## General purpose languages
-  syntax or structure for the code: JavaScript, Ruby

SQL (Structured Query Language): domain language that gives the ability to evaluate databases

PostgreSQL: object relational database system

relational database: structures the data in rows and columns

```rb
class NinjaTurtle

  # helper method to create getter/setter methods 
  attr_accessor :turtle, :weapon
  
  # initialize method is automatically called
  def initialize(turtle, weapon)
    @turtle = turtle
    @weapon = weapon
  end

  # custom methods
  def greet
    "Cowabunga! I am #{@turtle}."
  end

  def attack
    "#{@turtle} performs an attack with the #{@weapon}."
  end
end

josh = Leonardo.new('Snap', 'throwing axe')
p josh

# # output: #<Leonardo:0x0000000103d3db88 @turtle="Snap", @weapon="throwing axe">
```
database columns: represents the attribute as well as datatype or class of the expected value
database rows: represents each object with values
database instance: each object, also the rows
database table: consists of all the rows and columns for that database
schema: a record of the current structure/status of the database
primary key: a unique identifier for each instance of the database, automatically assign, default datatype is integer

```rb
# Data is stored as an object
  {
    id: 1,
    turtle: 'Snap',
    weapon: 'throwing axe'
  }
```

## PostgreSQL

## CRUD
Database Management
Create - make a new database instance
Read - display or read that instance
Update - edit or modify that instance
Delete - remove that instance

database query - request about the data in the database, action taken upon that data

## ALL Instances
SELECT statement - designates which columns need to be queried
FROM - designates the table that the columns belong to
* - splat, universal selector, to state all instances or columns

```sql
SELECT *
FROM country
```

## First 10 instances showing only the name, continent, and region columns
```sql
SELECT name, continent, region
FROM country
LIMIT 10
```

## Setting a condition to see only the continent of Asia
WHERE clause: allows a condition to be met to display specified instances 
```sql
SELECT name, population, lifeexpectancy
FROM country
WHERE continent = 'Asia'
```
### Operators
- equality: =, !=
- relational: >, <, >=, <=
- logical: AND, OR, NOT

## only countries with a population less than 1,000,000
```sql
SELECT name, continent, population
FROM country
WHERE population < 1000000
```
### shorthand for zeros
- 1000000
- 1e6

## only countries with a population less than 1,000,000 in Asia
```sql
SELECT name, continent, population
FROM country
WHERE population < 1e6 
AND continent = 'Asia'
```

wildcard: allows to query for a sequence of characters that are expected in a value
- denoted with wildcard operator (%)
- uses LIKE
```sql
SELECT name, continent, population
FROM country
WHERE population < 1e6 
AND continent LIKE 'South Ame%'
```

subquery
aggregate functions