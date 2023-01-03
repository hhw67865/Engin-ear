class TagsController < ApplicationController

  def index
    render json: Tag.all, status: :ok
  end

  # shows all posts for each tag (see tag_serializer)
  def show
     tag = Tag.find(params[:id])
     render json: tag, serializer: TagPostsSerializer, status: :ok
  end

end
