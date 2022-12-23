Rails.application.routes.draw do
  resources :follows
  resources :post_tags
  resources :tags
  resources :comments
  resources :posts
  resources :professional_links
  resources :users
end
