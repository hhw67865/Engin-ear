class UsersController < ApplicationController
  
  skip_before_action :authorize, only: [:create, :index, :showUser]

  # do we need to see all users of the app?

  def index
    render json: User.all, status: :ok
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user,serializer: UserInfoSerializer, status: :ok
    else
      render json: { error: "Not Authorized" }, status: :unauthorized
    end
  end

  def create
    render json: User.create!(user_params), status: :created
  end

  def update
    user = User.find_by(id: session[:user_id])
    user.update!(user_params)
    render json: user,serializer: UserInfoSerializer, status: :accepted
  end

  def destroy
    User.find(params[:id]).destroy
    render json: {}, status: :no_content
  end

  def showUser
    render json: User.find(params[:id]), status: :ok
  end



  private
  def user_params
    params.permit(:name, :pronouns, :password, :email, :job_title, :employer, :open_to_work?, :profile_picture, :location)
  end
  

end

