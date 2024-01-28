class Api::DashboardController < ApplicationController
  def index
    render json: { example: 'API DATA IS UPDATED' }
  end
end
