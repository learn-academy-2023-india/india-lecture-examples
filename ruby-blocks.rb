# Ruby Blocks 1/3/2024 India

# Ruby block: anonymous function that is passed to a method, a chunk of code that is enclosed within either a do...end or {}.

# range: sequence of numbers or characters. Defined using range operator (..)

# Iteration - repeating an action until a condition is met

# Syntax of a ruby block

# do...end
# object.method do
  # code block
# end

# curly braces
# object.method {
  # code block
# }

# times method: loop a specific number of times
# 5.times do
#   puts "Aloha"
# end

# Output: Aloha
  # Aloha
  # Aloha
  # Aloha
  # Aloha

# each method: use to perform a specific operation for each element inside an array
# parameters: |parameter|
  # commonly used in iterable elements like arrays, range
# string interpolation "#{variable}"

# fruits = ['coconut', 'avocado', 'pineapple', 'mango', 'fig']

# fruits.each do |value|
#   puts "I love #{value}!"
# end

# output: I love coconut!
  # I love avocado!
  # I love pineapple!
  # I love mango!
  # I love fig!

# while method: repeat a block of code until a certain condition becomes false

# number = 1

# while number < 5
#   puts "Current number: #{number}"
# end

# output: stack overflow because the loop continued evaluating 1. Stop the stack overflow: Ctrl + C

# number = 1

# while number < 5
#   puts "Current number: #{number}"
#   number = number + 1 # long hand
#   # number += 1 # short hand
# end

# output: Current number: 1
# Current number: 2
# Current number: 3
# Current number: 4


# range: object that represents a sequence of values
  # range: sequence of numbers or characters. Defined using range operator (..)

# number_range = 1..20
# p number_range

# number_range.each do |value|
#   puts "Number: #{value}"
# end

# output: Number: 1
  # Number: 2
  # Number: 3
  # Number: 4
  # Number: 5
  # Number: 6
  # Number: 7
  # Number: 8
  # Number: 9
  # Number: 10
  # Number: 11
  # Number: 12
  # Number: 13
  # Number: 14
  # Number: 15
  # Number: 16
  # Number: 17
  # Number: 18
  # Number: 19
  # Number: 20

# map method: 

# birthday_gift = ['spa day', 'perfume', 'purse', 'bones for the broth', 'spirited beverages', 'flowers', 'cake']

# birthday_gift.each do |gift|
#   puts "Unhumblers are gifting the Aloha Queen #{gift}"
# end
# Output:
  # Unhumblers are gifting the Aloha Queen spa day
  # Unhumblers are gifting the Aloha Queen perfume
  # Unhumblers are gifting the Aloha Queen purse
  # Unhumblers are gifting the Aloha Queen bones for the broth
  # Unhumblers are gifting the Aloha Queen spirited beverages
  # Unhumblers are gifting the Aloha Queen flowers
  # Unhumblers are gifting the Aloha Queen cake

# p birthday_gift
# Output: ["spa day", "perfume", "purse", "bones for the broth", "spirited beverages", "flowers", "cake"]

# birthday_gift.map do |gift|
#   puts "Unhumblers are gifting the Aloha Queen #{gift}"
# end

# Output: When the map is not stored in a variable
# Unhumblers are gifting the Aloha Queen spa day
# Unhumblers are gifting the Aloha Queen perfume
# Unhumblers are gifting the Aloha Queen purse
# Unhumblers are gifting the Aloha Queen bones for the broth
# Unhumblers are gifting the Aloha Queen spirited beverages
# Unhumblers are gifting the Aloha Queen flowers
# Unhumblers are gifting the Aloha Queen cake

# To access the array, store the map block in a variable

# birthday_gift = ['spa day', 'perfume', 'purse', 'bones for the broth', 'spirited beverages', 'flowers', 'cake']

# aloha_gifts = birthday_gift.map do |gift|
#   "Unhumblers are gifting the Aloha Queen #{gift}"
# end

# p aloha_gifts

# output: ["Unhumblers are gifting the Aloha Queen spa day", "Unhumblers are gifting the Aloha Queen perfume", "Unhumblers are gifting the Aloha Queen purse", "Unhumblers are gifting the Aloha Queen bones for the broth", "Unhumblers are gifting the Aloha Queen spirited beverages", "Unhumblers are gifting the Aloha Queen flowers", "Unhumblers are gifting the Aloha Queen cake"]

# p 'birthday_gift: ', birthday_gift
# Output: ["spa day", "perfume", "purse", "bones for the broth", "spirited beverages", "flowers", "cake"]

# Mutator: place the bang operator(!) after the method
# my_gift = ['spa day', 'perfume', 'purse', 'bones for the broth', 'spirited beverages', 'flowers', 'cake']

# my_gift.map! do |gift|
#   "Unhumblers are gifting the Aloha Queen #{gift}"
# end

# p 'my_gift: ', my_gift
# output: ["Unhumblers are gifting the Aloha Queen spa day", "Unhumblers are gifting the Aloha Queen perfume", "Unhumblers are gifting the Aloha Queen purse", "Unhumblers are gifting the Aloha Queen bones for the broth", "Unhumblers are gifting the Aloha Queen spirited beverages", "Unhumblers are gifting the Aloha Queen flowers", "Unhumblers are gifting the Aloha Queen cake"]

# Create a loop that prints only even numbers from 20 to 0.
# num = 20
# while num >= 0
#   p num
#   num = num - 2 # long hand
#   # num -= 2 # short hand
# end

# Output: 20
  # 18
  # 16
  # 14
  # 12
  # 10
  # 8
  # 6
  # 4
  # 2
  # 0

# ice box: using multiple parameters and access the index
# ruby method link