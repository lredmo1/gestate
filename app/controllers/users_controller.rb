class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    users = User.all
    render json: users, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  def update
    user = find(params[:id])
    user.update(user_params)
    render json: user, status: :ok
  end

  private

  def user_params
    params.permit(:name, :email, :prof_pic_url, :username, :password, :password_confirmation)
  end

#   def create 
#     user = User.create(user_params)
#     if user.valid?
#         render json: user, status: :created 
#     else 
#         render json: user.errors.full_messages, status: :unprocessable_entity 
#     end 
# end

#     def show
#         user = User.find_by(id: session[:user_id])
#         if user
#           render json: user
#         else
#           render json: { error: "Not authorized" }, status: :unauthorized
#         end
#       end
    
end
