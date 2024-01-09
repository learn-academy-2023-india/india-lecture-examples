## Ruby RSPEC 1/9/24

behavior driven development (BDD): software development methodology that describes the desired behavior of an application, using specifications written in more of a natural language

gem: reusable code, dependencies, library in the Ruby programming language

RubyGems: infrastructure for distributing, creating, and managing gems for Ruby

RSpec: testing framework for Ruby

specs: specifications or tests written to describe the expected behavior of our code

domaine specific language: (DSL) language that is specialized for a particular task in a specified programming language

## Process
1. Create a directory to organize the files
2. Create a ruby file for our code
3. Create a testing file with the extension `_spec.rb`
4. Create a superclass Song with the following:
  - attributes of artist, song_name, genre
  - methods: display the song info
5. Create a subclass PlayList with the following:
  - attributes of fav_list
  - method to place the songs in the fav_list
6. Testing first, code last
### RED-GREEN-REFACTOR
- RED
  - Write the test
  - See the test fail
- GREEN
  - Write the code to pass the test
  - See the test pass
- REFACTOR
  - Refactor

## Write the test
### RSPEC test structure
```rb
# imports
require 'rspec'
require_relative 'rspec'

# describe takes the class name and a ruby block
describe Song do
  # it (test case) takes a string that describes the behavior being tested and a ruby block
  it 'has to be real' do
    # expect (assertion) takes a method in {} or a value in ()
    # rspec matcher is appended to the end to receive an evaluation
    expect{ Song.new }.to_not raise_error
  end
end
```
## See the test fail
### Execute the test
- $ `rspec song_spec.rb`

### Good failure
- printout from test results
```bash
NameError:
  uninitialized constant Song
  0 examples, 0 failures
```

## Write the code to pass the test
- write as much as necessary
```rb
class Song
end
```
## See the test pass
- $ `rspec song_spec.rb`
```bash
Song
  has to be real
1 example, 0 failures
```

## Refactor
- not necessary with the following code

## Default Values
Two ways to provide default for an attribute  
1. assign the value to the attribute within the execute code
```rb
  def initialize(artist, song_title, genre)
    super(artist, song_title, genre)
    @fav_list = []
  end
```
2. assign the value initialize parameters
```rb
  def initialize(artist, song_title, genre, fav_list = [])
    super(artist, song_title, genre)
    @fav_list = fav_list
  end
```

## Operators
- `<` shows inheritance
- `<<` shovel operator, pushes values into an array

## Debugging
- To see the data values, print to the console by performing `p` within the `it` code block
```rb
# testing that songs can be added to the fav_list array
  it 'has the ability to add songs to the fav_list array' do
    chantel = PlayList.new('Sisqo', 'Thong Song', 'R&B')
    # debugging to see the object and the fav_list attribute values
    p 'chantel song: ', chantel
    p 'fav_list: ', chantel.fav_list
    expect{ chantel.add_song(chantel) }.to change{ chantel.fav_list }.from([]).to([chantel])
    # debugging to see the fav_list value after performing the method call
    p 'fav_list ', chantel.fav_list
  end
```