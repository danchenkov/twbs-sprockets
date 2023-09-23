Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # resources :about, only: [:index]
  devise_for :users

  get :about, to: "about#index"
  resources :posts

  # Defines the root path route ("/")
  root "about#home"
end
