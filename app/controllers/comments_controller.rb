class CommentsController < ApplicationController
  
  skip_before_action :authorize, only: [:index]

  def index
    if params[:post_id]
      render json: Post.find(params[:post_id]).comments, status: :ok
    else
      render json: Comment.all, status: :ok
    end
  end

  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end

  def update
    comment = Comment.find(params[:id])
    comment.update!(comment_params)
    render json: comment, status: :accepted
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: {}, status: :no_content
  end

  private

  def comment_params
    params.permit(:comment_body, :post_id, :user_id)
  end

end
