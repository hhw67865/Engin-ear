class UserInfoSerializer < ActiveModel::Serializer
  
  attributes :id, :name, :pronouns, :email, :password_digest, :job_title, :employer, :open_to_work?, :profile_picture
  has_many :professional_links
  has_many :posts
  has_many :comments
  has_many :followers, serializer: FollowersSerializer
  
  has_many :following, serializer: FollowingSerializer
end
