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

number_range = 1..20
p number_range

number_range.each do |value|
  puts "Number: #{value}"
end

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

  
# ice box: using multiple parameters and access the index
# ruby method link