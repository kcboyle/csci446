class User < ActiveRecord::Base
  belongs_to :role  
  has_many :games, :dependent => :destroy
  acts_as_authentic
  attr_accessible :email, :first_name, :last_name, :password, :username, :password_confirmation
  validates :first_name, :presence => true, :uniqueness => true
  validates :last_name, :presence => true, :uniqueness => true
end
