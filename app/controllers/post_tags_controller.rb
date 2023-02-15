class PostTagsController < ApplicationController
  
  skip_before_action :authorize, only: [:index]

  def index
    render json: PostTag.all, status: :ok
  end

  def create
    post_tag = PostTag.create!(post_tag_params)
    render json: post_tag, status: :created
  end

  def destroy
    Post.find(params[:id])
    post_tag = PostTag.where("post_id = ?",params[:id])
    post_tag.destroy_all
    render json: {}, status: :no_content
  end

  private

  def post_tag_params
    params.permit(:post_id, :tag_id,:emoji)
  end

end
