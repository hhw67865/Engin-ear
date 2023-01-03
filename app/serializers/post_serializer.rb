class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :post_body, :picture_url
  has_one :user, serializer: UserInfoSerializer
end
