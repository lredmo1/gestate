class LayersController < ApplicationController
  skip_before_action :authorize, only: [:index,:show]

  def index 
    layers = Layer.all
    render json: layers, status: :ok
  end 

  
  def show 
    layer = Layer.find(params[:id])
    render json: layer, status: :ok
  end 


end
