Gamez::Application.routes.draw do

  resources :user_sessions
  resources :users
  resources :games

  controller :user_sessions do
    get 'login' => :new
    post 'login' => :create
    get 'logout' => :destroy
  end

  namespace :admin do 
    resources :roles
    resources :users
    root :controller => 'admin', :action => 'index'
  end

  root :to => 'games#index'
end
