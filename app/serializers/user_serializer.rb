class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :pronouns, :email, :job_title, :employer, :open_to_work?, :profile_picture
  
  has_many :professional_links
  
end
