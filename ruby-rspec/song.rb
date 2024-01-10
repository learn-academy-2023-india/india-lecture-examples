class Song
  attr_accessor :artist, :song_title, :genre

  def initialize(artist, song_title, genre)
    @artist = artist
    @song_title = song_title
    @genre = genre
  end
end

class PlayList
  attr_accessor :fav_list, :music_fan

  def initialize(music_fan)
    @music_fan = music_fan
    @fav_list = []
  end

  def add_song(selection)
    @fav_list << selection
  end

end