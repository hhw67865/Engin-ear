class ProfessionalLink < ApplicationRecord

  belongs_to :user
  
  validates :name, presence: true
  validates :link, presence: true
  
end
