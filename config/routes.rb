Rails.application.routes.draw do
  resources :follows, only: [:create]
  resources :post_tags, only: [:create, :destroy]
  resources :tags, only: [:index, :show]
  resources :comments, only: [:index, :create, :update, :destroy]
  resources :posts
  resources :professional_links, only: [:create, :update, :destroy]
  resources :users

  delete 'follows/delete', to: 'follows#destroy'

  post '/login', to: "sessions#create"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"

  post '/signup', to: "users#create"
end
