class Article < ActiveRecord::Base
  belongs_to :authors

  validates :title, :presence => true
  validates :content, :presence => true
end
