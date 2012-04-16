# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
Game.delete_all
User.delete_all

15.times do
  Game.create(:title => 'Whee fun game!', 
              :rating => 'Amazing')
end

User.create(:username => 'sdalkey', :email => 's@dalkey.com', :password => 'password', :password_confirmation => 'password', :first_name => 'Sara', :last_name => 'Dalkey')

User.create(:username => 'scollins', :email => 's@collins.com', :password => 'password', :password_confirmation => 'password', :first_name => 'Suzanne', :last_name => 'Collins')

User.create(:username => 'ksatozuki', :email => 'k@satozuki.com', :password => 'password', :password_confirmation => 'password', :first_name => 'Kaya', :last_name => 'Satozuki')


