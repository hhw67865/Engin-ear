class FollowsController < ApplicationController

  def create
    render json: Follow.create!(follow_params), status: :created
  end

  def destroy
    Follow.find_by!(follower_id: params[:follower_id], followed_id: params[:followed_id]).destroy
    render json: {}, status: :no_content
  end

  private

  def follow_params
    params.permit(:follower_id, :followed_id)
  end

end
