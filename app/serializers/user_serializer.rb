class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :pronouns, :email, :password_digest, :job_title, :employer, :open_to_work?, :profile_picture
  has_many :professional_links
  has_many :posts
  has_many :comments
  has_many :followers, serializer: FollowersSerializer
  #should show justin
  has_many :following, serializer: FollowingSerializer
  #should show nothing
end
