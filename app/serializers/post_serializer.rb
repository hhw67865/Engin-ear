class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :post_body, :picture_url, :created_at
  has_one :user
  has_many :comments
end
