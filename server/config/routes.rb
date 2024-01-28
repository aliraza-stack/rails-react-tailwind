Rails.application.routes.draw do
  namespace :api do
    resources :dashboard, only: [:index]
  end
end
