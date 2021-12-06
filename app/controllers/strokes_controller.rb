class StrokesController < ApplicationController

  def index 
    strokes = Stroke.all
    render json: strokes
  end 

end
