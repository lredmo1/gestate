class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  skip_before_action :authorize, only: [:create, :index, :show, :update]

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
    user = User.find(params[:id])
    user.update(:name, :email, :prof_pic_url, :username)
    render json: user, status: :ok
  end

  private

  def user_params
    params.permit(:name, :email, :prof_pic_url, :username, :password, :password_confirmation)
  end

  def render_not_found_response
    render json: {error: error.message}, status: :not_found
  end

end
