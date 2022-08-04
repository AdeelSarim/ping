Rails.application.routes.draw do
  get 'home/show'
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/ping", to: "ping#pong", as: "ping"
  root to: "home#show"
end
