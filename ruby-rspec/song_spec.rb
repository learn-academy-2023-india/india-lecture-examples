# imports of dependencies needed to execute the test

require 'rspec'
require_relative 'song'

describe Song do
  # testing for the existence of a class
  it 'has to be real' do
    expect{ Song.new('Anita Baker', 'Angel', 'R&B') }.to_not raise_error
  end

  # testing for an artist attribute
  it 'has an artist' do
    # initiate the class
    anita = Song.new('Anita Baker', 'Angel', 'R&B')
    # evaluation the behavior
    # the value will equal `.to eq`
    expect(anita.artist).to eq('Anita Baker')
    # the value will be a class (`.to be_a`)
    expect(anita.artist).to be_a(String)
  end

  # testing for a song_title attribute
  it 'has a song_title' do
    chapter = Song.new('Mozzy', 'Idols', 'Hip Hop')
    expect(chapter.artist).to eq('Mozzy')
    expect(chapter.song_title).to eq('Idols')
  end

  # testing for genre attribute
  it 'has a genre' do
    type = Song.new('Childish Gambino', 'Me and Your Mama', 'Hip Hop')
    expect(type.artist).to eq('Childish Gambino')
    expect(type.song_title).to eq('Me and Your Mama')
    expect(type.genre).to eq('Hip Hop')
  end
end

describe PlayList do
  it 'has to be real' do
    expect{ PlayList.new }
  end
  # modified for additional notes
  # testing for music_fan attribute
  it 'has a music_fan attribute' do
    rod = PlayList.new('Rod')
    expect(rod.music_fan).to eq('Rod')
    expect(rod.music_fan).to be_a(String)
  end

  # testing for a fav_list attribute
  it 'has a fav_list attribute' do
    rod = PlayList.new('Rod')
    expect(rod.fav_list).to eq([])
    expect(rod.fav_list).to be_a(Array)
  end

  # testing that songs can be added to the fav_list array
  it 'has the ability to add songs to the fav_list array' do
    # instantiate Song class to create song objects
    favorite = Song.new('Jason Aldean', 'Big Green Tractor', 'Country')
    chantel = Song.new('Sisqo', 'Thong Song', 'R&B')

    # instantiate PlayList class to create playlist objects
    rod = PlayList.new('Rod')
    birthday_song = PlayList.new('Capricorn')
    
    # method call inside the assertion(expect statement)
    expect{ rod.add_song(favorite) }.to change{ rod.fav_list }.from([]).to([favorite])
    
    # method call outside the expect statement
    birthday_song.add_song(chantel)
    expect(birthday_song.fav_list).to eq([chantel])
  end
end
