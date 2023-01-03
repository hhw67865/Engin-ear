class UsersController < ApplicationController

  # do we need to see all users of the app?

  def show
    render json: User.find(params[:id]), status: :ok
  end

  def create
    render json: User.create!(user_params), status: :created
  end

  def update
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy
    User.find(params[:id]).destroy
    render json: {}, status: :no_content
  end



  private
  def user_params
    params.permit(:name, :pronouns, :password, :email, :job_title, :employer, :open_to_work?, :profile_picture, :location)
  end
  

end
