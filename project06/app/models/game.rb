class Game < ActiveRecord::Base
  belongs_to :user
  validates :title, :presence => true
  attr_accessible :rating, :title
end
