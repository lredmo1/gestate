class LayersController < ApplicationController

  def index 
    layers = Layer.all
    render json: layers, status: :ok
  end 

end
