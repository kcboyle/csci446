class Article < ActiveRecord::Base
  belongs_to :author

  validates :title, :presence => true
  validates :content, :presence => true
  validates :author_id, :presence => true
end
