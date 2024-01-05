# p 20.class # Integer
# p 'Aloha'.class # String
# p ['birthday', 'gift', 'song'].class # Array

# Ruby classes: blueprint for creating objects, reusable code 
# objects: instance of a class, class instantiation
# PascalCase: each word starts will a capital letter

# # Define the class
# class PacMan
# end

# # Instantiate the class by using the new method, which creates an object
# pac = PacMan.new
# p pac
# Output: #<PacMan:0x0000000102fbe9f8>
  # PacMan: the class to which the object belongs
  # 0x0000000102fbe9f8: unique identifier to track/store the object data

# Data to add amount of lives, score, name of player
# instance variables: aka attributes, store data that belongs to the class
  # denoted with @variable_name
# getter method: returns the value
# setter method: updates the value

# # Define the class
# class PacMan
#   # using implicit return on the setter and getter
#   # setter: assign/update value
#   def set_player(player)
#     @player = player
#   end
#   # getter: return value
#   def get_player
#     @player
#   end
# end

# Instantiate the class by using the new method, which creates an object
# pac = PacMan.new
# p pac # output: #<PacMan:0x000000010720e588>

# perform method calls
# assign a value to player

# pac.set_player('Sakaa')
# p pac
# # #<PacMan:0x00000001034be458 @player="Sakaa">

# # Instantiate the class/create an object
# ms_pac = PacMan.new
# p ms_pac

# # method call
# # assign value
# ms_pac.set_player('Sokka')
# p ms_pac

# # return value
# p ms_pac.get_player
# # "Sokka"

# Refactor
# initialize method: a constructor method that is automatically called  when an object is created. 

# # Define the class
# class PacMan
#   # using implicit return on the setter and getter

#   # initialize: automatically called when creating an object
#   def initialize(player)
#     # assign value with the argument of the method call
#     @player = player
#     # hard-coded values
#     @lives = 3
#     @score = 0
#   end

#   # setter: assign/update value
#   def set_player(player)
#     @player = player
#   end
#   # getter: return value
#   def get_player
#     @player
#   end
# end

# # Instantiate the class
# rod = PacMan.new('Rod')
# # p rod
# # This output was without the hard-coded values
# # #<PacMan:0x000000010747e098 @player="Rod">

# # Update the value
# rod.set_player('Sonic')
# p rod
# #<PacMan:0x0000000104f7dd98 @player="Sonic", @lives=3, @score=0>

# hiro = PacMan.new('Luffy')
# p hiro
#<PacMan:0x0000000104f7daa0 @player="Luffy", @lives=3, @score=0>

# Refactor
# helper methods 
  # attr_accessor, built in method that has setter and getter functionality for each attribute by using a symbol to represent them.
  # Denoted by :variable_name


# Define the class
class PacMan
  # using implicit return on the setter and getter

  # attr_accessor: returns a getter and setter method for each attribute
  attr_accessor :player, :lives, :score

  # initialize: automatically called when creating an object
  def initialize(player)
    # assign value with the argument of the method call
    @player = player
    # hard-coded values
    @lives = 3
    @score = 0
  end

  # custom method
  def attacked
    # @lives = @lives - 1 #long hand
    @lives -= 1 #short hand
  end
end

# Instantiate the class
brandon = PacMan.new('Super Korean')
p brandon
# #<PacMan:0x00000001032ad998 @player="Super Korean", @lives=3, @score=0>
p brandon.player
brandon.player = 'Supa Korean'
p brandon
#<PacMan:0x000000010368d9f0 @player="Supa Korean", @lives=3, @score=0>
brandon.attacked
p brandon
# #<PacMan:0x0000000107b0d990 @player="Supa Korean", @lives=2, @score=0>