class User < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_secure_password
  acts_as_authentic
end
