class DrawingsController < ApplicationController
    skip_before_action :authorize, only: [:index,:show]
    
    def index
        drawings = Drawing.all
        render json: drawings, status: :ok
     end

     def show
        drawing = Drawing.find(params[:id])
        render json: drawing, status:200
     end 
end
