class Game < ActiveRecord::Base
  belongs_to :user
  validates :title, :presence => true
  attr_accessible :rating, :title
  def self.search(search, page)
    paginate :per_page => 5, :page => page
  end
end
