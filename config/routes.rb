Rails.application.routes.draw do
  
  resources :strokes
  resources :layers 
  resources :drawings do 
    resources :layers, only: [:show]
  end 
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  patch "/edit", to: "users#update"
end
