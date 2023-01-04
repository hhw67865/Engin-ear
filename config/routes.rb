Rails.application.routes.draw do
  resources :follows, except: :destroy
  resources :post_tags
  resources :tags
  resources :comments
  resources :posts
  resources :professional_links
  resources :users

  delete 'follows/delete', to: 'follows#destroy'

  post '/login', to: "sessions#create"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"
end
