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
     
     def create
      drawing = Drawing.create!(drawing_params)
      render json: drawing, status: :created
    end

    private

    def drawing_params
      params.permit(:user_id,:name)
    end  
end
