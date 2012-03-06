class Author < ActiveRecord::Base
  belongs_to :category

  has_attached_file :photo,
                    :url => "/assets/authors/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/assets/authors/:id/:style/:basename.:extension"
  has_many :articles

  validates :name, :presence => true
  validates :name, :format => { :with => %r{^((?!pat).*$)}i, :message => "cannot contain the name pat"}

  validates_attachment_presence :photo
  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png', 'image/gif']

  def to_s
    to_s (@author.name)
    to_s (@article.name)
  end
end
