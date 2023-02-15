Rails.application.routes.draw do
  
  resources :follows, only: [:create]
  resources :post_tags, only: [:index, :create, :destroy]
  resources :tags, only: [:index, :show]
  resources :comments, only: [:index, :create, :update, :destroy]
  resources :posts do
    resources :comments, only: :index
  end
  resources :professional_links, only: [:create, :update, :destroy]
  resources :users, except: :show

  get "/users/:id", to: 'users#showUser'

  delete 'follows/delete', to: 'follows#destroy'

  post '/login', to: "sessions#create"

  get "/authorized", to: "users#show"

  delete "/logout", to: "sessions#destroy"

  post '/signup', to: "users#create"

end
