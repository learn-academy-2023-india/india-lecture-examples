# Ruby Conditonals and Methods 1/2/2024 India

# method: the instructions or actions to perform a specified tasks
# def/end: key words to encapsulate the method
  # def: defines the method
  # prepare_tea: name of the method in snake_case
  # end: specifies the scope of the method
  # executable code is between the def and end

# # define the method
# def prepare_tea
#   puts "Boil water"
# end

# # method call
# prepare_tea

# output: Boil water

# Printing multiple lines
# define the method
  # def prepare_tea

  #   # puts: put string, user-facing message
  #   puts "Boil water"
  #   puts "Pour into a cup"

  #   # p: print, debugging
  #   p "Steep the tea leaves"
  #   p "Season with honey, cinnamon, and lemon"
  # end

# method call
  # prepare_tea

# Output: 
  # Boil water
  # Pour into a cup
  # "Steep the tea leaves"
  # "Season with honey, cinnamon, and lemon"

# implicit return: ruby method will automatically return the last line of code

# def prepare_tea
#   "Boil water"
#   "Pour into a cup"
#   "Steep the tea leaves"
#   "Season with honey, cinnamon, and lemon"
# end

# p prepare_tea

# Output: "Season with honey, cinnamon, and lemon"

# local scope: If an element is defined inside the method, you will only have access to that element inside the method. 

# def tea_temperature
#   hot = "Sip on this hot tea"
#   cold = "Gulp this iced tea"
#   p hot
# end

# tea_temperature
# # output: "Sip on this hot tea"

# p cold
# output: undefined local variable or method `cold' for main:Object (NameError), cannot print outside the local scope of the method

# if/else/end
# if: first key word to start a condition
    # every if has an end
    # takes a condition
    # one if per ruby condition

# method definition with a parameter
  # def tea_temperature sick
  #   hot = "Sip on this hot tea"
  #   cold = "Gulp this iced tea"
  #   if sick == "yes"
  #     puts hot
  #   end
  # end

# method call with an argument because a parameter was specified in the method definition
  # tea_temperature "yes"
  # output: Sip on this hot tea

  # tea_temperature "no"
  # output: Because there is not a condition, there is not an output. 

# else: default output, keyword, one else per ruby conditions
    # does not take a condition
  # def tea_temperature sick
  #   hot = "Sip on this hot tea"
  #   cold = "Gulp this iced tea"
  #   if sick == "yes"
  #     puts hot
  #   else
  #     puts cold
  #   end
  # end

  # tea_temperature "no"
  # # Output: Gulp this iced tea

# elsif: keyword to add additional conditions
  # takes in a condition
  # executable code block
  # have as many as necessary

  # def tea_temperature sick
  #   hot = "Sip on this hot tea"
  #   cold = "Gulp this iced tea"
  #   if sick == "yes"
  #     puts hot
  #   elsif sick == "no"
  #     puts cold
  #   else
  #     puts "Here's an empty cup"
  #   end
  # end
  
  # tea_temperature "no"
  # Output: Gulp this iced tea

  # tea_temperature "absolutely"
  # Output: Here's an empty cup

# unless: keyword that gives an output if the specified condition is false
  # takes in a condition
  # every unless has an end

  # def tea_temperature sick
  #   hot = "Sip on this hot tea"
  #   cold = "Gulp this iced tea"
  #   unless sick == "no"
  #     puts "Drink water"
  #   end
  # end

  # # tea_temperature "no" 

# # Output: No output. An else statement will be required to cover a true condition.

  # def tea_temperature sick
  #   hot = "Sip on this hot tea"
  #   cold = "Gulp this iced tea"
  #   unless sick == "no"
  #     puts "Drink water"
  #   else
  #     puts "Have a Coca-cola and this smile"
  #   end
  # end

  # tea_temperature "no" 

  # # Output: Have a Coca-cola and this smile

  # tea_temperature "yes" 
  # # Output: Drink water

# gets: get string, pauses the operation of the application to allow a user to input information on the terminal
# chomp: removes line characters any other unseen characters from responses to the gets method

# puts "Are you sick? Type yes or no"
# # sickly = gets
# # p sickly
# # Output: "yes\n"
# sickly = gets.chomp
# # p sickly
# # Output: "yes"

#   def tea_temperature sick
#     hot = "Sip on this hot tea"
#     cold = "Gulp this iced tea"
#     if sick == "yes"
#       puts hot
#     elsif sick == "no"
#       puts cold
#     else
#       puts "Here's an empty cup"
#     end
#   end
  
#   tea_temperature sickly
  # Output: Gulp this iced tea because user typed "no"


puts "Please type your age"
age = gets.chomp.to_i
# p age.class # using class method to check the class of the value
puts "Type yes or no. Have we known each other longer than a year?"
known_years = gets.chomp

# use a parenthesis with multiple parameters
# def tea_cup(user_age, user_years)
#   if user_age > 18
#     puts "Grab a porcelain cup"
#   elsif user_age > 18 && user_years == "yes"
#     puts "Please select a porcelain cup that you would like to keep"
#   else
#     puts "Sit at the Baby Shark table"
#   end 
# end

# tea_cup(age, known_years)

# place the most stringent condition on top. Conditional statements stop at the first true condition.
def tea_cup(user_age, user_years)
  if user_age > 18 && user_years == "yes"
    puts "Please select a porcelain cup that you would like to keep"
  elsif user_age > 18 
    puts "Grab a porcelain cup"
  else
    puts "Sit at the Baby Shark table"
  end 
end

tea_cup(age, known_years)