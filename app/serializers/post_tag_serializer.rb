class PostTagSerializer < ActiveModel::Serializer
  attributes :id, :emoji
  has_one :post
  has_one :tag
end
