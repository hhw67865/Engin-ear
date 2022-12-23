class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :pronouns, :email, :password_digestlocation, :job_title, :employer, :open_to_work?, :profile_picture
end
