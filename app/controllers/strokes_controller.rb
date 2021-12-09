class StrokesController < ApplicationController

  def index 
    strokes = Stroke.all
    render json: strokes, status: :ok
  end 

  def create
    stroke = Stroke.create(eval(params[:arrayOfStrokes]))
    render json: stroke,status:201
  end

  def destroy
    stroke = Stroke.find(params[:id])
    stroke.destroy
    head :no_content
  end
 
  private

  def stroke_params
    params.require(:arrayOfStrokes).permit(:start_stroke,:line_path,:layer_id,:drawing_id)
  end


end
