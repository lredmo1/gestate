class LayersController < ApplicationController
  skip_before_action :authorize, only: :index

  def index 
    layers = Layer.all
    render json: layers, status: :ok
  end 

end
