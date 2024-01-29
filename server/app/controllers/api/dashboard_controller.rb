class Api::DashboardController < ApplicationController
  def index
    @data = {
      "name": "Ali Raza",
      "age": 25,
      "profession": "Software Engineer",
    }
    render json: @data
  end
end
