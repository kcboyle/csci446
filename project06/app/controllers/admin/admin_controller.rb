class AdminController < ApplicationController
  before_filter :require_user
  filter_access_to :all

  def index
    @games_count = Game.count
    @games = Game.paginate page: params[:page], :per_page => 10
end
