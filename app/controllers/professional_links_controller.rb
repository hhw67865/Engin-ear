class ProfessionalLinksController < ApplicationController

  def create
    link = ProfessionalLink.create!(link_params)
      render json: link, status: :created
  end

  def update
    link = ProfessionalLink.find_by!(id: params[:id])
    link.update!(link_params)
    render json: link, status: :accepted
  end

  def destroy
    link = ProfessionalLink.find_by!(id: params[:id])
    link.destroy
    render json: {}, status: :no_content

  end

  private

  def link_params
    params.permit(:name, :link, :user_id)
  end

end
