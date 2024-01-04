# Ruby Hashes

# Data types
# - integers
# - floats
# - arrays
# - nil
# - true
# - false
# - symbol
# - string
# - range

# Actions performed on data
# - methods - dot notions, custom methods
# - iterations
# - instantiate a class to make an object
# - math
# - delete
# - evaluations - conditional statements

# CRUD - create, read, update, delete
# developer philosophy of what you can do with data

# Hashes
# - data structure in Ruby
# - contain sets of information
# - sets of key value pairs

# instantiating an instance of the Hash class
# birthday = Hash.new
# p birthday
# => {}


# READ - getting data back, seeing data

# birthday = {keoni: 'June 3', garry: 'June 17', michael: 'September 6', joshua: 'September 17', march: ['Andrew', 'Xavier'], april: {tomas: 13, leo: 18}}

# p birthday
# => {:keoni=>"June 3", :garry=>"June 17", :michael=>"September 6", :joshua=>"September 17", :march=>["Andrew", "Xavier"], :april=>{:tomas=>13, :leo=>18}}

# symbol - :keoni, colon then the data name
# => - hash rocket

# => 'September 6'
# p birthday[:michael]

# => 'Xavier'
# p birthday[:march][1]

# => 18
# p birthday[:april][:leo]

# => 'Andrew'
# p birthday[:march][0]


# CREATE - added data that didn't already exist

# birthday = {keoni: 'June 3', garry: 'June 17', michael: 'September 6', joshua: 'September 17', march: ['Andrew', 'Xavier'], april: {tomas: 13, leo: 18}}

# name of hash, new symbol (key), assignement operator, value
# birthday[:charlean] = 'January 20'

# p birthday

# => {:keoni=>"June 3", :garry=>"June 17", :michael=>"September 6", :joshua=>"September 17", :march=>["Andrew", "Xavier"], :april=>{:tomas=>13, :leo=>18}, :charlean=>"January 20"}

# birthday[:december] = ['Rod']

# p birthday

# => {:keoni=>"June 3", :garry=>"June 17", :michael=>"September 6", :joshua=>"September 17", :march=>["Andrew", "Xavier"], :april=>{:tomas=>13, :leo=>18}, :charlean=>"January 20", :december=>["Rod"]}

# => 'January 20'
# p birthday[:charlean]

# => 'Rod' === ["Rod"]
# p birthday[:december][0]


# UPDATED - modified existing data

# birthday = {keoni: 'June 3', garry: 'June 17', michael: 'September 6', joshua: 'September 17', march: ['Andrew', 'Xavier'], april: {tomas: 13, leo: 18}}

# name_of_hash[:new_symbol] = value
# birthday[:charlean] = 'January 20'

# => {:keoni=>"June 3", :garry=>"June 17", :michael=>"September 6", :joshua=>"September 17", :march=>["Andrew", "Xavier"], :april=>{:tomas=>13, :leo=>18}, :charlean=>"January 20"}

# birthday[:charlean] = 'January 18'
# => {:keoni=>"June 3", :garry=>"June 17", :michael=>"September 6", :joshua=>"September 17", :march=>["Andrew", "Xavier"], :april=>{:tomas=>13, :leo=>18}, :charlean=>"January 18"}

# p birthday[:march]
# => ["Andrew", "Xavier"]

# birthday[:march] << 'Joe'

# p birthday
# => {:keoni=>"June 3", :garry=>"June 17", :michael=>"September 6", :joshua=>"September 17", :march=>["Andrew", "Xavier", "Joe"], :april=>{:tomas=>13, :leo=>18}, :charlean=>"January 18"}

# p birthday[:april]
# => {:tomas=>13, :leo=>18}

# hash      hash    new_key   value
# birthday[:april][:new_guy] = 17

#                     hash    hash
# april_birthdays = birthday[:april]
#                   new_key  value
# april_birthdays[:new_guy] = 17


# DELETE - remove existing data

birthday = {keoni: 'June 3', garry: 'June 17', michael: 'September 6', joshua: 'September 17', march: ['Andrew', 'Xavier'], april: {tomas: 13, leo: 18}}

# birthday.delete(:april)
# birthday.delete :april
# p birthday


# Duck Typing - if it walks like a duck and quack likes a duck treat it like a duck

# Enumerables - collections of data that are iterable, ranges, arrays, hashes

# birthday.each do |key, value|
#   p key
# end

# values:
# "June 3"
# "June 17"
# "September 6"
# "September 17"
# ["Andrew", "Xavier"]
# {:tomas=>13, :leo=>18}

# keys:
# :keoni
# :garry
# :michael
# :joshua
# :march
# :april


# birthday.each do |banana, value|
#   p "#{banana.capitalize}'s birthday is #{value}"
# end

# "Keoni's birthday is June 3"
# "Garry's birthday is June 17"
# "Michael's birthday is September 6"
# "Joshua's birthday is September 17"
# "March's birthday is [\"Andrew\", \"Xavier\"]"
# "April's birthday is {:tomas=>13, :leo=>18}"


all_the_birthdays = birthday.map do |banana, value|
  "#{banana.capitalize}'s birthday is #{value}"
end

p all_the_birthdays

# => ["Keoni's birthday is June 3", "Garry's birthday is June 17", "Michael's birthday is September 6", "Joshua's birthday is September 17", "March's birthday is [\"Andrew\", \"Xavier\"]", "April's birthday is {:tomas=>13, :leo=>18}"]

p all_the_birthdays[0]
# => "Keoni's birthday is June 3"