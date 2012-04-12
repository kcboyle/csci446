class MembersController < ApplicationController
  before_filter :require user
  filter_access_to :all

  def index
    @games = Game.where(;user_id => current_user.id)
  end
end
