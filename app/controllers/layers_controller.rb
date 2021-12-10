class LayersController < ApplicationController
  skip_before_action :authorize, only: [:index,:show,:create]

  def index 
    layers = Layer.all
    render json: layers, status: :ok
  end 

  
  def show 
    layer = Layer.find(params[:id])
    render json: layer, status: :ok
  end 

  def create
    layer = Layer.create!(layer_params)
    render json: layer, status: :created
  end

  def update
    layer = Layer.find(params[:id])
    layer.update(layer_params)
    render json: layer, status: :ok
  end

  private

  def layer_params
    params.permit(:drawing_id,:name,:information,:postion,:user_id)
  end  


end
