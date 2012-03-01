class Article < ActiveRecord::Base
  validates :name, :presence => true
  validates :title, :presence => true
  validates :content, :presence => true
  validates :name, :format => { :with => %r{^((?!pat).*$)}i, :message => "cannot contain the name pat"}
end
