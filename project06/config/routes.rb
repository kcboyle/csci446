Gamez::Application.routes.draw do

  resources :user_sessions
  resources :users
  resources :games

  controller :user_sessions do
    get 'login' => :new
    post 'login' => :create
    get 'logout' => :destroy
  end

  root :to => 'games#index'
end
