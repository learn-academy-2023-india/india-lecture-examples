# Ruby Intro 1/2/2024

- Matz
- MINASWAN - Matz is nice and so we are nice
- Dynamic language - dynamically typed, opposite would be a statically typed
- Interpreted language - code is read line by line, opposite would be a compiled language
- Scripting language - general purpose logic language, no user interface
- Open-source - the Ruby language is open and free for anyone to use or modify
- OOP - object oriented programming language - everything in ruby is an instance of a class

### Running Ruby Code

- Ruby comes on all Macs out of the box
- ruby -v - will tell you your current Ruby version
- irb - interactive Ruby, can't use regular terminal commands
- exit - go back to the regular terminal

### Integers

- Whole numbers
- Math

### Floats

- Partial numbers

### Strings

- Single quotes
- Can use double quotes if the string requires a single quote for punctuation

### Boolean

- relational < > <= >=
- equality ==
- logical && ||

### Nil

- equal to nothing else

### Symbol

- unique identifier

```ruby
irb
3.2.0 :001 > 3 + 4
 => 7
3.2.0 :002 > 5 - 2
 => 3
3.2.0 :003 > 5 * 2
 => 10
3.2.0 :004 > 6 / 3
 => 2
3.2.0 :005 > 3 ** 3
 => 27
3.2.0 :006 > 7 % 3
 => 1
3.2.0 :007 > 5 / 3
 => 1
3.2.0 :008 > 5.0 / 3
 => 1.6666666666666667
3.2.0 :009 > 'hello'
 => "hello"
3.2.0 :010 > "hey y'all"
 => "hey y'all"
3.2.0 :011 > 5 > 3
 => true
3.2.0 :012 > 5 < 2
 => false
3.2.0 :013 > 5 >= 7
 => false
3.2.0 :014 > 3 <= 0
 => false
3.2.0 :015 > 4 == 9
 => false
3.2.0 :016 > 4 == 4
 => true
3.2.0 :017 > 4 == '4'
 => false
3.2.0 :018 > 4 != 7
 => true
3.2.0 :019 > nil
 => nil
3.2.0 :020 > 6 == 3+3 && 4 > 7
 => false
3.2.0 :021 > 6 == 3+3 || 4 > 7
 => true
```

4 == 7 - is equal to?
false

4 != 7 - is not equal to?
true

### Variables

- No variable declarations
- snake_case naming convention
- = - assignment operator
- String interpolation "hello, #{my_name}!"

### Methods

- There are a lot of methods!
- Parentheses are optional but best practice is to use them
- Methods are accessors
- Can make methods mutators with the bang operator
- Convert between data with to_i - to integer and to_s - to string

```ruby
3.2.0 :025 > my_name = 'sarah'
 => "sarah"
3.2.0 :026 > my_name
 => "sarah"
3.2.0 :027 > my_name
 => "sarah"
3.2.0 :028 > "hello, #{my_name}!"
 => "hello, sarah!"
3.2.0 :029 > my_name.length
 => 5
3.2.0 :030 > my_name.upcase
 => "SARAH"
3.2.0 :031 > my_name.capitalize
 => "Sarah"
3.2.0 :032 > "hello there india".capitalize
 => "Hello there india"
3.2.0 :033 > my_name.reverse
 => "haras"
3.2.0 :034 > my_name.delete('r')
 => "saah"
3.2.0 :035 > my_name.delete'r'
 => "saah"
3.2.0 :036 > my_name.include?('s')
 => true
3.2.0 :037 > my_name
 => "sarah"
3.2.0 :038 > my_name
 => "sarah"
3.2.0 :039 > my_name = my_name.upcase
 => "SARAH"
3.2.0 :040 > my_name
 => "SARAH"
3.2.0 :041 > my_name.downcase
 => "sarah"
3.2.0 :042 > my_name.downcase!
 => "sarah"
3.2.0 :043 > my_name
 => "sarah"
3.2.0 :044 > my_name.class
 => String
3.2.0 :045 > my_name
 => "sarah"
3.2.0 :046 > 5.class
 => Integer
3.2.0 :047 > 4.0.class
 => Float
3.2.0 :048 > nil.class
 => NilClass
3.2.0 :049 > true.class
 => TrueClass
3.2.0 :050 > false.class
 => FalseClass
3.2.0 :051 > 5 == '5'
 => false
3.2.0 :052 > ny_num = '5'
 => "5"
3.2.0 :053 > my_num = '5'
 => "5"
3.2.0 :054 > my_num == 5
 => false
3.2.0 :055 > my_num.to_i == 5
 => true
3.2.0 :056 > 6.to_s
 => "6"
3.2.0 :057 > 'hey'.to_i
 => 0
3.2.0 :058 >
```

### Arrays

- zero indexed
- << - shovel operator, adds an item to the end of the array

```ruby
3.2.0 :058 > my_nums = [4, 5, 6, 7, 8]
 => [4, 5, 6, 7, 8]
3.2.0 :059 > my_nums
 => [4, 5, 6, 7, 8]
3.2.0 :060 > my_nums.length
 => 5
3.2.0 :061 > my_nums[0]
 => 4
3.2.0 :062 > my_nums[3]
 => 7
3.2.0 :063 > my_nums[10]
 => nil
3.2.0 :064 > my_nums[-1]
 => 8
3.2.0 :065 > my_nums[-2]
 => 7
3.2.0 :066 > my_nums.last
 => 8
3.2.0 :067 > my_nums.first
 => 4
3.2.0 :068 > my_nums.reverse
 => [8, 7, 6, 5, 4]
3.2.0 :069 > my_nums.reverse.first
 => 8
3.2.0 :070 > my_nums.first.reverse
(irb):70:in `<main>': undefined method `reverse' for 4:Integer (NoMethodError)
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/gems/irb-1.8.3/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
3.2.0 :071 > my_nums
 => [4, 5, 6, 7, 8]
3.2.0 :072 > my_nums.class
 => Array
3.2.0 :073 > my_nums.join
 => "45678"
3.2.0 :074 > my_nums
 => [4, 5, 6, 7, 8]
3.2.0 :075 > my_nums.join!
(irb):75:in `<main>': undefined method `join!' for [4, 5, 6, 7, 8]:Array (NoMethodError)
Did you mean?  join
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/gems/irb-1.8.3/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/irb:25:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/irb:25:in `<main>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `eval'
	from /Users/sarahproctor/.rvm/gems/ruby-3.2.0/bin/ruby_executable_hooks:22:in `<main>'
3.2.0 :076 > my_nums
 => [4, 5, 6, 7, 8]
3.2.0 :077 > my_nums[2] = 200
 => 200
3.2.0 :078 > my_nums
 => [4, 5, 200, 7, 8]
3.2.0 :079 > my_nums << 99
 => [4, 5, 200, 7, 8, 99]
3.2.0 :080 > my_nums
 => [4, 5, 200, 7, 8, 99]
```
