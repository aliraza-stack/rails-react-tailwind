Rails.application.routes.draw do

  # root 'api/dashboard#index'
  namespace :api do
    resources :dashboard, only: [:index]
  end
end
