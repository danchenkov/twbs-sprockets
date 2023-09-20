Rails.application.routes.draw do
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # resources :about, only: [:index]
  get :about, to: "about#index"

  # Defines the root path route ("/")
  root "about#index"
end
