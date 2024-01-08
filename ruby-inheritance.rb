# Ruby Inheritance Chantel's Birthday (1/8/24) 


# superclass
# subclass
# inheritance
# super

# Class inheritance: allows a class to inherit properties and behaviors (attributes and methods) from another class, creates a relationship between  a superclass and a subclass.

# four pillars of object-oriented programming
  # encapsulation
  # polymorphism
  # abstraction
  # inheritance

# encapsulation: wrapping data into a single unit called a class.
# polymorphism: allows objects of different classes to be treated as objects from the superclass or override the properties from the superclass.
# abstraction: the process of simplifying complex systems by focusing on what an object does rather than how it acheives it functionality.
# inheritance: allows the subclass to inherit attributes and methods from a superclass. 

# Plan:
# 1. Create a superclass called NinjaTurtle
# 2. Create attributes(instance variables) for turtle and weapon.
# 3. Create custom methods for a greeting with name and an attack with weapon.
# 4. Create a subclass for Leonardo, Michaelangelo, Donatello, and Rapheal
# 5. Create attributes(instance variables) for subclass.
# 6. Create custom methods for subclass. 

# SUPERCLASS: base class, parent class, a class that shares attributes and methods with other classes.

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

# SUBCLASS: child class, nested class, a class that inherits attributes and methods from a superclass
# The < symbol denotes inheritance.
# super: keyword to invoke the attributes from a superclass.
# class Leonardo < NinjaTurtle
#   # ensures that the initialize method inherited from the superclass is executed
#   def initialize(turtle, weapon)
#     super(turtle, weapon)
#   end
# end

# # Instantiate the subclass
# josh = Leonardo.new('Snap', 'throwing axe')
# p josh
# # output: #<Leonardo:0x0000000103d3db88 @turtle="Snap", @weapon="throwing axe">

# # Abstraction of methods inherited from superclass using dot notation
# p josh.greet
# p josh.attack
# Output:
  # "Cowabunga! I am Snap."
  # "Snap performs an attack with the throwing axe."

# CUSTOM ATTRIBUTES FOR SUBCLASS
  # move and color
  # move will use a parameter
  # color will be hard-coded, default value

# class Leonardo < NinjaTurtle
#   # getter/setter methods for additional instance variables
#   attr_accessor :move, :color

#   def initialize(turtle, weapon, move)
#     super(turtle, weapon)
#     @move = move
#     @color = 'blue'
#   end
# end

# # instantiate the subclass
# andrew = Leonardo.new('Rex', 'sword', 'flying')
# # p andrew
# # Output: #<Leonardo:0x0000000100d75928 @turtle="Rex", @weapon="sword", @move="flying", @color="blue">
# # p andrew.greet
# # p andrew.attack
# # Output:
#   # "Cowabunga! I am Rex."
#   # "Rex performs an attack with the sword."
# p andrew.move
# p andrew.turtle
# p andrew.weapon
# p andrew.color
# Output: "flying"
# "Rex"
# "sword"
# "blue"

# CUSTOM METHODS FOR SUBCLASS
# class Leonardo < NinjaTurtle
#   # getter/setter methods for additional instance variables
#   attr_accessor :move, :color

#   def initialize(turtle, weapon, move)
#     super(turtle, weapon)
#     @move = move
#     @color = 'blue'
#   end

#   # custom method
#   def role
#     'I am the leader of the Ninja Turtle Squad.'
#   end

# end

# # instantiate the subclass
# xavier = Leonardo.new('Diesel', 'stick', 'speed')
# # p xavier
# # Output: #<Leonardo:0x00000001023e4970 @turtle="Diesel", @weapon="stick", @move="speed", @color="blue">

# # Abstraction
# # superclass
# p xavier.turtle
# p xavier.attack
# # Output: 
#   # "Diesel"
#   # "Diesel performs an attack with the stick."
  
# # subclass
# p xavier.move
# p xavier.role
# Output:
  # "speed"
  # "I am the leader of the Ninja Turtle Squad."

# OVERRIDE A METHOD FROM THE SUPERCLASS
class Leonardo < NinjaTurtle
  # getter/setter methods for additional instance variables
  attr_accessor :move, :color

  def initialize(turtle, weapon, move)
    super(turtle, weapon)
    @move = move
    @color = 'blue'
  end

  # custom method
  def role
    'I am the leader of the Ninja Turtle Squad.'
  end

  # polymorphism: overriding the greet method inherited from the superclass
  def greet
    "Cowabunga! I am #{turtle} with the #{color} team."
  end

end

# Instantiate the superclass
chantel = Leonardo.new('ChaCha', 'throwing stars', 'kicking')

p chantel.greet
# Output:
  # "Cowabunga! I am ChaCha with the blue team."